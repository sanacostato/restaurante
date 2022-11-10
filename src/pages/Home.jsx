function Home() {
    return ( 
         <header className="bgimg w3-display-container w3-grayscale-min" id="home">
           
      <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
        <span className="w3-tag">Open from 6am to 5pm</span>
      </div>
      <div className="w3-display-middle w3-center">
        <span className="w3-text-black" style={{ fontSize: 90 }}>
          the
          <br />
          
        </span>
      </div>
      <div className="w3-display-bottomright w3-center w3-padding-large">
        <span className="w3-text-white">15 Adr street, 5015</span>
      </div>
    
   
    {/* Add a background color and large text to the whole page */}
    (<div className="w3-sand w3-grayscale w3-large">
      {/* About Container */}
      <div className="w3-container" id="about">
        <div className="w3-content" style={{ maxWidth: 700 }}>
          <h5 className="w3-center w3-padding-64">
            <span className="w3-tag w3-wide">ABOUT THE CAFE</span>
          </h5>
          <p>
            The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            In addition to our full espresso and brew bar menu, we serve fresh
            made-to-order breakfast and lunch sandwiches, as well as a selection
            of sides and salads and other good stuff.
          </p>
          <div className="w3-panel w3-leftbar w3-light-grey">
            <p>
              <i>
                "Use products from nature for what it's worth - but never too
                early, nor too late." Fresh is the new sweet.
              </i>
            </p>
            <p>Chef, Coffeeist and Owner: Liam Brown</p>
          </div>
          <div className="w3-row-padding">
            <div className="w3-half">
          <img
            src="https://www.w3schools.com/w3images/tablesetting2.jpg"
            style={{ width: "100%", maxWidth: 300 }}
            className="w3-margin-top"
          />
          </div>
          <div className="w3-half text-center pt-5" >
          <p>
            <strong>Opening hours:</strong> everyday from 6am to 5pm.
          </p>
          <p>
            <strong>Address:</strong> 15 Adr street, 5015, NY
          </p>
          </div>
          </div>
        </div>
      </div>
      </div>
      </header>
     );

    }

    export default Home;