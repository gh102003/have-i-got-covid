import React from 'react';
import { LinkGrid } from "./LinkGrid.jsx";

export const Instructions = () => (
  <div className="instructions">
    <h2>Welcome!</h2>
    <p>
      <em>Have I Got Corona?</em> uses data from the Office for National
      Statistics' <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/conditionsanddiseases/bulletins/coronaviruscovid19infectionsurveypilot/24december2020">Coronavirus Infection Survey</a> and
      the <a href="https://www.imperial.ac.uk/medicine/research-and-impact/groups/react-study/">REACT-1 study</a> at
      Imperial College London to calculate the chance that you have Covid-19.
    </p>
    <p>All questions are optional: please skip one if you don't feel comfortable answering it.</p>
    <p>
      All the information you enter will be kept on your device, although we use analytics to
      measure how many people are using this site.
      </p>
    <LinkGrid />
  </div>
);

