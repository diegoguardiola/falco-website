import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Services.scss'
import Footer from '../../components/Footer/Footer';
import Overview from '../../components/Services/Overview/OverviewIndustries';
//import Industrial from '../components/Services/Industrial/Industrial';

function Services() {
  const { sectionId } = useParams();

  useEffect(() => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }, [sectionId]);

  return (
    <div className='wrapper'>
      <section id="welcome">
        <Overview />
      </section>
      <Footer/>
    </div>
  )
}

export default Services
