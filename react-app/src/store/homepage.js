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

export default function reducer (state = { schools: [] }, action) {
  switch (action.type) {
    case LOAD:
      return { schools: action.schools };
    default:
      return state;
  }
}
