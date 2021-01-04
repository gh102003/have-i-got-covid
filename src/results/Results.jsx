import React, { useMemo } from 'react'
import { calculateChance, filterData, updatedPrevalence } from './calculateChance.js';
import "../css/results.scss";
import { LinkGrid } from '../LinkGrid.jsx';

export const Results = ({ data, useEthnicity, useEmployment }) => {

  const chance = useMemo(() => calculateChance(filterData(data, useEthnicity, useEmployment)),
    [data, useEthnicity, useEmployment]
  );

  const nationPrevalence = useMemo(
    () => {
      switch (data.region) {
        case "Scotland":
          return { nation: data.region, prevalance: 0.0071 };
        case "Wales":
          return { nation: data.region, prevalance: 0.0172 };
        case "Northern Ireland":
          return { nation: data.region, prevalance: 0.0055 };

        default: // England
          return { nation: "England", prevalance: updatedPrevalence };
      }
    },
    [data.region]
  );

  const comparedWithNation = useMemo(
    () => {
      if (chance - 0.005 > nationPrevalence.prevalance) return "higher than";
      else if (chance + 0.005 < nationPrevalence.prevalance) return "lower than";
      else return "about the same as";
    },
    [chance, nationPrevalence],
  )

  return (
    <div className="results">
      <h2>Your Results Are In!</h2>
      <div className="results-result">
        <p>There is a</p>
        <p className="result-number">1 in {(1 / chance).toFixed(1 / chance < 10 ? 1 : 0)}</p>
        <p className="result-number result-number-small">({(chance * 100).toFixed(2)}%)</p>
        <p>chance you have Covid-19</p>
      </div>
      <p>This is {comparedWithNation} the average in {nationPrevalence.nation},
        which is <b>1 in {(1 / nationPrevalence.prevalance).toFixed(1 / nationPrevalence.prevalance < 10 ? 1 : 0)}</b> ({(nationPrevalence.prevalance * 100).toFixed(2)}%).
      </p>

      <div className="results-details">
        <h3>Is this completely correct?</h3>
        <p>
          No, this is only a rough estimate based on the available data. It has the potential to
          be wildly inaccurate due to fluctuations in the spread of the virus and misguided
          statistical assumptions.
        </p>
        <p>
          <em>Have I Got Corona?</em> should only be used for your own interest. You must self-isolate if
          you receive a positive test or are asked to by NHS Track and Trace. Go
          to <a href="https://gov.uk/coronavirus">the Government's website</a> for the latest advice.
        </p>

        <h3>How did we work this out?</h3>
        <p>
          We used data from the <a href="https://www.imperial.ac.uk/medicine/research-and-impact/groups/react-study/">REACT-1 study</a> at
          Imperial College London and the Office for National
          Statistics' <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/conditionsanddiseases/bulletins/coronaviruscovid19infectionsurveypilot/24december2020">Coronavirus Infection Survey</a> to
          calculate the chance you would test positive for Covid-19 based on the information you gave us.
        </p>
        <p>
          This is based on the fact that there is a higher prevalence of Covid-19 amongst certain
          groups of people&mdash;particularly teenagers, those with an Asian background, healthcare workers and
          people who live in larger households&mdash;and by being in one of these groups you are statistically
          more likely to have a positive result in a PCR test. To prevent counting the same risk factors twice,
          if you have a close contact with Covid-19, we use the higher risk from either your demographics or your
          close contact.
        </p>
        <p>
          If you live in Scotland, Wales, or Northern Ireland, we scale your result based on the prevelance in your
          nation compared with the prevelance in England. However, this may be less accurate as we only have information
          on risk factors for England.
        </p>
      </div>
      <LinkGrid />
    </div>
  )
}
