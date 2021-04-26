const LOAD = 'propertyPage/LOAD';

const REVIEWS = 'propertyPage/REVIEWS';

const UNLOAD = 'propertyPage/UNLOAD';

const RESERVED = 'propertyPage/RESERVED';

const load = details => ({
  type: LOAD,
  details
});

const setReviews = reviews => ({
  type: REVIEWS,
  reviews
});

const reserved = () => ({
  type: RESERVED
});

export const unload = () => ({ type: UNLOAD });

export const getPage = (id) => async dispatch => {
  const res = await window.fetch(`/api/property/${id}`);
  if (res.ok) {
    const details = await res.json();
    dispatch(load(details));
  }
};

export const getReviews = id => async dispatch => {
  const res = await window.fetch(`/api/reviews/${id}`);
  const { reviews } = await res.json();
  dispatch(setReviews(reviews));
};

export const createReservation = newReservation => async dispatch => {
  const res = await window.fetch('/api/reservation/', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newReservation)
  });
  if (res.ok) dispatch(reserved());
  else throw new Error('Oops');
};

const propertyPageReducer = (
  // eslint-disable-next-line default-param-last
  state = { details: null, reviews: [], reservationSuccess: false }, { type, details, reviews }
) => {
  switch (type) {
    case LOAD:
      return { ...state, details };
    case REVIEWS:
      return { ...state, reviews };
    case RESERVED:
      return { ...state, reservationSuccess: true };
    case UNLOAD:
      return { details: null, reviews: [], reservationSuccess: false };
    default:
      return state;
  }
};

export default propertyPageReducer;
