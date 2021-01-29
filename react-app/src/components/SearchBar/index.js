import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../store/search";
import "./react_date_range.css";
import { DateRangePicker } from "react-date-range";
import "./search_bar.css";
import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet";

const SearchBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchLocation, setSearchLocation] = useState("");
  const [showDates, setShowDates] = useState(false);
  const [guestNumber, setGuestNumber] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();

  // HANDLE CASING OF QUERIES
  useEffect(() => {
    if (searchLocation.length > 1 && !searchLocation.includes(" ")) {
      const locationCasing =
        searchLocation[0].toUpperCase() + searchLocation.slice(1);
      return setSearchLocation(locationCasing);
    }
    if (searchLocation.includes(" ")) {
      const locationCasing = searchLocation
        .split(" ")
        .map((word) => {
          try {
            return word[0].toUpperCase() + word.slice(1);
          } catch {
            return word;
          }
        })
        .join(" ");
      setSearchLocation(locationCasing);
    }
  }, [searchLocation]);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const handleDateButton = (e) => {
    e.preventDefault();
    setShowDates(!showDates);
  };
  const handleLocation = async (e) => {
    setSearchLocation(e.target.value);
  };

  const handleGuests = async (e) => {
    setGuestNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(startDate, endDate);
    dispatch(search({ searchLocation, guestNumber, startDate, endDate }));

    history.push(`/search`);
  };

  return (
    <>
      <Helmet>
        <title>{searchLocation}</title>
      </Helmet>
      <div id="div__search_bar">
        <form onSubmit={handleSubmit}>
          <div className="div__search_section">
            <label>Location</label>
            <br />
            <input
              type="text"
              className="navbar_search_searchbar"
              value={searchLocation}
              onChange={handleLocation}
              placeholder="Where are you going?"
            ></input>
          </div>
          <div className="div__search_section">
            <label>Dates</label>
            <br />
            <button onClick={handleDateButton}>Add Dates</button>
          </div>
          <div className="div__search_section">
            <label>Guests</label>
            <br />
            <input type="number" min="1" onChange={handleGuests}></input>
          </div>
          <div className="div__search_section">
            <button>
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
      {showDates && (
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      )}
    </>
  );
};

export default SearchBar;
