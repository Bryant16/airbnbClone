import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { SignUp } from '../../store/session';

import './signupForm.css';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const onSignUp = (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      dispatch(SignUp(username, email, password))
        .catch(err => setErrors(err.errors || []));
    } else setErrors(['Passwords must match.']);
  };

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

  return user
    ? <Redirect to='/' />
    : (
      <div className='div__container_form'>
        <form className='form__container_div' onSubmit={onSignUp}>
          <div>
            {errors.map((error) => (
              <div key={nanoid()}>
                {error}
              </div>
            ))}
          </div>
          <div className='userName__container'>
            <label>User Name:</label>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            />
          </div>
          <div className='email__container'>
            <label>Email:</label>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            />
          </div>
          <div className='password_container'>
            <label>Password:</label>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            />
          </div>
          <div className='password_container'>
            <label>Repeat Password:</label>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required
            />
          </div>
          <div className='signup__btn'>
            <button
              className='sub__button'
              type='submit'
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      );
};

export default SignUpForm;
