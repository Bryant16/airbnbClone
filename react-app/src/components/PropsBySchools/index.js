import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesNearSchools } from "../../store/listingsBySchools";
import { useParams, Link } from "react-router-dom";
import GoogleMap from "../GoogleMap";
import SearchResultListing from "../SearchResultListing";
import "./propsBySchool.css";
import { Helmet } from "react-helmet";

const ListingsNearSchools = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.propsNearSchools);
  console.log("properties:", properties);

  const { schoolId, schoolName } = useParams();
  const [showPrivate, setShowPrivate] = useState("hello");

  const togglePrivate = async (e) => {
    if (showPrivate == "hello") {
      setShowPrivate(true);
    } else {
      setShowPrivate(!showPrivate);
    }
  };

  useEffect(() => {
    console.log("hi", schoolId);
    dispatch(getPropertiesNearSchools(schoolId));
  }, [dispatch]);

  return (
    <div className="listingMapContainer">
      {schoolName && (
        <Helmet>
          <title>{schoolName}</title>
        </Helmet>
      )}
      <div className="listingMapContainer_listings">
        {!schoolName && "not working"}
        <h1>{schoolName && schoolName}</h1>
        {properties &&
          properties.map((result) => {
            if (showPrivate == "hello") {
              return <SearchResultListing listing={result} />;
            } else if (showPrivate == true) {
              return result.private ? (
                <SearchResultListing listing={result} />
              ) : null;
            } else if (showPrivate == false) {
              return !result.private ? (
                <SearchResultListing listing={result} />
              ) : null;
            }
          })}
      </div>
      <div className="listingMapContainer__googlemap">
        {properties[0] && (
          <GoogleMap
            locationObj={{
              lng: properties[0].longitude,
              lat: properties[0].latitude,
            }}
            searchResults={properties}
          />
        )}
      </div>
    </div>
  );
};

export default ListingsNearSchools;
