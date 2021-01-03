import React from 'react'

export const EthnicityInput = ({ ethnicity, setEthnicity }) => {

  return (
    <div className="input input-ethnicity">
      <h3>What is your ethnicity?</h3>

      <div className="radio-buttons">

        <input type="radio" name="ethnicity" value="white" id="ethnicity-white"
          checked={ethnicity === "white"} onChange={() => setEthnicity("white")}
        />
        <label htmlFor="ethnicity-white">White</label>

        <input type="radio" name="ethnicity" value="asian" id="ethnicity-asian"
          checked={ethnicity === "asian"} onChange={() => setEthnicity("asian")}
        />
        <label htmlFor="ethnicity-asian">Asian</label>

        <input type="radio" name="ethnicity" value="black" id="ethnicity-black"
          checked={ethnicity === "black"} onChange={() => setEthnicity("black")}
        />
        <label htmlFor="ethnicity-black">Black</label>

        <input type="radio" name="ethnicity" value="mixed" id="ethnicity-mixed"
          checked={ethnicity === "mixed"} onChange={() => setEthnicity("mixed")}
        />
        <label htmlFor="ethnicity-mixed">Mixed</label>

        <input type="radio" name="ethnicity" value="other" id="ethnicity-other"
          checked={ethnicity === "other"} onChange={() => setEthnicity("other")}
        />
        <label htmlFor="ethnicity-other">Other</label>


      </div>
      <button disabled={!ethnicity} onClick={() => setEthnicity(null)}>Clear</button>
    </div>
  )
}
