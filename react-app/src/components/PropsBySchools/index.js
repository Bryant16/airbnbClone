import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { nanoid } from 'nanoid';

import { getPropertiesNearSchools } from '../../store/listingsBySchools';
import GoogleMap from '../GoogleMap';
import SearchResultListing from '../SearchResultListing';
import './propsBySchool.css';

const ListingsNearSchools = () => {
  const { schoolId, schoolName } = useParams();
  const dispatch = useDispatch();
  const properties = useSelector(state => state.propsNearSchools.properties);
  const center = useSelector(state => state.propsNearSchools.center);

  useEffect(() => {
    dispatch(getPropertiesNearSchools(schoolId));
  }, [dispatch, schoolId]);

  return (
    <div className='listingMapContainer'>
      {schoolName && (
        <Helmet>
          <title>{schoolName}</title>
        </Helmet>
      )}
      <div className='listingMapContainer_listings'>
        {!schoolName && 'not working'}
        <h1>{schoolName && schoolName}</h1>
        {properties &&
          properties.map((result) => (
            <SearchResultListing key={nanoid()} listing={result} />
          ))}
      </div>
      <div className='listingMapContainer__googlemap'>
        {center && (
          <GoogleMap locationObj={center} searchResults={properties} />
        )}
      </div>
    </div>
  );
};

export default ListingsNearSchools;
