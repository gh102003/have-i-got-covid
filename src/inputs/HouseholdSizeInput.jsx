import React from 'react'

export const HouseholdSizeInput = ({ householdSize, setHouseholdSize }) => {

  return (
    <div className="input input-household-size">
      <h3>How many people live in your household?</h3>
      <p>Include yourself and children who stay for part of the week.</p>

      <div className="radio-buttons">

        <input type="number" min="1" inputMode="numeric" name="household-size" id="household-size-input" className="household-size-input" value={householdSize} onChange={e => setHouseholdSize(e.target.value)} />

        <button disabled={!householdSize} onClick={() => setHouseholdSize("")}>Clear</button>
      </div>
    </div>
  )
};
