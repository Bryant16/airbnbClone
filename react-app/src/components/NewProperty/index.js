import React, { useState, useEffect } from 'react';

export default function NewProperty () {
  const [title, updateTitle] = useState('');
  const [addr1, updateAddr1] = useState('');
  const [addr2, updateAddr2] = useState('');
  const [city, updateCity] = useState('');
  const [state, updateState] = useState('');
  const [zipCode, updateZipCode] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [description, updateDescription] = useState('');
  const [checkIn, setCheckIn] = useState(1200);
  const [checkOut, setCheckOut] = useState(1200);
  const [maxOccupancy, updateMaxOccupancy] = useState(2);
  const [rate, setRate] = useState(0);

  return (
    <div className='new-property-page-container'>
      <form className='new-property-form'>
        <input
          type='text'
          placeholder='Listing Title'
          value={title}
          onChange={({ target: { value } }) => updateTitle(value)}
        />
        <input
          type='text'
          placeholder='Address Line 1'
          value={addr1}
          onChange={({ target: { value } }) => updateAddr1(value)}
        />
        <input
          type='text'
          placeholder='Address Line 2 (optional)'
          value={addr2}
          onChange={({ target: { value } }) => updateAddr2(value)}
        />
        <input
          type='text'
          placeholder='City'
          value={city}
          onChange={({ target: { value } }) => updateCity(value)}
        />
        <textarea
          placeholder='Property Description'
          onChange={({ target: { value } }) => updateDescription(value)}
        >
          {description}
        </textarea>
      </form>
    </div>
  );
}
