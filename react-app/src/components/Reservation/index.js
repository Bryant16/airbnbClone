import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Reservation.css';

const Reservation = ({ property }) => {
  const history = useHistory();
  const { user } = useSelector(state => state.session);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numGuest, setNumGuest] = useState(1);
  const [guestForNight, setGuestForNight] = useState(1);

  const numNights = ((Math.abs(endDate - startDate)) / (1000 * 60 * 60 * 24));

  const handleSelect = ranges => {
    if (!user) {
      history.push('/login');
    } else {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
    }
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  };
const guestTrack =(e)=>{
  e.preventDefault();
  if(e.target.value === '+'){
    setGuestForNight(guestForNight +1)
  }else{
    setGuestForNight(guestForNight -1)
  }
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      history.push('/login');
    } else {
      const newReservation = {
        startDate: startDate,
        endDate: endDate,
        property: property.id,
        numGuest: numGuest,
        user: user.id
      };
      try {
        /* const createReservation = */ await window.fetch('/api/reservation/', {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(newReservation)
        });
        // const data = await createReservation.json();
      } catch (e) {
        console.log(e);
      }
      history.push('/users/me');
    }
  };

  return (
    <div className='reservation_form'>
        <form>
          <div className='rate_and_test'>
          <label>{`$ ${property.nightly_rate_usd} / night`}</label><label><i class="fas fa-star"></i>{property.rating && property.rating.average}</label>
          </div>
          <DateRange ranges={[selectionRange]} onChange={handleSelect} />
          <div className='guest_number_container'>
          <label>Guests</label>
          <input id='guest_number' type='integer' value={guestForNight}onChange={(e) => setNumGuest(e.target.value)}></input><button className='increase_decrease' value={'+'} onClick={guestTrack}>+</button><button className='increase_decrease' value ={'-'} onClick={guestTrack}>-</button>
          </div>
          {numNights !== 0 && <p id='price_per_night'>Price Per Night: ${numNights * property.nightly_rate_usd}</p>}
          <button id='reserve_button' onClick={handleSubmit}>Reserve Now</button>
        </form>
      </div>
  );
};

export default Reservation;
