import React from 'react'

export const EmploymentInput = ({ employment, setEmployment }) => {

  return (
    <div className="input input-employment">
      <h3>What kind of work do you do?</h3>

      <div className="radio-buttons">

        <input type="radio" name="employment" value="healthcare" id="employment-healthcare"
          checked={employment === "healthcare"} onChange={() => setEmployment("healthcare")}
        />
        <label htmlFor="employment-healthcare">Healthcare or care home</label>

        <input type="radio" name="employment" value="key worker" id="employment-key-worker"
          checked={employment === "key worker"} onChange={() => setEmployment("key worker")}
        />
        <label htmlFor="employment-key-worker">Other key worker</label>

        <input type="radio" name="employment" value="other" id="employment-other"
          checked={employment === "other"} onChange={() => setEmployment("other")}
        />
        <label htmlFor="employment-other">Other work</label>

        <input type="radio" name="employment" value="unemployed" id="employment-unemployed"
          checked={employment === "unemployed"} onChange={() => setEmployment("unemployed")}
        />
        <label htmlFor="employment-unemployed">Unemployed, student or retired</label>

      </div>
      <button disabled={!employment} onClick={() => setEmployment(null)}>Clear</button>
    </div>
  )
}
