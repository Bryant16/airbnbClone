import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { LookUp } from '../../store/profilePage';
import PropertyReel from '../PropertyReel';
import ReservationReel from '../ReservationReel';

import './index.css';

export default function ProfilePage () {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profileUser = useSelector(state => state.profile.user);
  const loggedInUser = useSelector(state => state.session.user);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(LookUp(userId))
      .then(() => {
        loggedInUser && setLoaded(true);
        loggedInUser || setLoaded(false);
      });
  }, [dispatch, userId, loggedInUser]);

  return loaded
    ? profileUser
        ? (
          <div className='user-profile-container'>
            <div className='personal-items-container'>
              <div className='property-reel-and-title-container'>
                <PropertyReel
                  isOwner={loggedInUser && (profileUser.id === loggedInUser.id)}
                  profileUser={profileUser}
                />
              </div>
              {(profileUser.id === loggedInUser.id)
                ? <ReservationReel />
                : null}
            </div>
          </div>
          )
        : <h1>Sorry, it seems that page doesn't exist.</h1>
    : <h1>Loading...</h1>;
}
