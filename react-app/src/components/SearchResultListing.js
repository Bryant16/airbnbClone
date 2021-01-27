import React from "react";
import { NavLink } from "react-router-dom";

const SearchResultListing = ({ listing }) => {
  return (
      <NavLink to={`/properties/${listing.id}`}>
        <div>{listing.city}</div>
      </NavLink>
  );
};

export default SearchResultListing;
