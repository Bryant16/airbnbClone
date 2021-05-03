import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';

export default function NewProperty () {
  const history = useHistory();
  const [listingTitle, updateTitle] = useState('');
  const [address1, updateAddr1] = useState('');
  const [address2, updateAddr2] = useState('');
  const [city, updateCity] = useState('');
  const [zipCode, updateZipCode] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [description, updateDescription] = useState('');
  const [checkIn, setCheckIn] = useState('12:00');
  const [checkOut, setCheckOut] = useState('12:00');
  const [guestSpots, updateMaxOccupancy] = useState(2);
  const [nightlyRate, setRate] = useState(0);
  const [pageErrors, setPageErrors] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    setPageErrors([]);
    const newProperty = {
      listingTitle,
      private: isPrivate,
      nightlyRate,
      address1,
      address2,
      city,
      zipCode,
      description,
      checkIn: +checkIn.replace(/:/g, ''),
      checkOut: +checkOut.replace(/:/g, ''),
      guestSpots
    };
    const response = await window.fetch('/api/property/', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(newProperty)
    });
    const { success, id } = await response.json();
    if (success && id) history.push(`/properties/${id}`);
    else {
      setPageErrors(["Sorry, our system culdn't seem to find that address."]);
    }
  };

  return (
    <div className='new-property-page-container'>
      {pageErrors.length
        ? (
          <div className='page-errors'>
            <ul>
              {pageErrors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
          </div>
          )
        : null}
      <form
        className='new-property-form'
        onSubmit={submit}
      >
        <div className='address-inputs'>
          <input
            type='text'
            placeholder='Listing Title'
            value={listingTitle}
            onChange={({ target: { value } }) => updateTitle(value)}
            required
          />
          <input
            type='text'
            placeholder='Address Line 1'
            value={address1}
            onChange={({ target: { value } }) => updateAddr1(value)}
            required
          />
          <input
            type='text'
            placeholder='Address Line 2 (optional)'
            value={address2}
            onChange={({ target: { value } }) => updateAddr2(value)}
          />
          <input
            type='text'
            placeholder='City'
            value={city}
            onChange={({ target: { value } }) => updateCity(value)}
            required
          />
          <input
            type='text'
            placeholder='Zip Code (00000)'
            value={zipCode}
            onChange={({ target: { value } }) => updateZipCode(value)}
            pattern='^\d{5}'
            required
          />
        </div>
        <div className='checkin-checkout-privacy-occupancy'>
          <div className='checkin-checkout'>
            <div className='new-checkin'>
              <label>
                Check in
              </label>
              <input
                type='time'
                value={checkIn}
                onChange={({ target: { value } }) => setCheckIn(value)}
              />
            </div>
            <div className='new-checkout'>
              <label>
                Check out
              </label>
              <input
                type='time'
                value={checkOut}
                onChange={({ target: { value } }) => setCheckOut(value)}
              />
            </div>
          </div>
          <div className='occupancy-privacy'>
            <div className='new-occupancy'>
              <label>
                {'Maximum Occupancy '}
              </label>
              <input
                type='number'
                className='occupancy'
                min='2'
                max='20'
                value={guestSpots}
                onChange={({ target: { value } }) => updateMaxOccupancy(value)}
              />
            </div>
            <div className='new-privacy'>
              <label>
                Private Space
              </label>
              <input
                type='checkbox'
                className='private'
                id='private-checkbox'
                checked={isPrivate}
                onChange={() => setIsPrivate(value => !value)}
              />
            </div>
          </div>
        </div>
        <div className='nightly-rate'>
          <label>
            Nightly rate
          </label>
          <div className='nightly-rate-input-container'>
            $
            <input
              type='number'
              min={0}
              value={nightlyRate}
              onChange={({ target: { value } }) => setRate(value)}
            />
            USD
          </div>
        </div>
        <textarea
          rows={15}
          placeholder='Listing Description'
          className='description'
          value={description}
          onChange={({ target: { value } }) => updateDescription(value)}
          required
        />
        <button className='new-property-submit'>
          Make some money!
        </button>
      </form>
    </div>
  );
}
