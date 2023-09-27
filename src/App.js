import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Home from './views/Home/Home';
import Services from './views/Services/Services';
import Industries from './views/Industries/Industries';
import Capabilities from './views/Capabilities/Capabilities';
import Support from './views/Support/Support';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import CaseStudies from './views/CaseStudies/CaseStudies';

import FoodandBev from './views/Industries/Food&Bev/FoodandBev';
import Aerospace from './views/Industries/Aerospace/Aerospace';
import Pharma from './views/Industries/Pharma/Pharma';
import Industrial from './views/Industries/Industrial/Industrial';
import PartManufacturing from './views/Industries/PartManufacturing/PartManufacturing';
import Packaging from './views/Industries/Packaging/Packaging';

import Manufacturing from './views/Capabilities/Manufacturing/Manufacturing';
import BuildingAutomation from './views/Capabilities/BuildingAutomation/BuildingAutomation';
import SCADA from './views/Capabilities/SCADA/SCADA';
import SystemIntegration from './views/Capabilities/SystemIntegration/SystemIntegration';
import Calibration from './views/Capabilities/Calibration/Calibration';
import MechDesign from './views/Capabilities/MechDesign/MechDesign';
import Palletizing from './views/Capabilities/Palletizing/Palletizing';

import RemoteSupport from './views/Support/RemoteSupport/RemoteSupport';
import FieldServices from './views/Support/FieldServices/FieldServices';
import Upgrades from './views/Support/Upgrades/Upgrades';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/falco-website" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources/casestudies" element={<CaseStudies />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/foodandbeverage" element={<FoodandBev />} />
          <Route path="/aerospace" element={<Aerospace />} />
          <Route path="/pharmamanufacturing" element={<Pharma />} />
          <Route path="/industrialautomation" element={<Industrial />} />
          <Route path="/partmanufacturing" element={<PartManufacturing />} />
          <Route path="/packaging" element={<Packaging />} />
          <Route path="/palletization" element={<Palletizing />} />

          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/buildingautomation" element={<BuildingAutomation />} />
          <Route path="/scada" element={<SCADA />} />
          <Route path="/systemintegration" element={<SystemIntegration />} />
          <Route path="/calibration" element={<Calibration />} />
          <Route path="/mechdesign" element={<MechDesign />} />

          <Route path="/remotesupport" element={<RemoteSupport />} />
          <Route path="/fieldservice" element={<FieldServices />} />
          <Route path="/upgrades" element={<Upgrades />} />
        </Routes>
      </div>
    </Router>
  ); 
}

export default App;
