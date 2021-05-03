import { Link } from 'react-router-dom';

export default function ReservationSummary ({ reservation }) {
  const [startDate, endDate] = reservation.date_range
    .split(' - ')
    .map(d => (new Date(d)).toLocaleDateString({ dateStyle: 'short' }));

  const today = new Date();
  const before = today < new Date(startDate);

  return (
    <div className='summary-container'>
      <div className='summary-subcontainer'>
        <Link to={`/properties/${reservation.property_id}`}>
          <h2>Stay in {reservation.city}</h2>
          <h2>{`${startDate} - ${endDate}`}</h2>
        </Link>
        <div className='summary-button-group'>
          {before && (
            <Link to={`/reservations/${reservation.property_id}/edit`}>
              <button className='grouped-button first'>
                <h4>Edit Reservation</h4>
              </button>
            </Link>
          )}
          <Link to={`/properties/${reservation.property_id}/reviews/new`}>
            <button className='grouped-button last'>
              <h4>Leave a review!</h4>
            </button>
          </Link>
        </div>
      </div>
      <div className='summary-image-container'>
        <Link to={`/properties/${reservation.property_id}`}>
          <img src={reservation.property_photo_url} alt='' />
        </Link>
      </div>
    </div>
  );
}
