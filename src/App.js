import Header from './Header';
import './App.scss';
import Cv from './routes/Cv';
import Home from "./routes/Home";
import Portofolio from "./routes/Portofolio";
import Gallery from "./routes/Gallery";
import Contact from "./routes/Contact";
import React, {useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";


function App(){
  const [night, setNight] = useState(1);
  const [shift, setShift] = useState(0);

  return (
    <div className="App" >
      <Header night={night} shift={shift} setNight={setNight} setShift={setShift}/>
      <Routes>
        <Route id="Home" path="/" element={<Home />} />
        <Route path="CV" element={<Cv />} />
        <Route path="Portofolio" element={<Portofolio night={night} shift={shift}/>} />
        <Route path="Gallery" element={<Gallery night={night} shift={shift}/>} />
        <Route path="Contact" element={<Contact night={night} shift={shift}/>} />
      </Routes>
    </div>
  );
};

export default App;
