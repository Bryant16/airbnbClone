import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { SignUp } from '../../store/session';
import "./signupForm.css"

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      dispatch(SignUp(username, email, password))
        .catch(err => setErrors(err.errors || []));
    } else setErrors(['Passwords must match.']);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="div__container_form">
      <form className="form__container_div" onSubmit={onSignUp}>
        <div>
          {errors.map((error) => (
            <div key={nanoid()}>{error}</div>
          ))}
        </div>
        <div className="userName__container">
          <label>User Name:</label>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          />
        </div>
        <div className="email__container">
          <label>Email:</label>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          />
        </div>
        <div className="password_container">
          <label>Password:</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          />
        </div>
        <div className="password_container">
          <label>Repeat Password:</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required
          />
        </div>
        <button className="sub__button" type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
