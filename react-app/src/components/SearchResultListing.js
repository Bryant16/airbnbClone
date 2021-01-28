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
          <div className="div__description">
            <p>{listing.city}</p>
          </div>
          <div className="div__nightly_rate">
            <span className="span__night_rate-bold">
              $ {listing.nightly_rate_usd}{" "}
            </span>
            / night
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default SearchResultListing;
