import React from 'react';
import { useParams } from 'react-router-dom';

import PropertyReel from '../PropertyReel';

import './index.css';

export default function LocationPage () {
  const { location } = useParams();
  const placeName = location.split('')[0].toUpperCase() + location.slice(1);

  return (
    <div className='location-page-container'>
      <PropertyReel placeName={placeName} />
    </div>
  );
}
