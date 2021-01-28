import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Populate } from '../../store/reel';
import PropertySummary from './PropertySummary';

import './index.css';

export default function PropertyReel () {
  const dispatch = useDispatch();
  const list = useSelector(state => state.reel.list);
  const location = useLocation();
  const whereAmI = location.pathname;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(Populate(whereAmI))
      .then(() => setLoaded(true));
  }, [dispatch, whereAmI]);

  return loaded
    ? list
        ? (
          <div className='property-reel-container'>
            {list.map(prop => <PropertySummary key={prop.id} property={prop} />)}
          </div>
          )
        : null
    : <h1>Loading...</h1>;
}
