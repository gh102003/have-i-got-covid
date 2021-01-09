# Calculating Chances

'Prevalence data' refers to the REACT-1 study [round 7 report][1] at Imperial College London.

Functions and variables are from [calculateChance.js](./src/results/calculateChance.js).

## Overview

We combine the probabilities for different groups of the population to estimate the chance the user would test positive for Covid-19 in a PCR test.

## User Data

We collect some data about the user to classify them into the correct groups of the population. All questions are optional so that users can skip one if they feel uncomfortable answering it.

First we ask for some general demographic information:
- age
- sex
  - male or female
- location
  - Scotland, Wales, Northern Ireland, or one of nine regions in England
- household size

Then we ask some follow-up questions:
- employment type 
  - healthcare worker, key worker, other worker or unemployed
  - asked only if they are aged between 18 and 64, inclusive
- ethnicity
  - White, Asian, Black, Mixed or other
  - asked only if they didn't answer the household size question
- if they have had close contact with someone with Covid-19 in the last two weeks
  - confirmed with a test, suspected based on close contact's symptoms, or no/unsure

Since lots of pairs of factors are correlated (such as household size and ethnicity, and age and employment), we limit which questions we ask to avoid accounting for what is essentially the same risk factor multiple times, which would lead to extremely high or extremely low results. We have also made a conscious decision not to use data on deprivation for broadly the same reason.

## Determining the Chance

After filtering out invalid data, we combine the prevalences for the risk factors before scaling them to better represent an updated national picture of the virus.

We use two 'routes' to find different two separate probabilities, then choose one to take forward. This is because the results from each group are likely to be correlated, because there is a higher prevalence amongst certain groups of people which will cause a higher likelihood of having a close contact with Covid-19.

### Route 1: Demographics and Employment

By starting with the Covid-19 prevalence in each group and dividing by the base prevalence for the whole of England, multipliers can be found for the approximate extra risk in each group.

For example, prevalence is 2.04% amongst 13-17 year olds and 0.94% in the whole English population. This means that there is a ![$\frac{0.0204}{0.0094} \approx 2.17$](https://latex.codecogs.com/svg.latex?%5Cinline%20%5Cfrac%7B0.0204%7D%7B0.0094%7D%20%5Capprox%202.17) risk multiplier for 13-17 year olds.

The product of the risk multipliers and the base prevalence should provide a rough approximation of the chance a person has Covid-19. These calculations can be simplified to

![$$\text{positivity chance} \approx \frac{\prod_{i=1}^n P_i}{(P_{base})^{n-1}}$$](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Ctext%7Bpositivity%20chance%7D%20%5Capprox%20%5Cfrac%7B%5Cprod_%7Bi%3D1%7D%5En%20P_i%7D%7B%28P_%7Bbase%7D%29%5E%7Bn-1%7D%7D)

where ![$P_{base}$](https://latex.codecogs.com/svg.latex?%5Cinline%20P_%7Bbase%7D) is the base prevalence,
and ![$P = \{P_1, P_2, P_3, ..., P_n\}$](https://latex.codecogs.com/svg.latex?%5Cinline%20P%20%3D%20%5C%7BP_1%2C%20P_2%2C%20P_3%2C%20...%2C%20P_n%5C%7D) is the set of the prevalences in the groups to which the person belongs.

However, this method of calculating the positivity chance may not be quite fully accurate, as it makes some potentially incorrect assumptions:

- being in different groups are completely independent events, that is, being in one group makes a person no more likely to be in another group
- the risk factors are multiplicative of the base rate, rather than additive
- the prevalences in the data are completely accurate

### Route 2: Close Contacts

There is a clearly defined higher chance that someone who has a close contact with confirmed Covid-19 also has the virus. However, it is probable that people in higher risk demographic groups are more likely to have these close contacts, so it is unsuitable to mix together the factors as described above.

Instead, we take the risk given just whether the person had confirmed, suspected or no Covid-positive close contacts.

### Choosing A Route

If the user didn't answer the question about close contacts then route 2 doesn't provide any useful information, so we take the number from route 1 forward.

If the user answered that they didn't have (or didn't know if they had) any close contacts with Covid-19, we take the lower of the two routes. If they answered that they did, we take the higher number.


### Updated data

The REACT-1 data covers 13/11/2020 to 30/11/2020, but since then there have been updated estimations from other studies, namely the [ONS Coronavirus Infection Survey][2]. Using the national prevalence from 12/12/2020 to 18/12/2020, we can scale up the personalised estimate to better represent an updated picture of the pandemic.

Again, this makes assumptions, namely that the risk factors for each group haven't changed relative to the national base rate. It may be more useful to determine the risk multipliers from this updated data, but we are using the numbers from the earlier REACT-1 study for this, as data for more variables are provided than in the ONS study, and we would like to maintain a level of consistency.

### Extrapolating for Scotland, Wales and Northern Ireland

Our route 1 calculations for Scotland, Wales and Northern Ireland are based on the data for England since our data source only covers England. Instead, we increase the rates treating the prevalence in these three regions (from ONS data) in a similar way as we treat prevalence in the nine English regions, although scaled down to account for being compared with prevalence at an earlier time.

The assumption here is that the risk multipliers for each group are the same across the UK.

## Presenting the data

We present the chance to the user in two ways:
- as a '1 in x' to give a sense in real terms
- as a percentage to allow for easier comparisons between people

We also give a comparison between the personalised figure and the national (Eng/Wal/Scot/NI) figure to provide more context.

[1]: https://spiral.imperial.ac.uk/bitstream/10044/1/84879/2/REACT1_r7_FINAL_14.12.20.pdf

[2]: https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/conditionsanddiseases/bulletins/coronaviruscovid19infectionsurveypilot/24december2020