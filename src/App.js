import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Home from './views/Home/Home';
import Services from './views/Services/Services';
import Contact from './views/Contact/Contact';
import CaseStudies from './views/CaseStudies/CaseStudies';
import FoodandBev from './views/Food&Bev/FoodandBev';
import Aerospace from './views/Aerospace/Aerospace';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/falco-website" element={<Home />} />
          <Route path="/services/:sectionId" element={<Services />} />
          <Route path="/resources/casestudies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/foodandbeverage" element={<FoodandBev />} />
          <Route path="/aerospace" element={<Aerospace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
