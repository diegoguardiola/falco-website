import React from 'react';
import './CustomerReviews.scss';
import {images} from '../../images'

const CustomerReviews = () => {
    const reviews = [
      { image: images.customer1, quote: "Falco's' solutions have been a game changer for our company.", rating: 5 },
      { image: images.customer2, quote: 'Whenever we have an issue we can always rely on Falco for help no matter the situation.', rating: 5 },
      { image: images.customer3, quote: 'Thanks to Falco, production output has increased by 20%!', rating: 5 },
      { image: images.customer4, quote: 'We had to replace a custom part critical to manufacturing and Falco was able to provide us with the part in only a week.', rating: 5 }
        // More reviews...
      ];

    

  return (
    <div className="review-slider">
    <div className="review-card-container">
      {reviews.map((review, index) => (
        <div className="review-card" key={index}>
          <div className="image-container">
            <img src={review.image} alt="Customer" />
          </div>
          <div className="quote">{review.quote}</div>
          <div className="stars">
            {Array.from({ length: review.rating }, (_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      ))}
      {/* Duplicate reviews to achieve an infinite loop */}
      {reviews.map((review, index) => (
        <div className="review-card" key={index + reviews.length}>
          <div className="image-container">
            <img src={review.image} alt="Customer" />
          </div>
          <div className="quote">{review.quote}</div>
          <div className="stars">
            {Array.from({ length: review.rating }, (_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default CustomerReviews;
