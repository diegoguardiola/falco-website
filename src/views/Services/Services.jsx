import React, { useEffect } from 'react';
import './Services.scss'
import Overview from '../../components/Services/Overview/OverviewIndustries'
import Footer from '../../components/Footer/Footer';
//import Industrial from '../components/Services/Industrial/Industrial';

function Services() {

  return (
    <div className='wrapper'>
      <Overview />
      <Footer/>
    </div>
  )
}

export default Services
