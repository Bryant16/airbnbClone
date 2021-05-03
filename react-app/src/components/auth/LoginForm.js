import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { popSignup } from '../../store/modal';
import { LogIn } from '../../store/session';

import './loginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const after = useSelector(state => state.modal.after);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(LogIn(email, password))
      .then(() => after && after())
      .catch(err => setErrors(err.errors || []));
  };

  const switchForm = () => dispatch(popSignup());

  const demoLogin = () => {
    dispatch(LogIn('demo@aa.io', 'password'))
      .then(() => after && after());
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='div__container_form login'>
      <form
        className='form__container_div'
        onSubmit={onLogin}
      >
        {errors.length
          ? (
            <div>
              {errors.map((error) => (
                <div key={nanoid()}>
                  {error}
                </div>
              ))}
            </div>
            )
          : null}
        <div className='login__email'>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='login_password'>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div className='button-group'>
          <button
            type='submit'
            className='grouped-button'
          >
            Login
          </button>
          <button
            type='button'
            onClick={demoLogin}
            className='grouped-button'
          >Demo Login
          </button>
        </div>
        <button
          type='button'
          className='grouped-button'
          onClick={switchForm}
        >
          Don't have an account?
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
