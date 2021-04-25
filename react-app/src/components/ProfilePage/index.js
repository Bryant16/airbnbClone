import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
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
  const profileLoaded = useSelector(state => state.profile.loaded);
  const sessionLoaded = useSelector(state => state.session.loaded);

  useEffect(() => {
    dispatch(LookUp(userId));
  }, [dispatch, userId]);

  if (
    sessionLoaded && !loggedInUser && userId === 'me'
  ) return <Redirect to='/' />;

  return (profileLoaded && sessionLoaded)
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
              {(loggedInUser && (profileUser.id === loggedInUser.id))
                ? <ReservationReel />
                : null}
            </div>
          </div>
          )
        : <h1>Sorry, it seems that page doesn't exist.</h1>
    : <h1>Loading...</h1>;
}
