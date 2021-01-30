import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

export default function PropertySummary ({ property }) {
  return (
    <div className='summary-container'>
      <div
        className='summary-image-container'
        style={{
          backgroundImage: `url(${property.coverphoto_url})`
        }}
      />
      <div className='summary-text-container'>
        <div className='user-property-listing-title-container'>
          <NavLink to={`/properties/${property.id}`}>
            <h3 className='user-property-listing-title'>
              {property.listing_title}
            </h3>
          </NavLink>
        </div>
        <div className='user-property-listing-description-container'>
          <h5>
            {property.description}
          </h5>
        </div>
        <div className='user-property-listing-footer-container'>
          <div className='user-property-listing-location-container'>
            <NavLink to={`/locations/${property.city}`}>
              {property.city}
            </NavLink>
          </div>
          <div
            className='user-property-listing-review-container'
          >
            <FaStar style={{ color: '#f8395c' }} />
            {property.total_reviews
              ? ` ${property.review_average} (${property.total_reviews})`
              : 'No reviews yet!'}
          </div>
        </div>
      </div>
    </div>
  );
}
