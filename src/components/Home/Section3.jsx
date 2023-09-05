import React, { useEffect } from 'react'; // Import useEffect
import { images } from '../../images';
import './Section3.scss';

function Section3() {
  useEffect(() => { // Use the useEffect hook to observe elements when they're ready
    const cards = document.querySelectorAll(".home_section_3_card");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    }, {
      threshold: .6
    });

    cards.forEach(card => {
      observer.observe(card);
    });

    // Optional: unobserve the elements when the component is unmounted
    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []); // An empty dependency array means this effect will run once, like componentDidMount in class components

  return (
    <div className='home_section_3'>
        <div className='home_section_3_card'>
            <div className='home_section_3_card_desc'>
                <h1>Experience. Expertise. Versatility.</h1>
                <p>
                Our specialized departments with unmatched engineering capabilities 
                set us apart from other automation companies. We design Innovative 
                products that align with our client's unique needs. Ensuring unparalleled
                quality and customer satisfaction.
                </p>
            </div>
        </div>
        <div className='home_section_3_card'>
            <img src={images.section3image} alt="section" />
        </div>
    </div>
  );
}

export default Section3;
