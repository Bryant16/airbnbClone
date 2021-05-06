const LISTINGS = 'mapReel/listings';

const PROPERTY = 'mapReel/property';

const REEL = 'mapReel/reel';

const CENTER = 'mapReel/center';

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

export const SetMapCenter = mapCenter => ({
  type: CENTER,
  mapCenter
});

export default function reducer (
  // eslint-disable-next-line default-param-last
  state = { mode: 'listings', reelElement: null, mapCenter: null },
  { type, reelElement, mapCenter }
) {
  switch (type) {
    case LISTINGS:
      return { ...state, mode: 'listings' };
    case PROPERTY:
      return { ...state, mode: 'property' };
    case REEL:
      return { ...state, reelElement };
    case CENTER:
      return { ...state, mapCenter };
    default:
      return state;
  }
}
