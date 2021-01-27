import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GoogleMap from "./GoogleMap";
import SearchResultListing from "./SearchResultListing";

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
    <div>
      {!searchResults && <span>searching...</span>}
      {searchResults && <button onClick={togglePrivate}>Private</button>}
      {searchResults && (
        <>
          <div>
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
          <div>
            <GoogleMap
              locationObj={centerMapCoordinates}
              searchResults={searchResults}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
