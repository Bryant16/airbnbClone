import React from 'react';

export default function ReservationSummary ({ reservation }) {
  let startDate = new Date(reservation.date_range.slice(0, 10));
  let endDate = new Date(reservation.date_range.slice(12, 23));

  startDate = startDate.toLocaleDateString({ dateFormat: 'short' });
  endDate = endDate.toLocaleDateString({ dateFormat: 'short' });

  return (
    <div className='summary-container'>
      <div className='reservation-summary-header-container'>
        <h2>Stay in {reservation.city}</h2>
        <h2>{`${startDate} - ${endDate}`}</h2>
      </div>
      <div className='summary-image-container'>
        <img src={reservation.property_photo_url} />
      </div>
    </div>
  );
}
