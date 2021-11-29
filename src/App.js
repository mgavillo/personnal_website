import logo from './logo.svg';
import Header from './Header';
import './App.css';
import Cv from './routes/Cv';
import Home from "./routes/Home";
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
        <Route path="/" element={<Home />} />
        <Route path="CV" element={<Cv />} />
        <Route path="Portofolio" element={""} />
        <Route path="Gallery" element={""} />
        <Route path="Contact" element={""} />
        
      </Routes>

      {/* <div id="character"></div> */}
    </div>
  );
};

export default App;
