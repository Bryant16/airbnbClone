import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DateRangePicker } from 'react-date-range';
import { FaSearch } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import dateFormat from 'dateformat';

import { search } from '../../store/search';

import './react_date_range.css';
import './search_bar.css';

export default function SearchBar () {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [searchLocation, setSearchLocation] = useState('');
  const [showDates, setShowDates] = useState(false);
  const [guestNumber, setGuestNumber] = useState(1);
  const [datesButtonDisplay, setDatesButtonDisplay] = useState('Add Dates');

  const dispatch = useDispatch();
  const history = useHistory();

  // HANDLE CASING OF QUERIES
  useEffect(() => {
    if (searchLocation.length > 1 && !searchLocation.includes(' ')) {
      const locationCasing =
        searchLocation[0].toUpperCase() + searchLocation.slice(1);
      return setSearchLocation(locationCasing);
    }
    if (searchLocation.includes(' ')) {
      const locationCasing = searchLocation
        .split(' ')
        .map((word) => {
          try {
            return word[0].toUpperCase() + word.slice(1);
          } catch {
            return word;
          }
        })
        .join(' ');
      setSearchLocation(locationCasing);
    }
  }, [searchLocation]);

  const selectionRange = {
    startDate,
    endDate,
    color: '#ff3a5c',
    key: 'selection'
    // TODO:
    // add property disabledDates to disable selection based on unavailbilty
    // disabledDates: ["AN ARRAY OF DATES THAT ARE DISABLED"],

    // ^ This probably only needs to be done on the reservation calendar, not
    // the search calendar, unless we want to block a user from booking mulitple
    // properties at the same time. - JM
  };

  // Change the Dates button to display the user's selection
  const formattedStart = dateFormat(startDate, 'mmm d');
  const formattedEnd = dateFormat(endDate, 'mmm d');
  const formattedRange = `${formattedStart} - ${formattedEnd}`;
  if (
    startDate.toString() !== endDate.toString() &&
    datesButtonDisplay !== formattedRange
  ) setDatesButtonDisplay(formattedRange);

  const handleSelect = (ranges) => {
    setStartDate(new Date(ranges.selection.startDate));
    setEndDate(new Date(ranges.selection.endDate));
  };

  const handleDateButton = () => {
    setShowDates(showDates => !showDates);
  };

  const handleLocation = ({ target: { value } }) => {
    setSearchLocation(value);
  };

  const handleGuests = ({ target: { value } }) => {
    setGuestNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(search({ searchLocation, guestNumber, startDate, endDate }));

    history.push('/search');
  };

  return (
    <>
      <Helmet>
        <title>{searchLocation}</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <div id='div__search_bar'>
          <div className='div__search_section'>
            <label className='label__move_over'>Location</label>
            <br />
            <input
              type='text'
              className='navbar_search_searchbar'
              value={searchLocation}
              onChange={handleLocation}
              placeholder='Where are you going?'
            />
          </div>
          <div
            className='div__search_section div__dates-width'
            style={
              showDates
                ? {
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    borderBottom: '1px dotted #ff3a5c'
                  }
                : null
            }
            onClick={handleDateButton}
          >
            <label className='label__dates'>Dates</label>
            <br />
            <button type='button' className='button__annoying_space'>
              {datesButtonDisplay}
            </button>
            <br />
          </div>
          <div className='div__search_section'>
            <label>Guests</label>
            <br />

            <input
              className='div__guests-width'
              type='number'
              min='1'
              onChange={handleGuests}
              placeholder='number of guests'
            />
          </div>
          <div className='div__search_section'>
            <button type='submit'>
              <FaSearch />
            </button>
          </div>
        </div>
      </form>
      {showDates && (
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      )}
    </>
  );
}
