const CURRENT = 'errors/CURRENT';

export const SetCurrentErrors = current => ({
  type: CURRENT,
  current
});

export default function reducer (
  state = { current: [] },
  { type, current }
) {
  switch (type) {
    case CURRENT:
      return { current };
    default:
      return state;
  }
}
