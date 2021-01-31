import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPage } from '../../store/propertyPage';
import Reservation from '../Reservation';
import ReviewDisplay from '../ReviewDisplay';
import Stars from '../Stars'
import './propertyPage.css';

const PropertyPage = () => {
  const dispatch = useDispatch();
  const { propertyId } = useParams();
  const { property } = useSelector((state) => state.property);
  const [rev, setRev] = useState(false);
  const [numReviews, setNumReviews] = useState(5)

  // propertyReviews.map(rev=> console.log(rev))
  useEffect(() => {
    const getReviews = async () => {
      const response = await window.fetch(`/api/reviews/${propertyId}`);
      const reviews = await response.json();
      setRev(reviews);
    };
    getReviews();
    dispatch(getPage(propertyId));
  }, [dispatch, propertyId]);
  const handleExpandReview= (e)=>{
    e.preventDefault()
    let num = rev.length
    if(numReviews >= 6){
      setNumReviews(5)
    }else{
      setNumReviews(num)
    }
  }
  
  return (
    <div className='singleproperty_container'>
      <div className='singleproperty_container_address'>
        <h1>{`${property.listing_title}`}</h1>
        <p>{`${property.address1}, ${property.city}`}</p>
      </div>
      <div className='pic_reservation_container'>
      <img src={property.coverphoto_url} alt='coverPhoto' />
      <div className='singleproperty_container_reservation'>
          <Reservation property={property} />
        </div>
      </div>
      <div className='detailReservationContainer'>
        <div className='singleproperty_container_propertyInfo'>
        </div>
      </div>
        
      {property.rating && (
        <div className='singleproperty_container_review_container'>
          <div className='stars_reviews'>
          <Stars rating={property.rating.average}></Stars><p>{` (Reviews ${rev.length}) `}</p>
          </div>
          <div className='review_categories'>
            <div>
            <p>Cleanliness </p>
            <span className='bar'><span style={{ width: `${property.rating.cleanliness / 5 * 100}%` }} className='bar_progress' /></span>
            <span>{property.rating.cleanliness}</span>
            </div>
            <div>
            <p>Check-in</p>
            <span className='bar'><span style={{ width: `${property.rating.check_in / 5 * 100}%` }} className='bar_progress' /></span>
            <span>{property.rating.check_in}</span>
            </div>
            <div>
            <p>Accuracy</p>
            <span className='bar'><span style={{ width: `${property.rating.accuracy / 5 * 100}%` }} className='bar_progress' /></span>
            <span>{property.rating.accuracy}</span>
            </div>
            <div>
            <p>Location</p>
            <span className='bar'><span style={{ width: `${property.rating.location / 5 * 100}%` }} className='bar_progress' /></span>
            <span>{property.rating.location}</span>
            </div>
            <div>
            <p>Value</p>
            <span className='bar'><span style={{ width: `${property.rating.overall_value / 5 * 100}%` }} className='bar_progress' /></span>
            <span>{property.rating.overall_value}</span>
            </div>
            <div>
            <p>Communication</p>
            <span className='bar'><span style={{ width: `${property.rating.communication / 5 * 100}%` }} className='bar_progress' /></span>
            <span>{property.rating.communication}</span>
            </div>
          </div>
          <div className='review_text'>
          {rev && rev.slice(0,numReviews).map(r => <ReviewDisplay key={r.id} review={r} />)}
          {rev && rev.length>5 && <button id='show_more_button' onClick={handleExpandReview}>{numReviews===5 ? `Show All ${rev.length} Reviews`: 'show less'}</button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyPage;
