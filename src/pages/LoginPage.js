import React from 'react';
import { Link} from 'react-router-dom';
import LoginView from '../components/LoginView'

//main login page
const LoginPage = () => {
  document.title='Login'
  return (
    <main>
      {/* login for returning users */}
      <h1 className='center-text'>Returning User?  Log in to Math Student</h1>
      <LoginView/>
      {/* link to sign up page for new users */}
      <h2 className='center-text'>Or</h2>
      <h1 className='center-text'>New User? Create an Account</h1>
      <h2 className='center-text'>Don't have an account?  Click the link below to create one:</h2>
      <div className='center-text'>
        <Link to="/createAccount" className="link">
          Create Account
        </Link>
      </div>
      {/* spacers at bottom */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </main>
  )
}

export default LoginPage