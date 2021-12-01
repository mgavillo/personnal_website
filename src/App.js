import logo from './logo.svg';
import Header from './Header';
import './App.css';
import Cv from './routes/Cv';
import Home from "./routes/Home";
import Portofolio from "./routes/Portofolio";
import React, {useEffect, useState} from 'react';
// import lottie from "lottie-web";
// import character from "./Design/syntwave_ground.json";
import {
  Routes,
  Route
} from "react-router-dom";


function App(){

  return (
    <div className="App" >
      <Header />
      <Routes>
        <Route id="Home" path="/" element={<Home />} />
        <Route path="CV" element={<Cv />} />
        <Route path="Portofolio" element={<Portofolio />} />
        <Route path="Gallery" element={""} />
        <Route path="Contact" element={""} />
        
      </Routes>

      {/* <div id="character"></div> */}
    </div>
  );
};

export default App;
