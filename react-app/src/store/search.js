const SEARCHRESULTS = 'search/SEARCHRESULTS';
const FOCUSID = 'search/FOCUSID';

const setSearch = (properties, lng, lat) => ({
  type: SEARCHRESULTS,
  properties,
  lng,
  lat
});

const setFocusId = focusId => ({ type: FOCUSID, focusId });

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
  const { properties, lng, lat } = await res.json();
  dispatch(setSearch(properties, lng, lat));
};

export const focusListing = idNumber => async dispatch => {
  dispatch(setFocusId(idNumber));
};

export default function searchReducer (
// eslint-disable-next-line default-param-last
  state = { properties: null, location: null, focusId: null },
  { type, properties, lng, lat, focusId }
) {
  switch (type) {
    case SEARCHRESULTS: {
      return {
        ...state,
        properties,
        location: { lng, lat }
      };
    }
    case FOCUSID: {
      return { ...state, focusId };
    }
    default:
      return state;
  }
}
