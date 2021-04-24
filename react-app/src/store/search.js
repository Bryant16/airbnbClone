const SEARCHRESULTS = 'search/SEARCHRESULTS';
const FOCUSID = 'search/FOCUSID';

const setSearchProperties = properties => ({
  type: SEARCHRESULTS,
  properties
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
  const properties = await res.json();
  dispatch(setSearchProperties(properties));
};

export const focusListing = idNumber => async dispatch => {
  dispatch(setFocusId(idNumber));
};

export default function searchReducer (
  // eslint-disable-next-line default-param-last
  state = { properties: null, searchLocation: null, focusId: null },
  { type, properties, focusId }
) {
  switch (type) {
    case SEARCHRESULTS: {
      return {
        ...state,
        properties: properties[0],
        lng: properties[1],
        lat: properties[2]
      };
    }
    case FOCUSID: {
      return { ...state, focusId };
    }
    default:
      return state;
  }
}
