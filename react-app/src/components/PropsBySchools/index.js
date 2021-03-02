import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { nanoid } from "nanoid";

import { getPropertiesNearSchools } from "../../store/listingsBySchools";
import GoogleMap from "../GoogleMap";
import SearchResultListing from "../SearchResultListing";
import "./propsBySchool.css";

const ListingsNearSchools = () => {
  const { schoolId, schoolName } = useParams();
  const [schoolCenter, setSchoolCenter] = useState({});
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.propsNearSchools);

  useEffect(() => {
    dispatch(getPropertiesNearSchools(schoolId));
  }, [dispatch, schoolId]);

  useEffect(() => {
    if (properties[0])
      setSchoolCenter({
        lat: properties[0].latitude,
        lng: properties[0].longitude,
      });
  }, [properties]);

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
          properties.map((result) => (
            <SearchResultListing key={nanoid()} listing={result} />
          ))}
      </div>
      <div className="listingMapContainer__googlemap">
        {properties[0] && schoolCenter && (
          <GoogleMap locationObj={schoolCenter} searchResults={properties} />
        )}
      </div>
    </div>
  );
};

export default ListingsNearSchools;
