import GoogleMapReact from 'google-map-react';
import { useDispatch, useSelector } from 'react-redux';

import { setFocusId } from '../../store/search';
import { SetMapCenter } from '../../store/mapReel';

import './map.css';

const Pin = ({ searchResult }) => {
  const dispatch = useDispatch();
  const focusId = useSelector((state) => state.search.focusId);
  const reelElement = useSelector(state => state.mapReel.reelElement);

  const clickPinHandler = () => {
    dispatch(setFocusId(searchResult.id));
    let { offsetTop: top } = document.getElementById(`listing_${searchResult.id}`);
    top -= 145;
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
