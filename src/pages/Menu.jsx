
function Menu() {
  return (<div className="w3-container" id="menu" style={{ marginTop: "2rem" }}>
    <div className="w3-content" style={{ maxWidth: 700 }}>
      <h5 className="w3-center w3-padding-48">
        <span className="w3-tag w3-wide">THE MENU</span>
      </h5>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className="nav-link " href="#">
                
              </a>
            </li>
            
          </ul>
        </div>
        <div className="card-body">


          <h5>Bread Basket</h5>
          <p className="w3-text-grey">
            Assortment of fresh baked fruit breads and muffins 5.50
          </p>
          <br />
          <h5>Honey Almond Granola with Fruits</h5>
          <p className="w3-text-grey">
            Natural cereal of honey toasted oats, raisins, almonds and dates
            7.00
          </p>
          <br />
          <h5>Belgian Waffle</h5>
          <p className="w3-text-grey">
            Vanilla flavored batter with malted flour 7.50
          </p>
          <br />
          <h5>Scrambled eggs</h5>
          <p className="w3-text-grey">
            Scrambled eggs, roasted red pepper and garlic, with green onions
            7.50
          </p>
          <br />
          <h5>Blueberry Pancakes</h5>
          <p className="w3-text-grey">
            With syrup, butter and lots of berries 8.50
          </p>
        </div>



      </div>
    </div>
    
    <img
      src="/w3images/coffeehouse2.jpg"
      style={{ width: "100%", maxWidth: 1000, marginTop: 32 }}
    /> 
  </div>

  );
}

export default Menu;