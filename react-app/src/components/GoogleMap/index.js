import GoogleMapReact from 'google-map-react';
import { useDispatch, useSelector } from 'react-redux';

import { SetMapCenter, setFocusId } from '../../store/mapReel';
import { useQuerySelector } from '../../utils/hooks';

import './map.css';

const Pin = ({ searchResult }) => {
  const dispatch = useDispatch();
  const focusId = useSelector(state => state.mapReel.focusId);
  const reelElement = useSelector(state => state.mapReel.reelElement);

  const listing = useQuerySelector(`#listing_${searchResult.id}`);

  const clickPinHandler = () => {
    dispatch(setFocusId(searchResult.id));
    const { offsetTop: top } = listing;
    reelElement.scrollTo({ top, behavior: 'smooth' });
    const pinPosition = { lng: searchResult.longitude, lat: searchResult.latitude };
    dispatch(SetMapCenter(pinPosition));
  };

  return (
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
  );
};

const GoogleMap = ({ searchResults }) => {
  const dispatch = useDispatch();
  const center = useSelector(state => state.mapReel.mapCenter);

  const handleMapChange = ({ center: newCenter }) => {
    if (!Object.deepEq(center, newCenter)) dispatch(SetMapCenter(newCenter));
  };

  return (
    <div className='map'>
      {!center && 'loading....'}
      {center && (
        <div className='google-map'>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_API_KEY
            }}
            // defaultCenter={{ lat: 40.7128, lng: -74.006 }}
            center={center}
            zoom={10}
            defaultZoom={10}
            onChange={handleMapChange}
          >
            {searchResults &&
              searchResults.map((result, idx) => (
                <Pin
                  key={idx}
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
