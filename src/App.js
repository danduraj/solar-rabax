import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';
import ContactPage from './components/ContactPage';

import AboutPage from './components/AboutPage';
import SolarWaterHeater from './components/SolarWaterHeater';
import SolarRoofTop from './components/SolarRoofTop';
import SolarOperationMaintenance from './components/SolarOperationMaintenance';
import SolarPowerFencing from './components/SolarPowerFencing';


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path='/solar-water-heater' element={<SolarWaterHeater/>} />
        <Route path='/solar-roof-top' element={<SolarRoofTop/>} />
        <Route path='/solar-maintenance' element={<SolarOperationMaintenance/>} />
        <Route path='/solar-power-fencing' element={<SolarPowerFencing/>} />
        <Route path='/solar-residential-mounting' element={<SolarRoofTop/>} />
        <Route path='/solar-commercial-mounting' element={<SolarRoofTop/>} />
        

      </Routes>
    </Router>
    
  );
};

export default App;
