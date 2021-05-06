import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Modal from './components/Modal';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import NewProperty from './components/NewProperty';
import ProfilePage from './components/ProfilePage';
import LocationPage from './components/LocationPage';
import SchoolListings from './components/HomePage/index';
import EditReservation from './components/EditReservation';
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
        <Route path='/users/:userId' exact>
          <ProfilePage />
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
        <Route path='/locations/:location' exact>
          <LocationPage />
        </Route>
        <Route path='/school/:schoolId/:schoolName'>
          <ListingsNearSchools />
        </Route>
        <Route path='/reservations/:propertyId/:dateRange/edit' exact>
          <EditReservation />
        </Route>
        <Route path='/' exact>
          <SchoolListings />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
