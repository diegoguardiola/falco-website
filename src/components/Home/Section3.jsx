import React from 'react';
import { images } from '../../images';
import './Section3.scss';

function Section3() {

    const cards = document.querySelectorAll(".home_section_3_card")

    const observer = new IntersectionObserver(entries => {
        entries.forEach( entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    }, {
        threshold: .5
    })

    cards.forEach(card => {
        observer.observe(card)  
    })
    

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
            <img  src={images.section3image} alt="section" />
        </div>
    </div>
  );
}

export default Section3;
