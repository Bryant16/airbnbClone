import React from "react";
import { NavLink } from "react-router-dom";
import Stars from "./Stars";
import { useSelector } from "react-redux";
import { FaBalanceScale } from "react-icons/fa";

const SearchResultListing = ({ listing }) => {
  const focusId = useSelector((state) => state.search.focusId);
  return (
    <NavLink to={`/properties/${listing.id}`}>
      <div
        id={`listing_${listing.id}`}
        className={`div__listings_property ${
          focusId === listing.id ? "div__listing-active" : null
        }`}
      >
        <div className="div__coverphoto">
          <img
            className='img__listing_coverphoto'
            src={listing.coverphoto_url}
            alt=''
          />
        </div>
        <div className='div__listings_info'>
          <div className='div__description'>
            <h2>{listing.listing_title}</h2>
            <hr />
            <span className='span__details'>
              {listing.guest_spots} guests ·
              {listing.private
                ? ' Entire place'
                : ' Private room in shared space'}
            </span>
            <span className='span__details'>
              {' · '}
              <Stars rating={listing.rating.overall_value} />
            </span>
          </div>
          <br />
          <div className='div__nightly_rate'>
            <span className='span__night_rate-bold'>
              ${listing.nightly_rate_usd}{' '}
            </span>
            / night
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default SearchResultListing;
