import React, { useEffect } from 'react';
import './Services.scss'
import Overview from '../../components/Services/Overview/OverviewIndustries'
import Footer from '../../components/Footer/Footer';


function Services() {

  return (
    <div className='wrapper'>
      <Overview />
      <Footer/>
    </div>
  )
}

export default Services
