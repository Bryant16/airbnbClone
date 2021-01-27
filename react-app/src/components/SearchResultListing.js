import React from "react";
import { NavLink } from "react-router-dom";

const SearchResultListing = ({ listing }) => {
  return (
      <NavLink to={`/properties/${listing.id}`}>
        <div className='div__listings_property'>
          <img src={listing.coverphoto_url} />
          <p>{listing.city}</p>
          <p>$ {listing.nightly_rate_usd}</p>
        </div>
      </NavLink>
  );
};

export default SearchResultListing;
