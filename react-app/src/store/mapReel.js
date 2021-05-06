const LISTINGS = 'mapReel/listings';

const PROPERTY = 'mapReel/property';

const REEL = 'mapReel/reel';

export const ShowListings = () => ({
  type: LISTINGS
});

export const ShowProperty = () => ({
  type: PROPERTY
});

export const SetReelElement = reelElement => ({
  type: REEL,
  reelElement
});

export default function reducer (
  // eslint-disable-next-line default-param-last
  state = { mode: 'listings', reelElement: null }, { type, reelElement }
) {
  switch (type) {
    case LISTINGS:
      return { ...state, mode: 'listings' };
    case PROPERTY:
      return { ...state, mode: 'property' };
    case REEL:
      return { ...state, reelElement };
    default:
      return state;
  }
}
