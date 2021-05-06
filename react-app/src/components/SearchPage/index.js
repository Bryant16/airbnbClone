import { useState } from 'react';
import { useSelector } from 'react-redux';
import GoogleMap from '../GoogleMap';
import SearchResultListing from './SearchResultListing';
import './search_page.css';

export default function SearchPage () {
  const searchResults = useSelector(state => state.search.properties);
  const searchLocation = useSelector(state => state.search.center);
  const [showPrivate, setShowPrivate] = useState(false);

  const togglePrivate = () => {
    setShowPrivate(previousPrivate => !previousPrivate);
  };

  return (
    <div className='div__container'>
      {!searchResults && 'Searching...'}
      {searchResults && (
        <div className='listingMapContainer'>
          <div className='listingMapContainer_listings'>
            {searchResults.length
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
            {searchResults
              .filter((result) => ((showPrivate === result.private) || !showPrivate))
              .map((result, idx) => (
                <SearchResultListing key={idx} listing={result} />
              ))}
          </div>
          <div className='listingMapContainer__googlemap'>
            <div className='button map-expand' />
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
