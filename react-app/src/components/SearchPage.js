import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GoogleMap from "./GoogleMap";
import SearchResultListing from "./SearchResultListing";
import "./search_page.css";

const SearchPage = () => {
  const searchResults = useSelector((state) => {
    return state.search.properties;
  });
  const centerMapCoordinates = useSelector((state) => {
    return state.search.searchLocation;
  });
  const [showMap, setShowMap] = useState(false);
  const [showPrivate, setShowPrivate] = useState("hello");

  const togglePrivate = async (e) => {
    if (showPrivate == "hello") {
      setShowPrivate(true);
    } else {
      setShowPrivate(!showPrivate);
    }
  };
  useEffect(() => {
    setShowMap(!showMap);
    setShowMap(true);
  }, [centerMapCoordinates]);
  // const [listingResults, setListingResults] = useState();

  // useEffect(() => {
  //   if (searchResults) {
  //     setListingResults(searchResults);
  //   }
  // }, [searchResults]);

  return (
    <div className="div__container">
      {!searchResults && <span>searching...</span>}
      {searchResults && <button onClick={togglePrivate}>Private</button>}
      {searchResults && (
          <div className="listingMapContainer">
            <div className='listingMapContainer_listings'>
            {searchResults.map((result) => {
              if (showPrivate == "hello") {
                return <SearchResultListing listing={result} />;
              } else if (showPrivate == true) {
                return result.private ? (
                  <SearchResultListing listing={result} />
                ) : null;
              } else if (showPrivate == false) {
                return !result.private ? (
                  <SearchResultListing listing={result} />
                ) : null;
              }
            })}
          </div>
          <div className="listingMapContainer__googlemap">
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
