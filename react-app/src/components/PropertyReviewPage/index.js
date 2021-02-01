import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RadioSelector from './RadioSelector';
import Stars from '../Stars';
import './PropertyReviewPage.css';

const PropertyReviewPage = () => {
  const { propertyId } = useParams();
  const history = useHistory();
  const [cleanliness, setCleanliness] = useState(5);
  const [communication, setCommunication] = useState(5);
  const [check_in, setCheck_in] = useState(5);
  const [accuracy, setAccuracy] = useState(5);
  const [location, setLocation] = useState(5);
  const [overall_value, setOverall_value] = useState(5);
  const [review, setReview] = useState('');


  const updateReview = (e) => setReview(e.target.value);

  const handleSubmit = async (e) => {
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
    };
    const createReviewResponse = await window.fetch('/api/reviews/', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(newReview)
    });
    if (createReviewResponse.ok) {
      history.push(`/properties/${propertyId}`);
    }
  };

  return (
    <div className='reviewContainers'>
      <form className='reviewForm'>
        <div> <p>12345</p></div>
        <RadioSelector
          label='Cleanliness'
          count={5}
          checked={cleanliness}
          onChange={setCleanliness}
        />
        <RadioSelector
          label='Communication'
          count={5}
          checked={communication}
          onChange={setCommunication}
        />
        <RadioSelector
          label='Check In'
          count={5}
          checked={check_in}
          onChange={setCheck_in}
        />
        <RadioSelector
          label='Accuracy'
          count={5}
          checked={accuracy}
          onChange={setAccuracy}
        />
        <RadioSelector
          label='Location'
          count={5}
          checked={location}
          onChange={setLocation}
        />
        <RadioSelector
          label='Overall Value'
          count={5}
          checked={overall_value}
          onChange={setOverall_value}
        />
        <textarea placeholder='tell us about your experience' value={review} onChange={updateReview} />
        <button onClick={handleSubmit}>
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default PropertyReviewPage;
