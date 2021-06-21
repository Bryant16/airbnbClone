import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import MapReel from '../MapReel';
import { SetMapCenter } from '../../store/mapReel';
import { GetBooked, getPage, getReviews } from '../../store/propertyPage';
import { DisableEmptySearch, EnableEmptySearch, getPropertiesNearSchools } from '../../store/search';

import './search_page.css';

export default function SearchPage () {
  const dispatch = useDispatch();
  const { propertyId, schoolId, schoolName } = useParams();

  const user = useSelector(state => state.session.user);
  const loaded = useSelector(state => state.search.loaded);
  const center = useSelector(state => state.search.center);
  const emptyEnabled = useSelector(state => state.search.emptyEnabled);
  const searchResults = useSelector(state => state.search.properties);

  useEffect(() => {
    schoolId && dispatch(getPropertiesNearSchools(schoolId));
  }, [dispatch, schoolId]);

  useEffect(() => {
    if (center) dispatch(SetMapCenter(center));
  }, [dispatch, center]);

  useEffect(() => {
    if (propertyId && !loaded) dispatch(EnableEmptySearch());
    return () => dispatch(DisableEmptySearch());
  }, [dispatch, propertyId, loaded]);

  useEffect(() => {
    if (propertyId) {
      dispatch(getPage(propertyId));
      dispatch(getReviews(propertyId));
      user && dispatch(GetBooked(propertyId));
    }
  }, [dispatch, user, propertyId]);

  return (
    <>
      {schoolName && (
        <Helmet>
          <title>{schoolName}</title>
        </Helmet>
      )}
      <div className='div__container'>
        {!emptyEnabled && !loaded && 'Searching...'}
        {((searchResults && center) || (emptyEnabled)) && (
          <MapReel
            listings={searchResults}
          />
        )}
      </div>
    </>
  );
}
