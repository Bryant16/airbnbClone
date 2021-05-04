import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { DateRange } from 'react-date-range';

import { createReservation } from '../../store/propertyPage';
import { popLogin, setAfter } from '../../store/modal';
import { EditReservation } from '../../store/reservation';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Reservation.css';

const Reservation = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const bookedDateRange = useSelector(state => state.property.booked);
  const extantDateRange = useSelector(state => state.reservation.dateRange);
  const reservationSuccess = useSelector(state => state.property.reservationSuccess);
  const property = useSelector(state => state.property.details || state.reservation.property);

  const [extantStartDate, extantEndDate] = (extantDateRange && extantDateRange.split(' - ')) || [null, null];

  const [startDate, setStartDate] = useState((extantStartDate && new Date(extantStartDate)) || new Date());
  const [endDate, setEndDate] = useState((extantEndDate && new Date(extantEndDate)) || new Date());
  const [numGuest, setNumGuest] = useState(2);
  const [disabledDates, setDisabledDates] = useState([]);

  const numNights = Math.round(((Math.abs(endDate - startDate)) / 86400000));

  const handleSelect = ({ selection: { startDate, endDate } }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  };

  const increaseGuests = () => setNumGuest(g => g < 20 ? g + 1 : g);
  const decreaseGuests = () => setNumGuest(g => g > 1 ? g - 1 : g);
  const directSetGuests = ({ target: { value } }) => {
    setNumGuest(
      () => (value >= 1 && value <= 20)
        ? value
        : value > 20
          ? 20
          : 1
    );
  };

  const reserve = () => {
    const newReservation = {
      startDate,
      endDate,
      numGuest,
      property: property.id
    };
    if (!extantDateRange) {
      dispatch(createReservation(newReservation))
        .catch(() => window.alert('Sorry, something went wrong. Please refresh the page and try again.'));
    } else {
      dispatch(EditReservation(property.id, extantDateRange, newReservation));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) reserve();
    else {
      dispatch(setAfter(reserve));
      dispatch(popLogin());
    }
  };

  useEffect(() => {
    if (bookedDateRange) {
      const out = [];
      for (const date of bookedDateRange) out.push(new Date(date));
      setDisabledDates(out);
    }
  }, [bookedDateRange]);

  if (reservationSuccess) return <Redirect to='/users/me' />;

  return property && (
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
        <DateRange
          ranges={[selectionRange]}
          onChange={handleSelect}
          disabledDates={disabledDates}
        />
        <div className='guest_number_container'>
          <label>Guests</label>
          <input
            min={1}
            max={20}
            id='guest_number'
            type='integer'
            value={numGuest}
            onChange={directSetGuests}
          />
          <button
            type='button'
            className='increase_decrease'
            onClick={increaseGuests}
          >
            +
          </button>
          <button
            type='button'
            className='increase_decrease'
            onClick={decreaseGuests}
          >
            -
          </button>
        </div>
        {numNights
          ? (
            <p id='price_per_night'>
              Total cost of your stay: ${numNights * property.nightly_rate_usd}
            </p>
            )
          : null}
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
