import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SearchPage = () => {
  const searchResults = useSelector((state) => {
    return state.search.properties;
  });
  console.log(searchResults);
  return (
    <div>
      {!searchResults && <span>searching...</span>}
      {searchResults &&
        searchResults.map((result) => {
          return (
            <NavLink to={`/properties/${result.id}`}>
              <div>{result.listing_title}</div>
            </NavLink>
          );
        })}
    </div>
  );
};

export default SearchPage;
