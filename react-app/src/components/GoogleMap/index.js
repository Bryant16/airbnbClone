import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import { parseWithOptions } from "date-fns/fp";

const Pin = ({ searchResult }) => {
  return (
    <div className="pin">
      <div>{`$ ${searchResult.nightly_rate_usd}`}</div>
    </div>
  );
};

const GoogleMap = ({ locationObj, searchResults }) => {
  console.log("locationObj", locationObj);
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
            defaultZoom={8}
          >
            {searchResults.map((result) => {
              return (
                <Pin
                  lat={result.latitude}
                  lng={result.longitude}
                  searchResult={result}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;
