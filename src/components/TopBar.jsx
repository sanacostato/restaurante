import { NavLink } from 'react-router-dom';
import React from 'react'

function TopBar() {
  return ( 
      <>
       <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    
    <NavLink className="navbar-brand" aria-current="page" to="/">
                  The Cafe
                </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="offcanvas offcanvas-end text-bg-dark"
      tabIndex={-1}
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
          The Cafe List
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <NavLink   className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/menu">
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/where">
              Where
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/booking">
              Booking
            </NavLink>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li> */}
        </ul>
        {/* <form className="d-flex mt-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form> */}
      </div>
    </div>
  </div>
</nav>

{/* 
        <div className="w3-top  ">
      <div className="w3-row w3-padding w3-black">
     
        <div className="w3-col s3">
          <NavLink className="w3-button w3-block w3-black" to='/home'> HOME </NavLink>
        </div>
       
        <div className="w3-col s3">
          <NavLink className="w3-button w3-block w3-black" to='/menu'> MENU </NavLink>
        </div>
        <div className="w3-col s3">
          <NavLink className="w3-button w3-block w3-black" to='/where'> WHERE </NavLink>
        </div>
        <div className="w3-col s3">
          <NavLink className="w3-button w3-block w3-black" to='/booking'> BOOKING </NavLink>
          
        </div>
      
      </div>
    </div> */}
    </>
  );
}

export default TopBar;