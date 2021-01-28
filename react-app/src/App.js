import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import ProfilePage from "./components/ProfilePage";
import SearchPage from "./components/SearchPage";
import PropertyPage from "./components/propertyPage/index";
import LocationPage from "./components/LocationPage";
import { Restore } from "./store/session";
import SchoolListings from "./components/HomePage/index";
import ListingsNearSchools from "./components/PropsBySchools/index";

function App() {
  // console.log("App?");
  const dispatch = useDispatch();

  // const searchResults = useSelector((state) => {
  //   return state.search.properties;
  // });

  // const [listingResults, setListingResults] = useState();

  useEffect(() => {
    // if (searchResults) {
    //   setListingResults(searchResults);
    //   dispatch()
    // }
    dispatch(Restore());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact>
          <SignUpForm />
        </Route>
        <Route exact path="/users">
          <UsersList />
        </Route>
        <Route exact path="/users/:userId">
          <ProfilePage />
        </Route>
        <Route path="/sign-up" exact>
          <SignUpForm />
        </Route>
        <Route path="/search" exact>
          <SearchPage />
        </Route>
        <Route path="/properties/:propertyId">
          <PropertyPage />
        </Route>
        <Route exact path="/locations/:location">
          <LocationPage />
        </Route>
        <Route path="/" exact>
          <SchoolListings />
        </Route>
        <Route path="/school/:schoolId/:schoolName">
          <ListingsNearSchools />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
