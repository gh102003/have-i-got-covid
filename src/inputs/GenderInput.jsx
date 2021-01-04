import React from 'react'

export const GenderInput = ({ gender, setGender }) => {

  return (
    <div className="input input-gender">
      <h3>What's your sex?</h3>
      <p>Please select the answer you'd give in a medical survey, or skip this question.</p>

      <div className="radio-buttons">

        <input type="radio" name="gender" value="female" id="gender-female"
          checked={gender === "female"} onChange={() => setGender("female")}
        />
        <label htmlFor="gender-female">Female</label>

        <input type="radio" name="gender" value="male" id="gender-male"
          checked={gender === "male"} onChange={() => setGender("male")}
        />
        <label htmlFor="gender-male">Male</label>

        <button disabled={!gender} onClick={() => setGender(null)}>Clear</button>
      </div>
    </div>
  )
};
