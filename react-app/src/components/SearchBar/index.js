import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../store/search";

const SearchBar = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLocation = async (e) => {
    setSearchLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(search(searchLocation));
    history.push("/search");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>location</label>
      <input type="text" onChange={handleLocation}></input>
      <button>submit</button>
    </form>
  );
};

export default SearchBar;
