import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPage } from '../../store/propertyPage';
import Reservation from '../Reservation';
import ReviewDisplay from '../ReviewDisplay';
import Stars from '../Stars';

import './propertyPage.css';

export default function PropertyPage () {
  const dispatch = useDispatch();
  const { propertyId } = useParams();
  const details = useSelector(state => state.property.details);
  const [rev, setRev] = useState([]);
  const [numReviews, setNumReviews] = useState(5);

  useEffect(() => {
    const getReviews = async () => {
      const response = await window.fetch(`/api/reviews/${propertyId}`);
      const reviews = await response.json();
      setRev(reviews);
    };
    getReviews();
    dispatch(getPage(propertyId));
  }, [dispatch, propertyId]);

  const handleExpandReview = () => numReviews > 5
    ? setNumReviews(5)
    : setNumReviews(rev.length);

  return details && (
    <div className='singleproperty_container'>
      <div className='singleproperty_container_address'>
        <h1>{`${details.listing_title}`}</h1>
        <p>{`${details.address1}, ${details.city}`}</p>
      </div>
      <div className='pic_reservation_container'>
        <img src={details.coverphoto_url} alt='coverPhoto' />
        <div className='singleproperty_container_reservation'>
          <Reservation property={details} />
        </div>
      </div>
      <div className='detailReservationContainer'>
        <div className='singleproperty_container_propertyInfo' />
      </div>

      {details.rating && (
        <div className='singleproperty_container_review_container'>
          <div className='stars_reviews'>
            <Stars rating={details.rating.average} /><p>{` (Reviews ${rev.length}) `}</p>
          </div>
          <div className='review_categories'>
            <div>
              <p>Cleanliness </p>
              <span className='bar'><span style={{ width: `${details.rating.cleanliness / 5 * 100}%` }} className='bar_progress' /></span>
              <span>{details.rating.cleanliness}</span>
            </div>
            <div>
              <p>Check-in</p>
              <span className='bar'><span style={{ width: `${details.rating.check_in / 5 * 100}%` }} className='bar_progress' /></span>
              <span>{details.rating.check_in}</span>
            </div>
            <div>
              <p>Accuracy</p>
              <span className='bar'><span style={{ width: `${details.rating.accuracy / 5 * 100}%` }} className='bar_progress' /></span>
              <span>{details.rating.accuracy}</span>
            </div>
            <div>
              <p>Location</p>
              <span className='bar'><span style={{ width: `${details.rating.location / 5 * 100}%` }} className='bar_progress' /></span>
              <span>{details.rating.location}</span>
            </div>
            <div>
              <p>Value</p>
              <span className='bar'><span style={{ width: `${details.rating.overall_value / 5 * 100}%` }} className='bar_progress' /></span>
              <span>{details.rating.overall_value}</span>
            </div>
            <div>
              <p>Communication</p>
              <span className='bar'><span style={{ width: `${details.rating.communication / 5 * 100}%` }} className='bar_progress' /></span>
              <span>{details.rating.communication}</span>
            </div>
          </div>
          <div className='review_text'>
            {rev.length && rev.slice(0, numReviews).map(r => <ReviewDisplay key={r.id} review={r} />)}
            {rev.length && rev.length > 5
              ? (
                <button
                  id='show_more_button'
                  onClick={handleExpandReview}
                >
                  {numReviews < rev.length
                    ? `Show All ${rev.length} Reviews`
                    : 'show less'}
                </button>
                )
              : null}
          </div>
        </div>
      )}
    </div>
  );
}
