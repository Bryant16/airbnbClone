import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { Restore } from './store/session';

function App () {
  console.log('App?');
  const dispatch = useDispatch();

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    dispatch(Restore());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path='/users' exact authenticated={authenticated}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact authenticated={authenticated}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
