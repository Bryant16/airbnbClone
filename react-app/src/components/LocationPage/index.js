import React from 'react';
import { useParams } from 'react-router-dom';

import PropertyReel from '../PropertyReel';

import './index.css';

export default function LocationPage () {
  const { location } = useParams();

  return (
    <div className='location-page-container'>
      <div className='location-page-title-container'>
        <h1>Crash pads in {location.split('')[0].toUpperCase() + location.slice(1)}:</h1>
      </div>
      <PropertyReel />
    </div>
  );
}
