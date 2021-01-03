import React, { useCallback } from 'react';
import { GenderInput } from './inputs/GenderInput.jsx';
import { AgeInput } from './inputs/AgeInput.jsx';
import { RegionInput } from './inputs/RegionInput.jsx';
import { EthnicityInput } from './inputs/EthnicityInput.jsx';
import { animated } from "react-spring";
import { HouseholdSizeInput } from './inputs/HouseholdSizeInput.jsx';
import { EmploymentInput } from './inputs/EmploymentInput.jsx';
import { CloseContactInput } from './inputs/CloseContactInput.jsx';
import { Results } from './results/Results.jsx';

export const Page = ({ item, props, data, setData }) => {

  const recordEmployment = useCallback(
    () => !data.age || (data.age >= 18 && data.age < 65),
    [data]
  );

  const recordEthnicity = useCallback(
    () => !data.householdSize,
    [data]
  );

  if (item === 0) {
    return <animated.div style={props} className="data-entry-page">
      <h2>Welcome!</h2>
      <p><em>Have I Got Corona?</em> uses data from the Office for National
      Statistics' <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/conditionsanddiseases/bulletins/coronaviruscovid19infectionsurveypilot/24december2020">Coronavirus Infection Survey</a> and
      the <a href="https://www.imperial.ac.uk/medicine/research-and-impact/groups/react-study/">REACT-1 study</a> at Imperial College London.</p>
      <p>All fields are optional: please skip a question if you don't feel comfortable answering it.</p>
      <p>
        All the information you enter will be kept on your device, although we use analytics to
        measure how many people are using this site.
      </p>
      <p>
        Contact me by email at <a href="mailto:gh102003g+haveigotcorona@gmail.com">gh102003g+haveigotcorona@gmail.com</a>
      </p>
    </animated.div>;
  } else if (item === 1) {
    return <animated.div style={props} className="data-entry-page">
      <GenderInput gender={data.gender} setGender={gender => setData({ ...data, gender })} />
      <AgeInput age={data.age} setAge={age => setData({ ...data, age })} />
      <RegionInput region={data.region} setRegion={region => setData({ ...data, region })} />
      <HouseholdSizeInput householdSize={data.householdSize} setHouseholdSize={householdSize => setData({ ...data, householdSize })} />
    </animated.div>
  } else if (item === 2) {
    return <animated.div style={props} className="data-entry-page">
      {recordEmployment() && <EmploymentInput employment={data.employment} setEmployment={employment => setData({ ...data, employment })} />}
      {recordEthnicity() && <EthnicityInput ethnicity={data.ethnicity} setEthnicity={ethnicity => setData({ ...data, ethnicity })} />}
      <CloseContactInput closeContact={data.closeContact} setCloseContact={closeContact => setData({ ...data, closeContact })} />
    </animated.div>
  } else if (item === 3) {
    return <animated.div style={props} className="data-entry-page">
      <Results data={data} useEmployment={recordEmployment()} useEthnicity={recordEthnicity()} />
    </animated.div>
  } else {
    return null;
  }
}
