import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import GoogleMap from './GoogleMap';
import SearchResultListing from './SearchResultListing';
import './search_page.css';

export default function SearchPage () {
  const searchResults = useSelector(state => state.search.properties);
  const searchLocation = useSelector(state => state.search.location);
  const [showPrivate, setShowPrivate] = useState(false);

  const togglePrivate = () => {
    setShowPrivate(previousPrivate => !previousPrivate);
  };

  return (
    <div className='div__container'>
      {!searchResults && 'searching...'}
      {searchResults && (
        <div className='listingMapContainer'>
          <div className='listingMapContainer_listings'>
            {searchResults.length > 0 && (
              <button
                className='button__filter'
                onClick={togglePrivate}
                style={{
                  backgroundColor: showPrivate === true ? 'lightgrey' : 'white'
                }}
              >
                Private
              </button>
            )}

            {searchResults.length === 0 && (
              <h1>Sorry, no listings in this area.</h1>
            )}
            {searchResults
              .filter((result) => (showPrivate ? result.private : true))
              .map((result, idx) => (
                <SearchResultListing key={idx} listing={result} />
              ))}
          </div>
          <div className='listingMapContainer__googlemap'>
            {searchLocation &&
              <GoogleMap
                locationObj={searchLocation}
                searchResults={searchResults}
              />}
          </div>
        </div>
      )}
    </div>
  );
}
