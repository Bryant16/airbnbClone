import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { NavHashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { focusListing } from "../../store/search";

// import { parseWithOptions } from 'date-fns/fp';

import "./map.css";

const Pin = ({ searchResult }) => {
  const dispatch = useDispatch();
  const focusId = useSelector((state) => state.search.focusId);

  async function clickPinHandler(e) {
    e.preventDefault();
    dispatch(focusListing(searchResult.id));
  }

  return (
    <NavHashLink smooth to={`#listing_${searchResult.id}`}>
      <a onClick={clickPinHandler}>
        <div
          className="pin"
          style={
            focusId === searchResult.id
              ? {
                  color: "#ff3a5c",
                  fontWeight: "700",
                  border: "1px solid #ff3a5c",
                }
              : null
          }
        >
          <div>{`$ ${searchResult.nightly_rate_usd}`}</div>
        </div>
      </a>
    </NavHashLink>
  );
};

const GoogleMap = ({ locationObj, searchResults }) => {
  return (
    <div className="map">
      {!locationObj && "loading...."}
      {locationObj && (
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDT_KxxLpoLwmlk3sXLpayAvW9z9_RodME",
            }}
            center={locationObj}
            defaultZoom={9}
          >
            {searchResults.map((result) => (
              <Pin
                key={nanoid()}
                lat={result.latitude}
                lng={result.longitude}
                searchResult={result}
              />
            ))}
          </GoogleMapReact>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;
