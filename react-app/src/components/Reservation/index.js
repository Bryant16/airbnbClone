import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Reservation.css';

const Reservation = ({ property }) => {
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numGuest, setNumGuest] = useState(1);
  const [guestForNight, setGuestForNight] = useState(2);

  const numNights = ((Math.abs(endDate - startDate)) / 86400000);

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
  const guestTrack = (click) => {
    click.preventDefault();
    if (click.target.innerText === '+') {
      setGuestForNight(previousGuests => previousGuests + 1);
    } else {
      setGuestForNight(previousGuests => previousGuests - 1);
    }
  };
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
      const response = await window.fetch('/api/reservation/', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newReservation)
      });
      if (response.ok) history.push('/users/me');
      else window.alert('Sorry, something went wrong. Please refresh the page and try again.');
    }
  };

  return (
    <div className='reservation_form'>
      <form>
        <div className='rate_and_test'>
          <label>
            {`$ ${property.nightly_rate_usd} / night`}
          </label>
          <label>
            <i className='fas fa-star' />{property.rating && property.rating.average}
          </label>
        </div>
        <DateRange ranges={[selectionRange]} onChange={handleSelect} />
        <div className='guest_number_container'>
          <label>Guests</label>
          <input
            id='guest_number'
            type='integer'
            value={guestForNight}
            onChange={(e) => setNumGuest(e.target.value)}
          />
          <button
            className='increase_decrease'
            onClick={guestTrack}
          >
            +
          </button>
          <button
            className='increase_decrease'
            onClick={guestTrack}
          >
            -
          </button>
        </div>
        {numNights !== 0 && (
          <p id='price_per_night'>
            Total cost of your stay: ${numNights * property.nightly_rate_usd}
          </p>
        )}
        <button
          id='reserve_button'
          onClick={handleSubmit}
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
};

export default Reservation;
