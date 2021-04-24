import React from 'react';
import GoogleMapReact from 'google-map-react';
import { nanoid } from 'nanoid';
import { NavHashLink } from 'react-router-hash-link';
import { useDispatch, useSelector } from 'react-redux';
import { focusListing } from '../../store/search';

import './map.css';

const Pin = ({ searchResult }) => {
  const dispatch = useDispatch();
  const focusId = useSelector((state) => state.search.focusId);

  async function clickPinHandler (e) {
    e.preventDefault();
    dispatch(focusListing(searchResult.id));
  }

  return (
    <NavHashLink smooth to={`#listing_${searchResult.id}`}>
      <div
        className='pin'
        onClick={clickPinHandler}
        style={
          focusId === searchResult.id
            ? {
                color: '#ff3a5c',
                fontWeight: '700',
                border: '1px solid #ff3a5c'
              }
            : null
        }
      >
        <div>{`$ ${searchResult.nightly_rate_usd}`}</div>
      </div>
    </NavHashLink>
  );
};

const GoogleMap = ({ locationObj, searchResults }) => {
  const focusId = useSelector((state) => state.search.focusId);

  return (
    <div className='map'>
      {!locationObj && 'loading....'}
      {locationObj && (
        <div className='google-map'>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_API_KEY
            }}
            // defaultCenter={{ lat: 40.7128, lng: -74.006 }}
            center={locationObj}
            zoom={focusId ? 12 : 10}
            defaultZoom={10}
          >
            {searchResults &&
              searchResults.map((result) => (
                <Pin
                  key={nanoid()}
                  lat={result.latitude}
                  lng={result.longitude}
                  searchResult={result}
                />
              ))}
          </GoogleMapReact>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;
