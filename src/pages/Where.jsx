function Where() {
    return ( 
        <div className="w3-container" id="where" style={{ marginBottom: "200px" }}>
        <div className="w3-content" style={{ maxWidth: 700 }}>
          <h5 className="w3-center w3-padding-48 mt-5">
            <span className="w3-tag w3-wide">WHERE TO FIND US</span>
          </h5>
          <p>Find us at some address at some place.</p>
          <img
            src="/w3images/map.jpg"
            className="w3-image"
            style={{ width: "100%" }}
          />
          <p>
            <span className="w3-tag">FYI!</span> We offer full-service catering
            for any event, large or small. We understand your needs and we will
            cater the food to satisfy the biggerst criteria of them all, both look
            and taste.
          </p>
          
        </div>
      </div>
     );
}

export default Where
