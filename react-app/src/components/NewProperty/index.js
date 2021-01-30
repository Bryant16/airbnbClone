import React, { useState } from 'react';

import './index.css';

export default function NewProperty () {
  const [listing_title, updateTitle] = useState('');
  const [address1, updateAddr1] = useState('');
  const [address2, updateAddr2] = useState('');
  const [city, updateCity] = useState('');
  const [zip_code, updateZipCode] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [description, updateDescription] = useState('');
  const [check_in, setCheckIn] = useState('12:00');
  const [check_out, setCheckOut] = useState('12:00');
  const [guest_spots, updateMaxOccupancy] = useState(2);
  const [nightly_rate_usd, setRate] = useState(0);
  // const [pageErrors, setPageErrors] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    const newProperty = {
      listing_title,
      private: isPrivate,
      nightly_rate_usd,
      address1,
      address2,
      city,
      zip_code,
      description,
      check_in: +check_in.replace(/:/g, ''),
      check_out: +check_out.replace(/:/g, ''),
      guest_spots
    };
    const response = await window.fetch('/api/property/', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(newProperty)
    });
    if (response.ok) console.log(await response.json());
    // else {
    //   setPageErrors(["Sorry, it seems that address doesn't exist."]);
    // }
  };

  // useEffect(() => () => setPageErrors([]), []);

  return (
    <div className='new-property-page-container'>
      {/* {pageErrors.length
        ? (
          <div className='page-errors'>
            <ul>
              {pageErrors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
          </div>
          )
        : null} */}
      <form
        className='new-property-form'
        onSubmit={submit}
      >
        <div className='address-inputs'>
          <input
            type='text'
            placeholder='Listing Title'
            value={listing_title}
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
            value={zip_code}
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
                value={check_in}
                onChange={({ target: { value } }) => setCheckIn(value)}
              />
            </div>
            <div className='new-checkout'>
              <label>
                Check out
              </label>
              <input
                type='time'
                value={check_out}
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
                value={guest_spots}
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
              value={nightly_rate_usd}
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
