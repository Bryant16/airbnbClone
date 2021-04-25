import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Modal from './components/Modal';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import NewProperty from './components/NewProperty';
import ProfilePage from './components/ProfilePage';
import LoginForm from './components/auth/LoginForm';
import LocationPage from './components/LocationPage';
import SignUpForm from './components/auth/SignUpForm';
import SchoolListings from './components/HomePage/index';
import PropertyPage from './components/propertyPage/index';
import PropertyReviewPage from './components/PropertyReviewPage';
import ListingsNearSchools from './components/PropsBySchools/index';
import { Restore } from './store/session';

export default function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Restore());
  }, [dispatch]);

  return (
    <>
      <Modal />
      <NavBar />
      <Switch>
        <Route path='/login' exact>
          <LoginForm />
        </Route>
        <Route path='/users/:userId' exact>
          <ProfilePage />
        </Route>
        <Route path='/sign-up' exact>
          <SignUpForm />
        </Route>
        <Route path='/search' exact>
          <SearchPage />
        </Route>
        <Route path='/properties/new' exact>
          <NewProperty />
        </Route>
        <Route path='/properties/:propertyId/reviews/new'>
          <PropertyReviewPage />
        </Route>
        <Route path='/properties/:propertyId'>
          <PropertyPage />
        </Route>
        <Route path='/locations/:location' exact>
          <LocationPage />
        </Route>
        <Route path='/school/:schoolId/:schoolName'>
          <ListingsNearSchools />
        </Route>
        <Route path='/' exact>
          <SchoolListings />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
