const LOAD = 'PropsBySchools/LOAD';

const load = listings => ({
  type: LOAD,
  listings
});

export const getPropertiesNearSchools = id => async dispatch => {
  const res = await window.fetch(`/api/schools/${id}`);
  if (res.ok) {
    const objWithProperties = await res.json();
    dispatch(load(objWithProperties));
  }
};

const propertiesNearSchoolsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD: {
      return [...action.listings];
    }
    default:
      return state;
  }
};

export default propertiesNearSchoolsReducer;
