function Booking() {
    return ( 
         <div className="w3-container w3-content">
          <p>
            <strong>Reserve</strong> a table, ask for today's special or just send
            us a message:
          </p>
          <form action="/action_page.php" target="_blank">
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder="Name"
                required=""
                name="Name"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="number"
                placeholder="How many people"
                required=""
                name="People"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="datetime-local"
                placeholder="Date and time"
                required=""
                name="date"
                defaultValue="2020-11-16T20:00"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder="Message \ Special requirements"
                required=""
                name="Message"
              />
            </p>
            <p>
              <button className="w3-button w3-black" type="submit">
                SEND MESSAGE
              </button>
            </p>
          </form>
          </div>
     );
}

export default Booking;