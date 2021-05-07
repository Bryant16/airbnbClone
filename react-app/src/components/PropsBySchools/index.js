import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import MapReel from '../MapReel';
import { getPropertiesNearSchools } from '../../store/mapReel';

import './propsBySchool.css';

const ListingsNearSchools = () => {
  const { schoolId, schoolName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPropertiesNearSchools(schoolId));
  }, [dispatch, schoolId]);

  return (
    <>
      {schoolName && (
        <Helmet>
          <title>{schoolName}</title>
        </Helmet>
      )}
      <MapReel />
    </>
  );
};

export default ListingsNearSchools;
