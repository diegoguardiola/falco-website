import React from 'react'
import './Home.scss'
import CaroselAffiliations from '../components/CaroselAffiliations/CaroselAffiliations';
import CustomerReviews from '../components/CustomerReviews/CustomerReviews';
import Section3 from '../components/Home/Section3';
import Carosel from '../components/Carosel/Carosel'
import Footer from '../components/Footer/Footer';

 

function Home() {   
  return ( 
    <div> 
      <div className='section_1'>
        <div className='header_text'>  
          <h1>Automation Soultions</h1>
          <h2>for your business' unique needs</h2>
        </div>
      </div>
      <CaroselAffiliations />
      <Section3 />
      <Carosel /> 
      <CustomerReviews/>
      <Footer/>
    </div>

  )
}

export default Home 
