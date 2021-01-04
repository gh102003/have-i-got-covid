import React, { useMemo } from 'react'
import { calculateChance, filterData, updatedPrevalence } from './calculateChance.js';
import "../css/results.scss";
import { LinkGrid } from '../LinkGrid.jsx';

export const Results = ({ data, useEthnicity, useEmployment }) => {

  const chance = useMemo(() => calculateChance(filterData(data, useEthnicity, useEmployment)),
    [data, useEthnicity, useEmployment]
  );

  const comparedWithPopulation = useMemo(
    () => {
      if (chance - 0.004 > updatedPrevalence) return "higher than";
      else if (chance + 0.004 < updatedPrevalence) return "lower than";
      else return "about the same as";
    },
    [chance],
  )

  return (
    <div className="results">
      <h2>Your Results Are In!</h2>
      <div className="results-result">
        <p>There is a</p>
        <p className="result-number">1 in {(1 / chance).toFixed(0)}</p>
        <p className="result-number result-number-small">({(chance * 100).toFixed(2)}%)</p>
        <p>chance you have Covid-19</p>
      </div>
      <p>This is {comparedWithPopulation} the average in England,
        which is <b>1 in {(1 / updatedPrevalence).toFixed(0)}</b> ({(updatedPrevalence * 100).toFixed(2)}%).
      </p>

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
        Imperial College London to calculate the chance you would test positive for Covid-19
        based on the information you gave us.
      </p>
      <p>
        This is based on the fact that there is a higher prevalence of Covid-19 amongst certain
        groups of people&mdash;particularly teenagers, those with an Asian background, healthcare workers and
        people who live in larger households&mdash;and by being in one of these groups you are statistically
        more likely to have a positive result in a PCR test. To prevent counting the same risk factors twice,
        if you have a close contact with Covid-19, we use the higher risk from either your demographics or your
        close contact.
      </p>
      <LinkGrid/>
    </div>
  )
}
