import React from 'react'

export const AgeInput = ({age, setAge}) => {

  return (
    <div className="input input-age">
      <h3>Enter your age</h3>

      <div className="radio-buttons">

        <input type="number" name="age" id="age-input" className="age-input" value={age} onChange={e => setAge(e.target.value)} />

        <button disabled={!age} onClick={() => setAge("")}>Clear</button>
      </div>
    </div>
  )
};
