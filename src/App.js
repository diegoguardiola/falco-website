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

import Aerospace from './views/Services/Aerospace/Aerospace';
import FoodandBev from './views/Services/FoodandBeverage/FoodandBev';
  import PackagingFB from './views/Services/FoodandBeverage/Packaging/Packaging';
  import ProcessingFB from './views/Services/FoodandBeverage/Processing/Processing';
import Pharma from './views/Services/Pharma/Pharma';
  import CalibrationPharma from './views/Services/Pharma/Calibration/Calibration';
  import Bioreactors from './views/Services/Pharma/Bioreactors/Bioreactors';
  import PharmaValidation from './views/Services/Pharma/Validation/Validation';
import Industrial from './views/Services/Industrial/Industrial';
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
            <Route path="/services/aerospace" element={<Aerospace />} />
            <Route path="services/foodandbeverage" element={<FoodandBev />} />
             <Route path="services/foodandbeverage/packaging" element={<PackagingFB />} />
             <Route path="services/foodandbeverage/processing" element={<ProcessingFB />} />
            <Route path="/services/pharmaceutical" element={<Pharma />} />
              <Route path="/services/pharmaceutical/calibration" element={<CalibrationPharma />} />
              <Route path="/services/pharmaceutical/bioreactors" element={<Bioreactors />} />
              <Route path="/services/pharmaceutical/validation" element={<PharmaValidation />} />
              <Route path="/industrialautomation" element={<Industrial />} />

          <Route path="/resources/casestudies" element={<CaseStudies />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />

          
          <Route path="/pharmamanufacturing" element={<Pharma />} />
          
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
