import React, { useState, useEffect } from 'react';
import './Home.scss'
import Section1 from '../../components/Home/Section1';
import CaroselAffiliations from '../../components/Home/CaroselAffiliations/CaroselAffiliations';
import Section3 from '../../components/Home/Section3';
import Carosel from '../../components/Home/Carosel/Carosel'
import Footer from '../../components/Footer/Footer';



function Home() {


  return (
    <div className='home_container'>
          <Section1 />
          <CaroselAffiliations />
          <Section3 />
          <Carosel />
          <Footer /> 
      
    </div>
  );
}

export default Home;
