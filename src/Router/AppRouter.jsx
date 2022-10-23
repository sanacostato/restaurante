import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Booking from '../pages/Booking';
import Menu from '../pages/Menu';
import Where from '../pages/Where';

function AppRouter() {
    return ( 
        <>
        <Routes>
            <Route path="home" element={<Home/>}> </Route>
            <Route path="menu" element={<Menu/>}> </Route>
            <Route path="where" element={<Where/>}> </Route>
            <Route path="booking" element={<Booking/>}> </Route>

            <Route path="/"element={<Navigate to="/home"/>}/> 


        </Routes>
        </>
     );
}

export default AppRouter;