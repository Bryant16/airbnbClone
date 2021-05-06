import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GoogleMap from '../GoogleMap';
import SearchResultListing from './SearchResultListing';
import { SetReelElement } from '../../store/mapReel';

export default function MapReel ({ listings }) {
  const dispatch = useDispatch();

  const reelMode = useSelector(state => state.mapReel.mode);

  const [showPrivate, setShowPrivate] = useState(false);
  const [left, setLeft] = useState('0vw');
  const [sliderWidth, setSliderWidth] = useState(40);

  const togglePrivate = () => setShowPrivate(p => !p);

  const reelRef = useRef(null);

  useEffect(() => {
    dispatch(SetReelElement(reelRef.current));
  }, [dispatch]);

  useEffect(() => {
    if (reelMode === 'listings') {
      setLeft('0vw');
      setSliderWidth(40);
    }
    if (reelMode === 'property') {
      setLeft('-40vw');
      setSliderWidth(70);
    }
  }, [reelMode]);

  return (
    <div className='listingMapContainer'>
      <div
        className='listingProperty slider'
        style={{
          left,
          width: `${sliderWidth}vw`
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
          <h1>Placeholder</h1>
        </div>
      </div>
      <div
        className='listingMapContainer__googlemap'
      >
        <div className='button map-expand' />
        <GoogleMap
          searchResults={listings}
        />
      </div>
    </div>
  );
}
