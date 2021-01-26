import React, { useEffect } from 'react';
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
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact>
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
