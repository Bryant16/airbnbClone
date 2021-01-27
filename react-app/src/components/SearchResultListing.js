import React from "react";
import { NavLink } from "react-router-dom";

const SearchResultListing = ({ listing }) => {
  return (
    <NavLink to={`/properties/${listing.id}`}>
      <div className="div__listings_property">
        <div className="div__coverphoto">
          <img
            className="img__listing_coverphoto"
            src={listing.coverphoto_url}
          />
        </div>
        <div className="div__listings_info">
          <p>{listing.city}</p>
          <span className="span__nightly_rate">
            $ {listing.nightly_rate_usd}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default SearchResultListing;
