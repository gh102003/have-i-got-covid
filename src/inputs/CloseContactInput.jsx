import React from 'react'

export const CloseContactInput = ({ closeContact, setCloseContact }) => {

  return (
    <div className="input input-close-contact">
      <h3>Have you been in close contact with anyone with Covid-19 in the last two weeks?</h3>

      <p>This is anyone you have been within 2 metres of for more than 15 minutes, or anyone you have touched</p>

      <div className="radio-buttons">

        <input type="radio" name="close-contact" value="confirmed" id="close-contact-confirmed"
          checked={closeContact === "confirmed"} onChange={() => setCloseContact("confirmed")}
        />
        <label htmlFor="close-contact-confirmed">Yes, someone who has tested positive</label>

        <input type="radio" name="close-contact" value="suspected" id="close-contact-suspected"
          checked={closeContact === "suspected"} onChange={() => setCloseContact("suspected")}
        />
        <label htmlFor="close-contact-suspected">Yes, someone who has had symptoms but has not been tested</label>

        <input type="radio" name="close-contact" value="no" id="close-contact-no"
          checked={closeContact === "no"} onChange={() => setCloseContact("no")}
        />
        <label htmlFor="close-contact-no">No or unsure</label>

      </div>
      <button disabled={!closeContact} onClick={() => setCloseContact(null)}>Clear</button>
    </div>
  )
}
