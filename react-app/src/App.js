import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import UsersList from './components/UsersList';
import User from './components/User';
import { Restore } from './store/session';

function App () {
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
        <Route exact path='/users'>
          <UsersList />
        </Route>
        <Route exact path='/users/:userId'>
          <User />
        </Route>
        <Route path='/'>
          <h1>My Home Page</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
