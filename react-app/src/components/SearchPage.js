import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import GoogleMap from './GoogleMap';
import SearchResultListing from './SearchResultListing';
import './search_page.css';

const SearchPage = () => {
  const { properties: searchResults } = useSelector(state => state.search);
  const { searchLocation: centerMapCoordinates } = useSelector(state => state.search);
  const [showPrivate, setShowPrivate] = useState('hello');

  const togglePrivate = async () => showPrivate === 'hello'
    ? setShowPrivate(true)
    : setShowPrivate(previousPrivate => !previousPrivate);

  return (
    <div className='div__container'>
      {!searchResults && <span>searching...</span>}

      {searchResults && (
        <div className='listingMapContainer'>
          <div className='listingMapContainer_listings'>
            <button
              className='button__filter'
              onClick={togglePrivate}
              style={{
                backgroundColor: showPrivate === true
                  ? 'lightgrey'
                  : 'white'
              }}
            >
              Private
            </button>
            {searchResults.map((result) => {
              if (showPrivate === 'hello') {
                return <SearchResultListing listing={result} />;
              } else if (showPrivate === true) {
                return result.private
                  ? <SearchResultListing listing={result} />
                  : null;
              } else if (showPrivate === false) {
                return !result.private
                  ? <SearchResultListing listing={result} />
                  : null;
              }
            })}
          </div>
          <div className='listingMapContainer__googlemap'>
            <GoogleMap
              locationObj={centerMapCoordinates}
              searchResults={searchResults}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
