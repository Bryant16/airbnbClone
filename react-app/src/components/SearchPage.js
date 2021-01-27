import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import SearchResultListing from "./SearchResultListing";

const SearchPage = () => {
  const searchResults = useSelector((state) => {
    return state.search.properties;
  });
  const [showPrivate, setShowPrivate] = useState("hello");

  const togglePrivate = async (e) => {
    if (showPrivate == "hello") {
      setShowPrivate(true);
    } else {
      setShowPrivate(!showPrivate);
    }
  };

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
      {searchResults &&
        searchResults.map((result) => {
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
  );
};

export default SearchPage;
