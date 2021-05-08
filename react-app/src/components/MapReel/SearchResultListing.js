import { useDispatch, useSelector } from 'react-redux';

import Stars from '../Stars';
import { SetMapCenter, setFocusId } from '../../store/mapReel';
import { getPage, getReviews, GetBooked } from '../../store/propertyPage';
import { useQuerySelector } from '../../utils/hooks';

const SearchResultListing = ({ listing }) => {
  const dispatch = useDispatch();

  const focusId = useSelector(state => state.mapReel.focusId);
  const reelElement = useSelector(state => state.mapReel.reelElement);

  const listingClick = () => {
    const listingCoords = { lng: listing.longitude, lat: listing.latitude };
    dispatch(SetMapCenter(listingCoords));
    dispatch(setFocusId(listing.id));
    const { offsetTop: top } = useQuerySelector(`#listing_${listing.id}`);
    reelElement.scrollTo({ top, behavior: 'smooth' });
    dispatch(getPage(listing.id));
    dispatch(getReviews(listing.id));
    dispatch(GetBooked(listing.id));
  };

  return (
    <div
      onClick={listingClick}
      id={`listing_${listing.id}`}
      className={`div__listings_property ${
          focusId === listing.id ? 'div__listing-active' : null
        }`}
    >
      <div className='div__coverphoto'>
        <img
          className='img__listing_coverphoto'
          src={listing.coverphoto_url}
          alt=''
        />
      </div>
      <div className='div__listings_info'>
        <div className='div__description'>
          <h2>{listing.listing_title}</h2>
          <hr />
          <span className='span__details'>
            {listing.guest_spots} guests ·
            {listing.private
              ? ' Entire place'
              : ' Private room in shared space'}
          </span>
          <span className='span__details'>
            {' · '}
            <Stars rating={listing.rating.overall_value} />
          </span>
        </div>
        <br />
        <div className='div__nightly_rate'>
          <span className='span__night_rate-bold'>
            ${listing.nightly_rate_usd}{' '}
          </span>
          / night
        </div>
      </div>
    </div>
  );
};

export default SearchResultListing;
