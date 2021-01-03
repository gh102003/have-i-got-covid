const basePrevalence = 0.0094; // prevalence in whole population in round 7 of REACT-1

export const updatedPrevalence = 0.0118; // newer estimate from ONS for 12/12/2020 to 18/12/2020
// https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/conditionsanddiseases/bulletins/coronaviruscovid19infectionsurveypilot/24december2020

const scalingFactor = updatedPrevalence / basePrevalence; // factor that population prevalence has multiplied by

const getPrevalenceGivenVariable = (variable, value) => {
  switch (variable) {
    case "gender":
      if (value === "male") {
        return 0.0096;
      } else if (value === "female") {
        return 0.0092;
      } else {
        throw new Error("invalid value " + value);
      }

    case "age":
      if (value < 5) {
        throw new Error("age too low: " + value);
      } else if (value < 13) {
        return 0.0144
      } else if (value < 18) {
        return 0.0204;
      } else if (value < 25) {
        return 0.0141;
      } else if (value < 35) {
        return 0.0100;
      } else if (value < 45) {
        return 0.0089;
      } else if (value < 55) {
        return 0.0086;
      } else if (value < 65) {
        return 0.0064;
      } else {
        return 0.0050;
      }

    case "region":
      switch (value) {
        case "South East":
          return 0.0073;
        case "North East":
          return 0.0094;
        case "North West":
          return 0.0102;
        case "Yorkshire":
          return 0.0125;
        case "East Midlands":
          return 0.0119;
        case "West Midlands":
          return 0.0124;
        case "East of England":
          return 0.0058;
        case "London":
          return 0.0109;
        case "South West":
          return 0.0058;
        default:
          throw new Error("invalid value " + value);
      }

    case "householdSize":
      switch (value) {
        case "0":
          throw new Error("invalid value " + value);
        case "1":
          return 0.0056;
        case "2":
          return 0.0069;
        case "3":
          return 0.0096;
        case "4":
          return 0.0102;
        case "5":
          return 0.0159;
        case "6":
          return 0.0240;
        default:
          return 0.0267;
      }

    case "employment":
      switch (value) {
        case "healthcare":
          return 0.0154;
        case "key worker":
          return 0.0104;
        case "other":
          return 0.0082;
        case "unemployed":
          return 0.0085;
        default:
          throw new Error("invalid value " + value);
      }

    case "ethnicity":
      switch (value) {
        case "white":
          return 0.0084;
        case "asian":
          return 0.0207;
        case "black":
          return 0.0107;
        case "mixed":
          return 0.0084;
        case "other":
          return 0.0197;
        default:
          throw new Error("invalid value " + value);
      }

    case "closeContact":
      switch (value) {
        case "confirmed":
          return 0.0777;
        case "suspected":
          return 0.0196;
        case "no":
          return 0.0065;
        default:
          throw new Error("invalid value " + value);
      }

    default:
      throw new Error("invalid variable " + variable);
  }
};

/**
 * 
 * @param {[]} variables must be filtered to remove nulls
 */
export const calculateChance = variables => {
  const prevalences = variables.map(([variable, value]) => getPrevalenceGivenVariable(variable, value));
  console.log(prevalences);

  const multipliedPrevalences = prevalences.reduce((prev, curr) => prev * curr, 1);

  const chanceRound7 =  multipliedPrevalences / (basePrevalence ** (prevalences.length - 1));

  return chanceRound7 * scalingFactor;
};

export const filterData = (data, useEthnicity, useEmployment) => {
  return Object.entries(data).filter(([variable, value]) => {
    if (value === null || value === "") {
      return false;
    }
    if (variable === "ethnicity" && !useEthnicity) {
      return false;
    }
    if (variable === "employment" && !useEmployment) {
      return false;
    }
    return true;
  });
};