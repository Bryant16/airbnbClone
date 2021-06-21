import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SetCurrentErrors } from '../../store/errors';

export default function Error () {
  const dispatch = useDispatch();

  const currentErrors = useSelector(state => state.errors.current);
  const { length } = currentErrors;

  const onClose = () => dispatch(SetCurrentErrors([]));

  useEffect(() => {
    const globalClick = () => dispatch(SetCurrentErrors([]));
    length && document.addEventListener('click', globalClick);
    return () => document.removeEventListener('click', globalClick);
  }, [dispatch, length]);

  return (
    <div
      onClick={e => e.stopPropagation()}
      className='error-bar'
      style={{
        height: length * 50
      }}
    >
      <div className='errors-body'>
        {currentErrors.map((err, idx) => (
          <div
            key={idx}
            className='error-content'
          >
            {err}
          </div>
        ))}
      </div>
      <button
        onClick={onClose}
        className='errors-close'
      >
        <i className='fas fa-times' />
      </button>
    </div>
  );
}
