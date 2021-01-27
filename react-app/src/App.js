import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import User from "./components/User";
import SearchPage from "./components/SearchPage";
import { Restore } from "./store/session";

function App() {
  console.log("App?");
  const dispatch = useDispatch();

  const [authenticated, setAuthenticated] = useState(false);

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
          <User />
        </Route>

        <Route path="/sign-up" exact>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/search" exact>
          <SearchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
