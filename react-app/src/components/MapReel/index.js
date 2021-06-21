import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import GoogleMap from '../GoogleMap';
import SearchResultListing from './SearchResultListing';
import PropertyPage from '../propertyPage';
import { SetReelElement, ShowListings, ShowProperty } from '../../store/mapReel';
import { unload } from '../../store/propertyPage';

export default function MapReel ({ listings }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const reelMode = useSelector(state => state.mapReel.mode);
  const property = useSelector(state => state.property.details);
  const searchLoaded = useSelector(state => state.search.loaded);

  const [showPrivate, setShowPrivate] = useState(false);
  const [left, setLeft] = useState('0vw');
  const [sliderWidth, setSliderWidth] = useState('40vw');
  const [mapWidth, setMapWidth] = useState('60vw');

  const togglePrivate = () => setShowPrivate(p => !p);

  const onReturn = () => {
    if (searchLoaded) {
      history.goBack();
      dispatch(unload());
    } else {
      history.push('/');
      dispatch(unload());
    }
  };

  const reelRef = useRef(null);

  useEffect(() => {
    dispatch(SetReelElement(reelRef.current));
  }, [dispatch]);

  useEffect(() => {
    if (reelMode === 'listings') {
      setLeft('0vw');
      setMapWidth('60vw');
      setSliderWidth('40vw');
    }
    if (reelMode === 'property') {
      setLeft('-40vw');
      setMapWidth('30vw');
      setSliderWidth('110vw');
    }
  }, [reelMode]);

  useEffect(() => {
    if (property) dispatch(ShowProperty());
    if (!property) dispatch(ShowListings());
  }, [dispatch, property]);

  return (
    <div className='listingMapContainer'>
      <div
        className='listingProperty slider'
        style={{
          left,
          width: sliderWidth,
          minWidth: sliderWidth,
          maxWidth: sliderWidth
        }}
      >
        <div
          ref={reelRef}
          className='listingMapContainer_listings'
        >
          {listings.length
            ? (
              <button
                className='button__filter'
                onClick={togglePrivate}
                style={{
                  backgroundColor: showPrivate === true ? 'lightgrey' : 'white'
                }}
              >
                Private
              </button>
              )
            : <h1>Sorry, no listings in this area.</h1>}
          {listings
            .filter((result) => ((showPrivate === result.private) || !showPrivate))
            .map((result, idx) => (
              <SearchResultListing key={idx} listing={result} />
            ))}
        </div>
        <div className='listingMapContainer_property'>
          <button
            className='property-return'
            onClick={onReturn}
          >
            <i className='fas fa-chevron-left' />Back
          </button>
          <PropertyPage />
        </div>
      </div>
      <div
        className='listingMapContainer__googlemap'
        style={{
          width: mapWidth,
          maxWidth: mapWidth,
          minWidth: mapWidth
        }}
      >
        <GoogleMap
          searchResults={listings}
        />
      </div>
    </div>
  );
}
