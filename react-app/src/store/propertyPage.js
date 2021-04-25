const LOAD = 'propertyPage/LOAD';

const REVIEWS = 'propertyPage/REVIEWS';

const UNLOAD = 'propertyPage/UNLOAD';

const load = details => ({
  type: LOAD,
  details
});

const setReviews = reviews => ({
  type: REVIEWS,
  reviews
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
  const response = await window.fetch(`/api/reviews/${id}`);
  const reviews = await response.json();
  dispatch(setReviews(reviews));
};

const propertyPageReducer = (
  // eslint-disable-next-line default-param-last
  state = { details: null, reviews: [] }, { type, details, reviews }
) => {
  switch (type) {
    case LOAD:
      return { ...state, details };
    case REVIEWS:
      return { ...state, reviews };
    case UNLOAD:
      return { details: null, reviews: [] };
    default:
      return state;
  }
};

export default propertyPageReducer;
