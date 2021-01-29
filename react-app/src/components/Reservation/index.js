import React, {useState} from "react";
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange  } from "react-date-range";
import './Reservation.css';
import { Redirect } from "react-router-dom";
const Reservation = ({ property }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numGuest, setNumGuest] = useState(1);
  const numNights = ((Math.abs(endDate-startDate)) / (1000 * 60 * 60 * 24));
  const {user} =  useSelector((state) => state.session);
  const history = useHistory();
  const handleSelect= (ranges)=> {
    if(!user){
        history.push('/login')
    }else{

        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  console.log(user)
  const handleSubmit = async (e)=>{
      e.preventDefault();
      if(!user){
          history.push('/login')
      }else{
        const newReservation = {
            startDate: startDate,
            endDate: endDate,
            property: property.id,
            numGuest: numGuest,
            user: user.id
          }
          console.log(newReservation)
          try{
          const createReservation = await fetch('/api/reservation/', {
              method:'post',
              headers: {
                  "Content-type":"application/json"
              },
              body: JSON.stringify(newReservation)
          });
          const data = await createReservation.json();
         
        }catch(e){
            console.log(e)
        }
          history.push('/users/me')
          // alert(`Your Reservation for ${numGuest}, on ${startDate} until ${endDate} was created`)
      }
    }
  return (
    <div>
      <form>
        <label>{`$ ${property.nightly_rate_usd} / night`}</label>
        <DateRange  ranges={[selectionRange]} onChange={handleSelect} />
        <label>Number of Guests</label>
        <input type='integer' onChange={(e)=> setNumGuest(e.target.value)}></input>
        {numNights != 0 && <label>Price Per Night: ${numNights*property.nightly_rate_usd}</label>}
        <button onClick={handleSubmit}>Reserve Now</button>
      </form>
    </div>
  );
};

export default Reservation;
