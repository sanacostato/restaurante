import './App.css';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter';
import { NavLink } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <TopBar/>
      <AppRouter/> 
    <Footer/>
    </BrowserRouter>
  </>
  
  );
}

export default App;
