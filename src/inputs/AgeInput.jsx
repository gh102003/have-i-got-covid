import React from 'react'

export const AgeInput = ({age, setAge}) => {

  return (
    <div className="input input-age">
      <h3>How old are you?</h3>

      <p>
        We can't give a result to under 5s.
      </p>

      <div className="radio-buttons">

        <input type="number" inputMode="numeric" min="5" max="130" name="age" id="age-input" className="age-input" value={age} onChange={e => setAge(e.target.value)} />

        <button disabled={!age} onClick={() => setAge("")}>Clear</button>
      </div>
    </div>
  )
};
