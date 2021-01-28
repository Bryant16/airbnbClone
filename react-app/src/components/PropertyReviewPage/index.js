import React from "react";
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import './PropertyReviewPage.css'

const PropertyReviewPage = ()=>{
const {propertyId} = useParams();
const history = useHistory();
const [cleanliness , setCleanliness ] = useState(5);
const [communication, setCommunication] = useState(5);
const [check_in, setCheck_in] = useState(5);
const [accuracy, setAccuracy] = useState(5);
const [location, setLocation] = useState(5);
const [overall_value, setOverall_value] = useState(5);
const [review, setReview] = useState('');

const updateReview = (e) => setReview(e.target.value);

const handleSubmit = async(e)=>{
    e.preventDefault();
    const newReview = {
        property_id: propertyId,
        cleanliness,
        communication,
        check_in,
        accuracy,
        location,
        overall_value,
        review
    }
    console.log(newReview)
    const createReviewResponse = await fetch('/api/reviews/', {
        headers: {"Content-type": "application/json"},
        method: "POST",
        body: JSON.stringify(newReview)
    });
    if(createReviewResponse.ok){
        const response = await createReviewResponse.json();
        history.push(`/properties/${propertyId}`)
    }
    }
    
return (
    <div className='reviewContainers'>
    <form className='reviewForm'>
        <div> <p>12345</p></div>
        <div className='inputContainer'>
            <label>Cleanliness 
            </label>
            <div>
            <input type='radio' value={1} checked={cleanliness  === '1'}onChange={e=>setCleanliness (e.target.value)} />
            <input type='radio' value={2} checked={cleanliness  === '2'}onChange={e=>setCleanliness (e.target.value)}/>
            <input type='radio' value={3} checked={cleanliness  === '3'}onChange={e=>setCleanliness (e.target.value)}/>
            <input type='radio' value={4} checked={cleanliness  === '4'}onChange={e=>setCleanliness (e.target.value)}/>
            <input type='radio' value={5} checked={cleanliness  === '5'}onChange={e=>setCleanliness (e.target.value)}/>
            </div>
        </div>
        <div className='inputContainer'>
            <label>Communication
            </label>
            <div>
            <input type='radio' value={1} checked={communication === '1'}onChange={e=>setCommunication(e.target.value)} />
            <input type='radio' value={2} checked={communication === '2'}onChange={e=>setCommunication(e.target.value)}/>
            <input type='radio' value={3} checked={communication === '3'}onChange={e=>setCommunication(e.target.value)}/>
            <input type='radio' value={4} checked={communication === '4'}onChange={e=>setCommunication(e.target.value)}/>
            <input type='radio' value={5} checked={communication === '5'}onChange={e=>setCommunication(e.target.value)}/>
            </div>
        </div>
        <div className='inputContainer'>
            <label>Check In
            </label>
            <div>
            <input type='radio' value={1} checked={check_in === '1'}onChange={e=>setCheck_in(e.target.value)} />
            <input type='radio' value={2} checked={check_in === '2'}onChange={e=>setCheck_in(e.target.value)}/>
            <input type='radio' value={3} checked={check_in === '3'}onChange={e=>setCheck_in(e.target.value)}/>
            <input type='radio' value={4} checked={check_in === '4'}onChange={e=>setCheck_in(e.target.value)}/>
            <input type='radio' value={5} checked={check_in === '5'}onChange={e=>setCheck_in(e.target.value)}/>
            </div>
        </div>
        <div className='inputContainer'>
            <label>Accuracy
            </label>
            <div>
            <input type='radio' value={1} checked={accuracy === '1'}onChange={e=>setAccuracy(e.target.value)} />
            <input type='radio' value={2} checked={accuracy === '2'}onChange={e=>setAccuracy(e.target.value)}/>
            <input type='radio' value={3} checked={accuracy === '3'}onChange={e=>setAccuracy(e.target.value)}/>
            <input type='radio' value={4} checked={accuracy === '4'}onChange={e=>setAccuracy(e.target.value)}/>
            <input type='radio' value={5} checked={accuracy === '5'}onChange={e=>setAccuracy(e.target.value)}/>
            </div>
        </div>
        <div className='inputContainer'>
            <label>location
            </label>
            <div>
            <input type='radio' value={1} checked={location === '1'}onChange={e=>setLocation(e.target.value)} />
            <input type='radio' value={2} checked={location === '2'}onChange={e=>setLocation(e.target.value)}/>
            <input type='radio' value={3} checked={location === '3'}onChange={e=>setLocation(e.target.value)}/>
            <input type='radio' value={4} checked={location === '4'}onChange={e=>setLocation(e.target.value)}/>
            <input type='radio' value={5} checked={location === '5'}onChange={e=>setLocation(e.target.value)}/>
            </div>
        </div>
        <div className='inputContainer'>
            <label>Overall Value
            </label>
            <div>
            <input type='radio' value={1} checked={overall_value === '1'}onChange={e=>setOverall_value(e.target.value)} />
            <input type='radio' value={2} checked={overall_value === '2'}onChange={e=>setOverall_value(e.target.value)}/>
            <input type='radio' value={3} checked={overall_value === '3'}onChange={e=>setOverall_value(e.target.value)}/>
            <input type='radio' value={4} checked={overall_value === '4'}onChange={e=>setOverall_value(e.target.value)}/>
            <input type='radio' value={5} checked={overall_value === '5'}onChange={e=>setOverall_value(e.target.value)}/>
            </div>
        </div>
    <textarea placeholder='tell us about your experience' value={review} onChange={updateReview}/>
    <button onClick={handleSubmit}>Submit Review</button>
    </form>
   </div>
)
};

export default PropertyReviewPage;