import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import Reservation from '../Reservation';
import { LoadReservation, UnloadReservation } from '../../store/reservation';

import './index.css';

export default function EditReservation () {
  const dispatch = useDispatch();
  const { propertyId, dateRange } = useParams();

  const loaded = useSelector(state => state.reservation.loaded);
  const propertyDetails = useSelector(state => state.reservation.property);
  const user = useSelector(state => state.session.user);
  const sessionLoaded = useSelector(state => state.session.loaded);
  const success = useSelector(state => state.reservation.success);

  useEffect(() => {
    dispatch(LoadReservation(propertyId, dateRange));
    return () => dispatch(UnloadReservation());
  }, [dispatch, propertyId, dateRange]);

  if (success) return <Redirect to='/users/me' />;
  if (sessionLoaded && !user) return <Redirect to='/' />;

  return loaded
    ? (
        propertyDetails && (
          <div className='edit-reservation-container'>
            <div className='simple-summary-container'>
              <h1>Edit your stay in {propertyDetails.city}</h1>
              <img
                className='simple-summary-coverphoto'
                src={propertyDetails.coverphoto_url}
                alt=''
              />
            </div>
            <div className='reservation-border-wrapper'>
              <Reservation />
            </div>
          </div>
        )
      ) || (
        <h2>
          Sorry, we weren't able to find that reservation. Please go back to the previous page and try again.
        </h2>
      )
    : <h1>Loading...</h1>;
}
