const LOAD = 'reservation/LOAD';

const UNLOAD = 'reservation/UNLOAD';

const COMPLETE = 'reservation/COMPLETE';

const load = (property, dateRange) => ({
  type: LOAD,
  property,
  dateRange
});

const complete = () => ({
  type: COMPLETE
});

export const UnloadReservation = () => ({
  type: UNLOAD
});

export const LoadReservation = (propertyId, dates) => async dispatch => {
  const res = await window.fetch(`/api/reservation/${propertyId}/${dates}/`);
  const { property, dateRange } = await res.json();
  dispatch(load(property, dateRange));
};

export const EditReservation = (propertyId, dates, newReservation) => async dispatch => {
  const res = await window.fetch(`/api/reservation/${propertyId}/${dates}/`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newReservation)
  });
  const { success } = await res.json();
  if (success) dispatch(complete());
  else throw new Error('Oops');
};

export default function reducer (
  // eslint-disable-next-line default-param-last
  state = { property: null, dateRange: null, loaded: false, success: false },
  { type, property, dateRange }
) {
  switch (type) {
    case LOAD:
      return { property, dateRange, loaded: true };
    case COMPLETE:
      return { ...state, success: true };
    case UNLOAD:
      return { property: null, dateRange: null, loaded: false, success: false };
    default:
      return state;
  }
}
