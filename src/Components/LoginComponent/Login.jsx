import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { emailValidator, passwordValidator } from '../../Utilities/regexValidator';
import './Login.css'

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({ email: '', password: '' });
  const [errorMessage, seterrorMessage] = useState('');
  const [successMessage, setsuccessMessage] = useState('');

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem('auth')) navigate('/Search')
  }, [])

  const formSubmitter = e => {
    e.preventDefault();
    setsuccessMessage('');
    if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');

    if (!passwordValidator(input.password))
      return seterrorMessage(
        'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
      );
    setsuccessMessage('Successfully Validated');
    navigate('/Search')
    localStorage.setItem('auth', true);
  };

  return (
    <div className='LoginContainer'>
      <div>
        <div>
          <img
            src='https://wallpaperaccess.com/full/4893798.jpg'
            alt='kanini'
            width="730"
            height="770"
            className='loginBgImage'
          />
        </div>
        <div className='loginImageContent'>
          <p className='loginTicker'>Kanini Ticker Platform</p>
          <p className='loginImageContentText'><h1>Experience Seamless Stock<br />
            Search Here<br /></h1></p>
        </div>
      </div>
      <div className='loginTextboxContainer'>
        <form onSubmit={formSubmitter}>
          <div className='kaniniImage'>
            <img
              src='data:image/png;base64,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'
              alt='kanini'
              width="140"
              height="45" />
          </div>
          <div>
            <h1>Sign In</h1>
            <p>Welcom back! Please enter email id and password</p>
          </div>
          {errorMessage.length > 0 && (
            <div style={{ marginBottom: "10px", color: "red" }}>
              {errorMessage}
            </div>
          )}
          {successMessage.length > 0 && (
            <div style={{ marginBottom: "10px", color: "green" }}>
              {successMessage}
            </div>
          )}
          <div data-validate="email is required">
            Email ID<br />
            <input
              className='loginInput'
              type="text"
              name="email"
              placeholder="Type your Email"
              onChange={handleChange}
            />
          </div>
          <div data-validate="Password is required">
            Password<br />
            <input
              className='loginInput'
              type="password"
              name="password"
              placeholder="Type your password"
              onChange={handleChange}
            />
          </div>
          <div>
            <div />
            <button className='button'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
