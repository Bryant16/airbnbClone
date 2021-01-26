import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import SearchResultListing from "./SearchResultListing";

const SearchPage = () => {
  const [searchListings, setSearchListings] = useState();
  const searchResults = useSelector((state) => {
    return state.search.properties;
  });
  useEffect(() => {
    if (!searchListings) {

    }
  }, []);

  return (
    <div>
      {!searchResults && <span>searching...</span>}
      {searchResults &&
        searchResults.map((result) => {
          return <SearchResultListing listing={result} />;
        })}
    </div>
  );
};

export default SearchPage;
