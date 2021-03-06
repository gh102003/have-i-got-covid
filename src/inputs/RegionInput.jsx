import React from 'react'

export const RegionInput = ({ region, setRegion }) => {

  return (
    <div className="input input-region">
      <h3>Where do you live?</h3>

      <p>
        The majority of our data is for England, so unfortunately estimations for other nations will be less accurate.
      </p>

      <div className="radio-buttons">

        <h4>England</h4>

        <input type="radio" name="region" value="South East" id="region-south-east"
          checked={region === "South East"} onChange={() => setRegion("South East")}
        />
        <label htmlFor="region-south-east">South East</label>

        <input type="radio" name="region" value="North East" id="region-north-east"
          checked={region === "North East"} onChange={() => setRegion("North East")}
        />
        <label htmlFor="region-north-east">North East</label>

        <input type="radio" name="region" value="North West" id="region-north-west"
          checked={region === "North West"} onChange={() => setRegion("North West")}
        />
        <label htmlFor="region-north-west">North West</label>

        <input type="radio" name="region" value="Yorkshire and The Humber" id="region-yorkshire"
          checked={region === "Yorkshire and The Humber"} onChange={() => setRegion("Yorkshire and The Humber")}
        />
        <label htmlFor="region-yorkshire">Yorkshire and The Humber</label>

        <input type="radio" name="region" value="East Midlands" id="region-east-midlands"
          checked={region === "East Midlands"} onChange={() => setRegion("East Midlands")}
        />
        <label htmlFor="region-east-midlands">East Midlands</label>

        <input type="radio" name="region" value="West Midlands" id="region-west-midlands"
          checked={region === "West Midlands"} onChange={() => setRegion("West Midlands")}
        />
        <label htmlFor="region-west-midlands">West Midlands</label>

        <input type="radio" name="region" value="East of England" id="region-east"
          checked={region === "East of England"} onChange={() => setRegion("East of England")}
        />
        <label htmlFor="region-east">East of England</label>

        <input type="radio" name="region" value="London" id="region-london"
          checked={region === "London"} onChange={() => setRegion("London")}
        />
        <label htmlFor="region-london">London</label>

        <input type="radio" name="region" value="East of England" id="region-south-west"
          checked={region === "South West"} onChange={() => setRegion("South West")}
        />
        <label htmlFor="region-south-west">South West</label>

        <h4>Other nations</h4>
        <input type="radio" name="region" value="Scotland" id="region-scotland"
          checked={region === "Scotland"} onChange={() => setRegion("Scotland")}
        />
        <label htmlFor="region-scotland">Scotland</label>

        <input type="radio" name="region" value="Northern Ireland" id="region-northern-ireland"
          checked={region === "Northern Ireland"} onChange={() => setRegion("Northern Ireland")}
        />
        <label htmlFor="region-northern-ireland">Northern Ireland</label>

        <input type="radio" name="region" value="Wales" id="region-wales"
          checked={region === "Wales"} onChange={() => setRegion("Wales")}
        />
        <label htmlFor="region-wales">Wales</label>


      </div>
      <button disabled={!region} onClick={() => setRegion(null)}>Clear</button>
    </div>
  )
};
