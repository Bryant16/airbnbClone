import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PopulateReservations } from '../../store/reel';
import ReservationSummary from './ReservationSummary';

export default function PropertyReel () {
  const dispatch = useDispatch();
  const list = useSelector(state => state.reel.reservationList);
  const [loaded, setLoaded] = useState(false);

  const datesSeen = new Set();

  const repeatFilter = (obj) => {
    if (datesSeen.has(obj.date_range)) return false;
    datesSeen.add(obj.date_range);
    return true;
  };

  useEffect(() => {
    dispatch(PopulateReservations())
      .then(() => setLoaded(true));
  }, [dispatch]);

  return loaded
    ? list && list.length
        ? (
          <div className='reel-container'>
            <div className='reel-title-container'>
              <h1>
                Your reservations:
              </h1>
            </div>
            {list.filter(repeatFilter).map(res => <ReservationSummary key={res.id} reservation={res} />)}
          </div>
          )
        : null
    : <h1>Loading...</h1>;
}
