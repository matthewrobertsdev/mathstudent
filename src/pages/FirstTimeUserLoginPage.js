import React from 'react';
import LoginView from '../components/LoginView'

//main login page
const FirstTimeUserLoginPage = () => {
  document.title='Login'
  return (
    <main>
      {/* login for new users */}
      <h1 className='center-text'>Log in to Math Teacher with Your New Account!</h1>
      <LoginView/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </main>
  )
}

export default FirstTimeUserLoginPage