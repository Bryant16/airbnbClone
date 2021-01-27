import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { LookUp } from '../../store/profilePage';

export default function ProfilePage () {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.session.user);
  const profileUser = useSelector(state => state.profile.user);

  useEffect(() => {
    dispatch(LookUp(userId));
  }, [dispatch, userId]);

  return (
    <div>
      <h1>{profileUser ? profileUser.username : null}</h1>
      {
        profileUser
        ? profileUser.properties.map(prop => {
        })
        : null
      }
    </div>
  );
}
