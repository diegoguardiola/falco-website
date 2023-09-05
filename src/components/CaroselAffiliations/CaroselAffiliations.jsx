import React from 'react';
import './CaroselAffiliations.scss';
import {images} from '../../images'

const CaroselAffiliations = () => {
    const affiliations = [
      { image: images.universalRobots },
      { image: images.ignition },
      { image: images.murr },
      { image: images.buchanan },
      { image: images.siemens },
      { image: images.AB },
      { image: images.mitsubishi },
      ];

    
  return (
    <div className="affiliation-slider">
      <h2>Our Partnerships and Affiliations!</h2>
      <div className="affiliation-card-container">
        {affiliations.map((review, index) => (
          <div className="affiliation-card" key={index}>
              <img src={review.image} alt="Affilited Partner or Customer" />
          </div>
        ))}
        {/* Duplicate affiliations to achieve an infinite loop */}
        {affiliations.map((review, index) => (
          <div className="affiliation-card" key={index + affiliations.length}>
            <img src={review.image} alt="Customer" />
          </div>
        ))}
      </div>
    </div>
);
};

export default CaroselAffiliations;
