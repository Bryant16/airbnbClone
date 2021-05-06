import { useState } from 'react';

import GoogleMap from '../GoogleMap';
import SearchResultListing from './SearchResultListing';

export default function MapReel ({ center, listings }) {
  const [showPrivate, setShowPrivate] = useState(false);

  const togglePrivate = () => setShowPrivate(p => !p);
  return (
    <div className='listingMapContainer'>
      <div className='listingMapContainer_listings'>
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
          locationObj={center}
          searchResults={listings}
        />
      </div>
    </div>
  );
}
