import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PopulateProperties } from '../../store/reel';
import PropertySummary from './PropertySummary';

import './index.css';

export default function PropertyReel ({ isOwner, profileUser }) {
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
              <Link to='/properties/new'>
                <button>
                  Create a New Listing
                </button>
              </Link>
              <h1>{`${isOwner ? 'Your' : profileUser.username + 's'} listings:`}
              </h1>
            </div>
            {list.map(prop => <PropertySummary key={prop.id} property={prop} />)}
          </div>
          )
        : null
    : <h1>Loading...</h1>;
}
