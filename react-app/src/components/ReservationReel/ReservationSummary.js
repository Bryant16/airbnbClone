import { Link } from 'react-router-dom';

export default function ReservationSummary ({ reservation }) {
  const [startDate, endDate] = reservation.date_range
    .split(' - ')
    .map(d => (new Date(d)).toLocaleDateString({ dateStyle: 'short' }));

  return (
    <div className='summary-container'>
      <div className='reservation-summary-header-container'>
        <h2>Stay in {reservation.city}</h2>
        <h2>{`${startDate} - ${endDate}`}</h2>
      </div>
      <div className='summary-image-container'>
        <Link to={`/properties/${reservation.property_id}`}>
          <img src={reservation.property_photo_url} alt='' />
        </Link>
      </div>
      <div className='summary-footer'>
        <Link to={`/properties/${reservation.property_id}/reviews/new`}>
          <h4>Leave a review!</h4>
        </Link>
      </div>
    </div>
  );
}
