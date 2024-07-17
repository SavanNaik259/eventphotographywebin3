import React from "react";
import Home from "./Home";
import Show from "./Show";
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer'
import Professional from './Professional';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
 import Navbar from "./Navbar";
const App =() => {
  return (
    <>
      <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/contact" element={<Contact/>}/>
      </Routes>
     <Show/>
    <Service/>
    <Professional/>
     <About/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
