import { useSelector } from 'react-redux';
import MapReel from '../MapReel';

import './search_page.css';

export default function SearchPage () {
  const searchResults = useSelector(state => state.search.properties);
  const searchLocation = useSelector(state => state.search.center);

  return (
    <div className='div__container'>
      {!searchResults && 'Searching...'}
      {searchResults && searchLocation && (
        <MapReel
          center={searchLocation}
          listings={searchResults}
        />
      )}
    </div>
  );
}
