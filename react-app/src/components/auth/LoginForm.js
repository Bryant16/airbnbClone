import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { LogIn } from '../../store/session';

import './loginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(LogIn(email, password))
      .catch(err => setErrors(err.errors || []));
  };

  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(LogIn('demo@aa.io', 'password'));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return user
    ? <Redirect to='/' />
    : (
      <div className='login__div_container'>
        <form
          className='login__form_container'
          onSubmit={onLogin}
        >
          <div>
            {errors.map((error) => (
              <div key={nanoid()}>
                {error}
              </div>
            ))}
          </div>
          <div className='login__email'>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className='login_password'>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            <div className='login__btn'>
              <button type='submit'>Login</button>
              <button type='button' onClick={demoLogin}>Demo Login</button>
            </div>
          </div>
        </form>
      </div>
      );
};

export default LoginForm;
