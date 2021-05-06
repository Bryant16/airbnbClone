import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import MapReel from '../MapReel';
import { SetMapCenter } from '../../store/mapReel';
import { getPropertiesNearSchools } from '../../store/listingsBySchools';

import './propsBySchool.css';

const ListingsNearSchools = () => {
  const { schoolId, schoolName } = useParams();
  const dispatch = useDispatch();
  const properties = useSelector(state => state.propsNearSchools.properties);
  const center = useSelector(state => state.propsNearSchools.center);

  useEffect(() => {
    dispatch(getPropertiesNearSchools(schoolId));
  }, [dispatch, schoolId]);

  useEffect(() => {
    if (center) dispatch(SetMapCenter(center));
  }, [dispatch, center]);

  return (
    <>
      {schoolName && (
        <Helmet>
          <title>{schoolName}</title>
        </Helmet>
      )}
      {properties && center && (
        <MapReel
          listings={properties}
        />
      )}
    </>
  );
};

export default ListingsNearSchools;
