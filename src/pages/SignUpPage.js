import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';

//create an account on this page
const SignUpPage = () => {
  //so we can navigate to welcome page on successfull account creation
  const history=useHistory()
  document.title='Create Account'
  //state for our three fields
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [confirmPassword, setConfirmPassword]=useState("")
  return (
    <main>
      {/* title */}
      <h1 className='center-text'>Create an Account</h1>
      {/* fields */}
      <div className='center-text'>
        {/* email */}
        <label htmlFor='Email Input' className='heading'>Email:</label>
        <input id='Email Input' className='text-input userInfoInput small-left-margin' 
        onChange={(event)=>{setEmail(event.target.value)}}/>
        <br />
        <label className='heading'></label>
        <br />
        <br />
        {/* password */}
        <label htmlFor='Password Input' className='heading'>Password:</label>
        <input type='password' id='Password Input' className='text-input userInfoInput small-left-margin'
        onChange={(event)=>{setPassword(event.target.value)}}/>
        <br />
        <label className='heading'></label>
        <br />
        <br />
        {/* confirm password */}
        <label htmlFor='Confirm Password Input' className='heading'>Confirm Password:</label>
        <input type='password' id='Confirm Password Input' className='text-input userInfoInput small-left-margin' 
        onChange={(event)=>{setConfirmPassword(event.target.value)}}/>
        <br />
        <label className='heading'></label>
        <br />
        <br />
        {/* try to sign up */}
        <button onClick={signUp} className="link">
          Sign up
        </button>
      </div>
      {/* spacers at bottom of page */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </main>
  )

  //if all looks good, send a post to /createAccount API endpoint
  function signUp(){
    if (email===null ||email===undefined||email===""){
      window.alert("Email must not be blank")
      return
    }
    if (password===null ||password===undefined||password===""){
      window.alert("Passwords must not be blank")
      return
    }
    if (password!==confirmPassword){
      window.alert("Passwords must match")
      return
    }
    fetch(`http://localhost:9000/createAccount`, {method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: email, password: password})}
    ).then(
      res => res.json()
    ).then(
      data =>  {
        /* if email is taken, tell the user */
        if (data.emailTaken){
          window.alert("Sorry, but that email is already taken.")
        } else {
          /* if all good, take user to first time login page */
          history.push('/firstTimeLogin')
        }
    }
    ).catch(
      err => console.log(err)
    )
  }
}

export default SignUpPage