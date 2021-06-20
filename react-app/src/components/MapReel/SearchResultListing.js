import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Stars from '../Stars';
import { SetMapCenter } from '../../store/mapReel';
import { setFocusId } from '../../store/search';

const SearchResultListing = ({ listing }) => {
  const dispatch = useDispatch();

  const focusId = useSelector(state => state.search.focusId);
  const reelElement = useSelector(state => state.mapReel.reelElement);

  const listingClick = () => {
    const listingCoords = { lng: listing.longitude, lat: listing.latitude };
    dispatch(SetMapCenter(listingCoords));
    dispatch(setFocusId(listing.id));
    let { offsetTop: top } = document.getElementById(`listing_${listing.id}`);
    top -= 145;
    reelElement.scrollTo({ top, behavior: 'smooth' });
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
        <Link
          className='listing-details'
          to={`/properties/${listing.id}`}
        >
          {'Details >'}
        </Link>
      </div>
    </div>
  );
};

export default SearchResultListing;
