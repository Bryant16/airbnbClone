const LOAD = 'PropsBySchools/LOAD';

const load = (center, properties) => ({
  type: LOAD,
  center,
  properties
});

export const getPropertiesNearSchools = id => async dispatch => {
  const res = await window.fetch(`/api/schools/${id}`);
  if (res.ok) {
    const { center, properties } = await res.json();
    dispatch(load(center, properties));
  }
};

const propertiesNearSchoolsReducer = (
  // eslint-disable-next-line default-param-last
  state = { center: null, properties: [] },
  { type, center, properties }
) => {
  switch (type) {
    case LOAD: {
      return { center, properties };
    }
    default:
      return state;
  }
};

export default propertiesNearSchoolsReducer;
