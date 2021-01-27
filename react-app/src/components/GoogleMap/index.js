import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";

const GoogleMap = ({ locationObj }) => {
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
            defaultCenter={locationObj}
            defaultZoom={11}
          ></GoogleMapReact>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;
