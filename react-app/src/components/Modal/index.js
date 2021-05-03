import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignUpForm';
import { teardown } from '../../store/modal';

import './modal.css';

export default function Modal () {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);
  const after = useSelector(state => state.modal.after);
  const mooring = useSelector(state => state.modal.mooring);
  const current = useSelector(state => state.modal.current);

  const onClose = () => {
    dispatch(teardown());
    user && after && after();
  };

  const resist = e => e.stopPropagation();

  useEffect(() => {
    user && current && dispatch(teardown());
  }, [dispatch, current, user]);

  return !user && mooring && current && ReactDOM.createPortal((
    <div
      className='modal-background'
      onClick={onClose}
    >
      <div
        className='form-container prop-stopper'
        onClick={resist}
      >
        {(() => current === 'login'
          ? <LoginForm />
          : <SignupForm />)()}
      </div>
    </div>
  ), mooring);
}
