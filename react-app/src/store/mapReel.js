const LISTINGS = 'mapReel/listings';

const PROPERTY = 'mapReel/property';

const REEL = 'mapReel/reel';

const CENTER = 'mapReel/center';

const ENUMERATE = 'mapReel/enumerate';

const UNLOAD = 'mapReel/unload';

const FOCUSID = 'mapReel/FOCUSID';

const LOCATION = 'mapReel/LOCATION';

const SetSearchLocation = searchLocation => ({
  type: LOCATION,
  searchLocation
});

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

export const EnumerateMapReel = listings => ({
  type: ENUMERATE,
  listings
});

export const UnloadMapReel = () => ({
  type: UNLOAD
});

export const setFocusId = focusId => ({
  type: FOCUSID,
  focusId
});

export const getPropertiesNearSchools = id => async dispatch => {
  const res = await window.fetch(`/api/schools/${id}`);
  if (res.ok) {
    const { center, properties } = await res.json();
    dispatch(EnumerateMapReel(properties));
    dispatch(SetMapCenter(center));
  }
};

export const search = ({ searchLocation, guestNumber, startDate, endDate }) => async dispatch => {
  const res = await window.fetch(
  `/api/search/?location=${
    searchLocation
  }&&guests=${
    guestNumber
  }&&start_date=${
    startDate
  }&&end_date=${
    endDate
  }`
  );
  const { properties, center } = await res.json();
  dispatch(EnumerateMapReel(properties));
  dispatch(SetMapCenter(center));
  dispatch(SetSearchLocation(searchLocation));
};

const initialState = {
  mode: 'listings',
  reelElement: null,
  mapCenter: null,
  listings: null,
  searchLocation: null
};

export default function reducer (
  // eslint-disable-next-line default-param-last
  state = initialState,
  { type, reelElement, mapCenter, listings, searchLocation, focusId }
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
    case ENUMERATE:
      return { ...state, listings };
    case LOCATION:
      return { ...state, searchLocation };
    case FOCUSID:
      return { ...state, focusId };
    case UNLOAD:
      return { ...initialState, reelElement: state.reelElement };
    default:
      return state;
  }
}
