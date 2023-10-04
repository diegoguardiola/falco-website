import React, { useState, useEffect } from 'react';
import './Home.scss'
import CaroselAffiliations from '../../components/CaroselAffiliations/CaroselAffiliations';
import Section3 from '../../components/Home/Section3';
import Carosel from '../../components/Carosel/Carosel'
import Footer from '../../components/Footer/Footer';



function Home() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='home_container'>
          <div className='section_1'>
            <div className='header_text'>
              <h1>Automation Soultions</h1>
              <h2>for your business' unique needs</h2>
              <div className='youtube_video_container'>
              <iframe 
                width="750" 
                height="400" 
                src="https://www.youtube.com/embed/Pg60fB-flus" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
              </div>
            </div>
          </div>
          <CaroselAffiliations />
          <Section3 />
          <Carosel />
          <Footer /> 
      
    </div>
  );
}

export default Home;
