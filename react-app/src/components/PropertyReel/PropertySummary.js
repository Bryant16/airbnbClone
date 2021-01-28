import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PropertySummary ({ property }) {
  return (
    <div className='summary-container'>
      <div className='user-property-listing-title-container'>
        <NavLink to={`/properties/${property.id}`}>
          <h3 className='user-property-listing-title'>
            {property.listing_title}
          </h3>
        </NavLink>
      </div>
      <div className='summary-image-container'>
        <img src={property.coverphoto_url} alt='' />
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
        <div className='user-property-listing-review-container'>
          {property.reviews.length
            ? `${Math.round(property.rating * 2 + Number.EPSILON) / 2} stars across ${property.reviews.length} reviews`
            : 'No reviews yet!'}
        </div>
      </div>
    </div>
  );
}
