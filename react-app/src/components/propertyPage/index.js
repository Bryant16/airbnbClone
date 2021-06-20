import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Reservation from '../Reservation';
import ReviewDisplay from '../ReviewDisplay';
import Stars from '../Stars';
import RatingBar from './RatingBar';
import { SetMapCenter } from '../../store/mapReel';

import './propertyPage.css';

const categories = ['Accuracy', 'Check-in', 'Cleanliness', 'Communication', 'Location', 'Value'];

export default function PropertyPage () {
  const dispatch = useDispatch();

  const details = useSelector(state => state.property.details);
  const reviews = useSelector(state => state.property.reviews);
  const center = useSelector(state => state.search.center);

  const [numReviews, setNumReviews] = useState(5);

  const handleExpandReview = () => numReviews > 5
    ? setNumReviews(5)
    : setNumReviews(reviews.length);

  useEffect(() => {
    if (details) {
      if (!center || !Object.deepEq(center, { lng: details.longitude, lat: details.latitude })) {
        dispatch(SetMapCenter({ lng: details.longitude, lat: details.latitude }));
      }
    }
  }, [dispatch, details, center]);

  return (details && (
    <>
      <div className='singleproperty_container_address'>
        <h1>{`${details.listing_title}`}</h1>
        <p>{`${details.address1}, ${details.city}`}</p>
      </div>
      <div className='pic_reservation_container'>
        <img id='property-page-image' src={details.coverphoto_url} alt='coverPhoto' />
        <div className='singleproperty_container_reservation'>
          <Reservation />
        </div>
      </div>
      <div className='detailReservationContainer'>
        <div className='singleproperty_container_propertyInfo' />
      </div>
      {details.rating && (
        <div className='singleproperty_container_review_container'>
          <div className='stars_reviews'>
            <Stars rating={details.rating.average} /><p>{` (Reviews ${reviews.length}) `}</p>
          </div>
          <div className='review_categories'>
            {Object.entries(details.rating)
              .filter(r => r[0] !== 'average')
              .map((r, idx) => <RatingBar key={idx} title={categories[idx]} rating={r[1]} />)}
          </div>
          <div className='review_text'>
            {reviews.length
              ? reviews.slice(0, numReviews).map(r => <ReviewDisplay key={r.id} review={r} />)
              : null}
            {(reviews.length && reviews.length > 5)
              ? (
                <button
                  id='show_more_button'
                  onClick={handleExpandReview}
                >
                  {numReviews < reviews.length
                    ? `Show All ${reviews.length} Reviews`
                    : 'show less'}
                </button>
                )
              : null}
          </div>
        </div>
      )}
    </>
  )) || <h1>Loading...</h1>;
}
