import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  return (
    <main>
      <h1 className='center-text'>Returning User?  Log in to Math Teacher</h1>
      <div className='center-text'>
        <label for='Email Input' className='heading'>Email:</label><input id='Email Input' className='small-left-margin'/>
        <br/>
        <br/>
        <label for='Password Input' className='heading'>Password:</label><input id='Password Input' className='small-left-margin'/>
        <br/>
        <br/>
        <Link to="/" className="link">
          Login
        </Link>
      </div>
      <h2 className='center-text'>Or</h2>
      <h1 className='center-text'>Create an Account</h1>
      <h2 className='center-text'>Don't have an account?  Click the link below to create one:</h2>
      <div className='center-text'>
        <Link to="/" className="link">
          Create Account
        </Link>
      </div>
    </main>
  )
}

export default LoginPage