import { NavLink } from 'react-router-dom';

function TopBar() {
    return ( 
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
    </div>
     );
}

export default TopBar;