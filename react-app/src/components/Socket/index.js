import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Mount, UnMount } from '../../store/socket';

export default function Socket () {
  const dispatch = useDispatch();

  const currentSocket = useSelector(state => state.socket.current);

  useEffect(() => {
    dispatch(Mount());
    return () => dispatch(UnMount());
  }, [dispatch]);

  useEffect(() => {
    if (currentSocket) {
      console.log('Current socket extant');
      currentSocket && currentSocket.emit('test');
    }
  }, [currentSocket]);

  return null;
}
