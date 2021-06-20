const CURRENT = 'errors/CURRENT';
const CLEAR = 'errors/CLEAR';

export const SetCurrentErrors = current => ({
  type: CURRENT,
  current
});

export const ClearCurrentErrors = () => ({
  type: CLEAR
});

export default function reducer (
  state = { current: [] },
  { type, current }
) {
  switch (type) {
    case CURRENT:
      return { current };
    case CLEAR:
      return { current: [] };
    default:
      return state;
  }
}
