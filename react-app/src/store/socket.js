import { io } from 'socket.io-client';

const MOUNT_SOCKET = 'socket/MOUNT';
const UNMOUNT_SOCKET = 'socket/UNMOUNT';
const ON = 'socket/ON';
const OFF = 'socket/OFF';

export const Mount = () => ({
  type: MOUNT_SOCKET
});

export const UnMount = () => ({
  type: UNMOUNT_SOCKET
});

export const AddListener = (event, effect) => ({
  type: ON,
  event,
  effect
});

export const RemoveListener = event => ({
  type: OFF,
  event
});

export default function reducer (
  // eslint-disable-next-line default-param-last
  state = { current: null, events: {} },
  { type, event, effect }
) {
  switch (type) {
    case MOUNT_SOCKET:
      return { current: io(), events: {} };
    case UNMOUNT_SOCKET:
      state.current && state.current.close();
      return { current: null, events: null };
    case ON:
      state.events[event] = effect;
      state.current.on(event, state.events[effect]);
      return state;
    case OFF:
      state.current.off(event, state.events[effect]);
      delete state.events[effect];
      return state;
    default:
      return state;
  }
}
