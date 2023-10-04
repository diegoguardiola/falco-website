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
  import StartUp from './views/Services/Industrial/StartUp/StartUp';
  import IndustrialUpgrades from './views/Services/Industrial/Upgrades/Upgrades';
  import FullAutomation from './views/Services/Industrial/FullAutomation/FullAutomation';
  import IndustrialCalibration from './views/Services/Industrial/Calibration/Calibration';
  import IndustrialDocumentation from './views/Services/Industrial/Documentation/Documentation';
import PartManufacturing from './views/Services/PartManufacturing/PartManufacturing';
import Packaging from './views/Services/Packaging/Packaging';
  import PackagingFood from './views/Services/Packaging/Food/Food';
  import PackagingPharma from './views/Services/Packaging/Pharmaceutical/Pharmaceutical';
  import Palletizing from './views/Services/Packaging/Palletization/Palletization';



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
            <Route path="/services/industrial" element={<Industrial />} />
              <Route path="/services/industrial/startup" element={<StartUp />} />
              <Route path="/services/industrial/upgrades" element={<IndustrialUpgrades />} />
              <Route path="/services/industrial/fullautomation" element={<FullAutomation />} />
              <Route path="/services/industrial/calibration" element={<IndustrialCalibration />} />
              <Route path="/services/industrial/documentation" element={<IndustrialDocumentation />} />
            <Route path="/services/partmanufacturing" element={<PartManufacturing />} />
            <Route path="/services/packaging" element={<Packaging />} />
              <Route path="/services/packaging/food" element={<PackagingFood />} />
              <Route path="/services/packaging/pharmaceutical" element={<PackagingPharma />} />
              <Route path="/services/packaging/palletization" element={<Palletizing />} />

          <Route path="/resources/casestudies" element={<CaseStudies />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/remotesupport" element={<RemoteSupport />} />
          <Route path="/fieldservice" element={<FieldServices />} />
          <Route path="/upgrades" element={<Upgrades />} />
        </Routes>
      </div>
    </Router>
  ); 
}

export default App;
