import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetCurrentErrors, ClearCurrentErrors } from '../../store/errors';

import { popLogin } from '../../store/modal';
import { SignUp, LogIn } from '../../store/session';

import './signupForm.css';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const after = useSelector(state => state.modal.after);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const onSignUp = (e) => {
    e.preventDefault();
    dispatch(ClearCurrentErrors());
    if (password === repeatPassword) {
      dispatch(SignUp(username, email, password));
    } else dispatch(SetCurrentErrors(['Passwords do not match']));
  };

  const demoLogin = () => {
    dispatch(LogIn('demo@aa.io', 'password'))
      .then(() => after && after());
  };

  const switchForm = () => dispatch(popLogin());

  const updateUsername = ({ target: { value } }) => {
    setUsername(value);
  };

  const updateEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const updatePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const updateRepeatPassword = ({ target: { value } }) => {
    setRepeatPassword(value);
  };

  return (
    <div className='div__container_form signup'>
      <form className='form__container_div' onSubmit={onSignUp}>
        <div className='userName__container'>
          <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={updateUsername}
            value={username}
          />
        </div>
        <div className='email__container'>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={updateEmail}
            value={email}
          />
        </div>
        <div className='password_container'>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={updatePassword}
            value={password}
          />
        </div>
        <div className='password_container'>
          <input
            type='password'
            name='repeat_password'
            placeholder='Confirm password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required
          />
        </div>
        <div className='button-group'>
          <button
            className='grouped-button'
            type='submit'
          >
            Sign Up
          </button>
          <button
            type='button'
            className='grouped-button'
            onClick={demoLogin}
          >
            Demo Login
          </button>
        </div>
        <button
          className='grouped-button'
          onClick={switchForm}
          type='button'
        >
          Already have an account?
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
