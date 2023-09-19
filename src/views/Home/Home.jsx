import React, { useState, useEffect } from 'react';
import './Home.scss'
import CaroselAffiliations from '../../components/CaroselAffiliations/CaroselAffiliations';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';
import Section3 from '../../components/Home/Section3';
import Footer from '../../components/Footer/Footer';

import { images } from '../../images';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';


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

      <Parallax pages={screenWidth < 768 ? 3.0 : 2.98} scrolling={true}  >
        <ParallaxLayer
          offset={0} 
          speed={1.0}
          factor={screenWidth < 768 ? 1.0 : 1.0}
        >
          <div className='section_1'>
            <div className='header_text'>
              <h1>Automation Soultions</h1>
              <h2>for your business' unique needs</h2>
            </div>
          </div>
          <CaroselAffiliations />
          <Section3 />
        </ParallaxLayer>
        <ParallaxLayer
          offset={screenWidth < 768 ? 1.0 : 1.28}
          speed={screenWidth < 768 ? 1.0 : 1.0}
          factor={screenWidth < 768 ? 1.0 : 1.55}
          style={{
            backgroundImage: `url(${images.img4})`,
            backgroundSize: 'cover',
            backgroundPositionX: '25%',
          }}
        >
        </ParallaxLayer>
        <ParallaxLayer
          offset={screenWidth < 768 ? 1.0 : 1.6}
          speed={2.2}
        >
        <div className='home_img_container'>
            <div className="text-overlay">
              <div className='text-overlay-description'>
                <h2>Engineering Design</h2>
                <p>
                  Our skilled engineering team brings innovative ideas to life, crafting meticulous designs that 
                  bridge imagination with feasibility. With a focus on precision and creativity, we turn concepts 
                  into detailed plans that lay the foundation for exceptional products and solutions.
                </p>
              </div>
              <div className='text-overlay-description'>
                <h2>Manufacturing</h2>
                <p>
                  Seamlessly transforming blueprints into reality, our state-of-the-art manufacturing facilities 
                  combine advanced technology and expert craftsmanship. From complex machinery to intricate components, 
                  we deliver top-tier manufacturing services that meet the highest quality standards.
                </p>
              </div>
              <div className='text-overlay-description'>
                <h2>Field Service</h2>
                <p>
                  Our dedicated field service experts are your trusted partners in deploying, optimizing, and 
                  maintaining your systems. With a commitment to efficiency and reliability, we ensure seamless 
                  integration and lasting performance in real-world environments.
                </p>
              </div>
              <div className='text-overlay-description'>
                <h2>Customer Support</h2>
                <p>
                  Our customer support is a pillar of our commitment to your success. With 24/7 assistance, technical 
                  expertise, and personalized solutions, we stand by you at every stage, ensuring your satisfaction and 
                  empowering you to achieve your goals with confidence.
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={screenWidth < 768 ? 2.0 : 2.0}
          speed={screenWidth < 768 ? 1.0 : 1.0}
        >
          <CustomerReviews />
          <Footer />
        </ParallaxLayer>
      </Parallax>
      
    </div>
  );
}

export default Home;
