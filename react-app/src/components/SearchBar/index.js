import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../store/search";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const SearchBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchLocation, setSearchLocation] = useState("");
  const [showDates, setShowDates] = useState(false);
  const [guestNumber, setGuestNumber] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();

const selectionRange = {
  startDate: startDate,
  endDate: endDate,
  key: "selection",
};
function handleSelect(ranges){
  setStartDate(ranges.selection.startDate);
  setEndDate(ranges.selection.endDate);
}
  const handleLocation = async (e) => {
    setSearchLocation(e.target.value);
  };

  const handleGuests = async (e) => {
    setGuestNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(startDate, endDate)
    dispatch(search({ searchLocation, guestNumber }));
    history.push("/search");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>location</label>
      <input type="text" onChange={handleLocation}></input>
      <label>number of guests</label>
      <input type="number" onChange={handleGuests}></input>
      <button onClick={()=> setShowDates(!showDates)}>dates</button>
      <button>submit</button>
      {showDates && <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>}
    </form>
  );
};

export default SearchBar;
