# Have I Got Corona?

*[Have I Got Corona?][3]* uses data from the Office for National Statistics' [Coronavirus Infection Survey][1] and round 7 of the [REACT-1 study][2] at Imperial College London to probability a person would test positive for Covid-19 in a PCR test.


## Statistical Calculation

Please go to [Calculating Chances](./calculating-chances.md) for an explanation of how we calculate the final score.


## Website Structure

This web app is built with React.js and Create React App, and hosted using Firebase hosting. Almost all of the calculation logic occurs in [calculateChance.js](./src/results/calculateChance.js).

[1]: https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/conditionsanddiseases/bulletins/coronaviruscovid19infectionsurveypilot/24december2020

[2]: https://www.imperial.ac.uk/medicine/research-and-impact/groups/react-study/

[3]: https://haveigotcorona.web.app