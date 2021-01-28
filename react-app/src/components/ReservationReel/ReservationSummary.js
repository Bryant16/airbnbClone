import React from 'react';

export default function ReservationSummary ({ reservation }) {
  return (
    <div className='summary-container'>
      <div className='reservation-summary-header-container'>
        <h2>Stay in {reservation.city}</h2>
      </div>
      <div className='summary-image-container'>
        <img src={reservation.property_photo_url} />
      </div>
    </div>
  );
}
