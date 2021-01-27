import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { LookUp } from '../../store/profilePage';
import PropertyReel from '../PropertyReel';

import './index.css';

export default function ProfilePage () {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profileUser = useSelector(state => state.profile.user);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(LookUp(userId))
      .then(() => setLoaded(true));
  }, [dispatch, userId]);

  return loaded
    ? profileUser
        ? (
          <div className='user-profile-container'>
            <div className='user-profile-title-container'>
              <h1>{profileUser ? `${profileUser.username}'s listings:` : null}</h1>
            </div>
            <PropertyReel />
          </div>
          )
        : <h1>Sorry, it seems that page doesn't exist.</h1>
    : <h1>Loading...</h1>;
}
