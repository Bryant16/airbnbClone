const LOAD = 'propertyPage/LOAD';

const load = details => ({
  type: LOAD,
  details
});

export const getPage = (id) => async dispatch => {
  const res = await window.fetch(`/api/property/${id}`);
  if (res.ok) {
    const details = await res.json();
    dispatch(load(details));
  }
};

const propertyPageReducer = (
  // eslint-disable-next-line default-param-last
  state = { details: null }, { type, details }
) => {
  switch (type) {
    case LOAD:
      return { details };
    default:
      return state;
  }
};

export default propertyPageReducer;
