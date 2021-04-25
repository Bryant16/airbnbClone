const LOAD = 'HomePage/LOAD';

const load = schools => ({
  type: LOAD,
  schools
});

export const getSchools = () => async dispatch => {
  const res = await window.fetch('/api/schools');
  if (res.ok) {
    const { schools } = await res.json();
    dispatch(load(schools));
  }
};

const schoolsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD: {
      return action.schools;
    }
    default:
      return state;
  }
};

export default schoolsReducer;
