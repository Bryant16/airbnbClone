import React from 'react';

export default function ReservationSummary ({ reservation }) {
  return (
    <div className='reservation-summary-container'>
      <img src={reservation.property_photo_url} />
      
    </div>
  );
}
