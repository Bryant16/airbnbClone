import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MapReel from '../MapReel';
import { SetMapCenter } from '../../store/mapReel';

import './search_page.css';

export default function SearchPage () {
  const dispatch = useDispatch();
  const searchResults = useSelector(state => state.search.properties);
  const center = useSelector(state => state.search.center);

  useEffect(() => {
    if (center) dispatch(SetMapCenter(center));
  }, [dispatch, center]);

  return (
    <div className='div__container'>
      {!searchResults && 'Searching...'}
      {searchResults && center && (
        <MapReel
          listings={searchResults}
        />
      )}
    </div>
  );
}
