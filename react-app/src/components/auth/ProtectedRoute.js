import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const user = useSelector(state => state.user);
  return (
    <Route>
      {user ? children : <Redirect to='/login' />}
    </Route>
  );
};

export default ProtectedRoute;
