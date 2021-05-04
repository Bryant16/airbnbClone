import { Link } from 'react-router-dom';
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
          <Link to={`/properties/${property.id}`}>
            <h3 className='user-property-listing-title'>
              {property.listing_title}
            </h3>
          </Link>
        </div>
        <div className='user-property-listing-description-container'>
          <h5>
            {property.description}
          </h5>
        </div>
        <div className='user-property-listing-footer-container'>
          <div className='user-property-listing-location-container'>
            <Link to={`/locations/${property.city}`}>
              {property.city}
            </Link>
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
