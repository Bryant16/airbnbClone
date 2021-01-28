import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PopulateReservations } from '../../store/reel';
import ReservationSummary from './ReservationSummary';

export default function PropertyReel () {
  const dispatch = useDispatch();
  const list = useSelector(state => state.reel.reservationList);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(PopulateReservations())
      .then(() => setLoaded(true));
  }, [dispatch]);

  return loaded
    ? list
        ? (
          <div className='reel-container'>
            <div className='reel-title-container'>
              <h1>
                Your reservations:
              </h1>
            </div>
            {list.map(reservation => <ReservationSummary key={reservation.id} reservation={reservation} />)}
          </div>
          )
        : null
    : <h1>Loading...</h1>;
}
