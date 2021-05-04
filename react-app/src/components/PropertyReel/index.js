import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PopulateProperties } from '../../store/reel';
import PropertySummary from './PropertySummary';

import './index.css';

export default function PropertyReel ({ isOwner, profileUser, placeName }) {
  const dispatch = useDispatch();
  const list = useSelector(state => state.reel.propertyList);
  const location = useLocation();
  const whereAmI = location.pathname;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(PopulateProperties(whereAmI))
      .then(() => setLoaded(true));
  }, [dispatch, whereAmI]);

  return loaded
    ? list
        ? (
          <div className='reel-container'>
            <div className='reel-title-container'>
              <h1>{!placeName
                ? `${isOwner
                  ? 'Your'
                  : `${profileUser.username}'s`} listings:`
                : `Crash pads near ${placeName}`}
              </h1>
              {isOwner
                ? (
                  <Link
                    to='/properties/new'
                    className='new-listing-button'
                  >
                    <button>
                      Create a New Listing
                    </button>
                  </Link>
                  )
                : null}
            </div>
            {list.map(prop => <PropertySummary key={prop.id} property={prop} />)}
          </div>
          )
        : null
    : <h1>Loading...</h1>;
}
