import './App.css';
import { Route, Routes, useLocation } from "react-router-dom"
import Nav from './Components/common/Nav'
import Header from './Components/Home/Header';
import Main from './Components/Home/Main';
import Footer from './Components/Home/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Reservation from './Components/Reservation/Reservation';

function App() {
  return (
    <>
        <Nav/>
        <Home/>
        <About/>
        <Menu/>
        <Reservation/>
    </>
  );
}

export default App;
