import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import GoogleMap from '../GoogleMap';
import SearchResultListing from './SearchResultListing';
import { SetReelElement } from '../../store/mapReel';

export default function MapReel ({ listings }) {
  const dispatch = useDispatch();
  const [showPrivate, setShowPrivate] = useState(false);

  const togglePrivate = () => setShowPrivate(p => !p);

  const reelRef = useRef(null);

  useEffect(() => {
    dispatch(SetReelElement(reelRef.current));
  }, [dispatch]);

  return (
    <div className='listingMapContainer'>
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
      <div className='listingMapContainer__googlemap'>
        <div className='button map-expand' />
        <GoogleMap
          searchResults={listings}
        />
      </div>
    </div>
  );
}
