import React, { useMemo } from 'react';
import { GenderInput } from './inputs/GenderInput.jsx';
import { AgeInput } from './inputs/AgeInput.jsx';
import { RegionInput } from './inputs/RegionInput.jsx';
import { EthnicityInput } from './inputs/EthnicityInput.jsx';
import { animated } from "react-spring";
import { HouseholdSizeInput } from './inputs/HouseholdSizeInput.jsx';
import { EmploymentInput } from './inputs/EmploymentInput.jsx';
import { CloseContactInput } from './inputs/CloseContactInput.jsx';
import { Results } from './results/Results.jsx';
import { Instructions } from './Instructions.jsx';

export const Page = ({ item, props, data, setData }) => {

  const recordEmployment = useMemo(
    () => !data.age || (data.age >= 18 && data.age < 65),
    [data]
  );

  const recordEthnicity = useMemo(
    () => !data.householdSize,
    [data]
  );

  if (item === 0) {
    return <animated.div style={props} className="data-entry-page">
      <Instructions />
    </animated.div>;
  } else if (item === 1) {
    return <animated.div style={props} className="data-entry-page">
      <AgeInput age={data.age} setAge={age => setData({ ...data, age })} />
      <GenderInput gender={data.gender} setGender={gender => setData({ ...data, gender })} />
      <RegionInput region={data.region} setRegion={region => setData({ ...data, region })} />
      <HouseholdSizeInput householdSize={data.householdSize} setHouseholdSize={householdSize => setData({ ...data, householdSize })} />
    </animated.div>
  } else if (item === 2) {
    return <animated.div style={props} className="data-entry-page">
      {recordEmployment && <EmploymentInput employment={data.employment} setEmployment={employment => setData({ ...data, employment })} />}
      {recordEthnicity && <EthnicityInput ethnicity={data.ethnicity} setEthnicity={ethnicity => setData({ ...data, ethnicity })} />}
      <CloseContactInput closeContact={data.closeContact} setCloseContact={closeContact => setData({ ...data, closeContact })} />
    </animated.div>
  } else if (item === 3) {
    return <animated.div style={props} className="data-entry-page">
      <Results data={data} useEmployment={recordEmployment} useEthnicity={recordEthnicity} />
    </animated.div>
  } else {
    return null;
  }
}
