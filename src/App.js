import './App.css';
import { Route, Routes, useLocation } from "react-router-dom"
import Nav from './Components/common/Nav'
import Header from './Components/Home/Header';
import Main from './Components/Home/Main';
import Footer from './Components/Home/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Reservations from './Components/Reservations/Reservations';
import Order from './Components/Order/Order';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/reservations' element={<Reservations/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </>
  );
}

export default App;
