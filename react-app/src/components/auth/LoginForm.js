import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { LogIn } from '../../store/session';

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUser, setIsUser] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(LogIn(email, password))
      .then(() => setIsUser(true))
      .catch(err => setErrors(err.errors || []));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {}, [isUser]);

  return isUser
    ? <Redirect to='/' />
    : (
      <form onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div key={nanoid()}>{error}</div>
          ))}
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <button type='submit'>Login</button>
        </div>
      </form>
      );
};

export default LoginForm;
