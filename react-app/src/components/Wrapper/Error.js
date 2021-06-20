import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SetCurrentErrors } from '../../store/errors';

export default function Error () {
  const dispatch = useDispatch();

  const currentErrors = useSelector(state => state.errors.current);
  const { length } = currentErrors;

  const [grow, setGrow] = useState(false);

  const onClose = () => dispatch(SetCurrentErrors([]));

  useEffect(() => {
    setGrow(!!length);
  }, [length]);

  console.log(length, grow);

  return (
    <div
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