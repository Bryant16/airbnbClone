import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SetCurrentErrors } from '../../store/errors';
import { CreateProperty } from '../../store/propertyPage';

import './index.css';

export default function NewProperty () {
  const dispatch = useDispatch();

  const history = useHistory();

  const [listingTitle, updateTitle] = useState('');
  const [address1, updateAddr1] = useState('');
  const [address2, updateAddr2] = useState('');
  const [city, updateCity] = useState('');
  const [zipCode, updateZipCode] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [description, updateDescription] = useState('');
  const [checkIn, setCheckIn] = useState(1200);
  const [checkOut, setCheckOut] = useState(1200);
  const [guestSpots, updateMaxOccupancy] = useState(2);
  const [nightlyRate, setRate] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    dispatch(SetCurrentErrors([]));
    const newProperty = {
      listingTitle,
      nightlyRate,
      address1,
      address2,
      city,
      zipCode,
      description,
      checkIn,
      checkOut,
      guestSpots,
      private: isPrivate
    };
    dispatch(CreateProperty(newProperty, history));
  };

  return (
    <div className='new-property-page-container'>
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
          />
          <input
            type='text'
            placeholder='Address Line 1'
            value={address1}
            onChange={({ target: { value } }) => updateAddr1(value)}
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
          />
          <input
            type='text'
            placeholder='Zip Code (00000)'
            value={zipCode}
            onChange={({ target: { value } }) => updateZipCode(value)}
            pattern='^\d{5}'
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
                value={`${checkIn.toString().slice(0, 2)}:${checkIn.toString().slice(2)}`}
                onChange={({ target: { value } }) => setCheckIn(+value.replace(/:/g, ''))}
              />
            </div>
            <div className='new-checkout'>
              <label>
                Check out
              </label>
              <input
                type='time'
                value={`${checkOut.toString().slice(0, 2)}:${checkOut.toString().slice(2)}`}
                onChange={({ target: { value } }) => setCheckOut(+value.replace(/:/g, ''))}
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
        />
        <button className='new-property-submit'>
          Make some money!
        </button>
      </form>
    </div>
  );
}
