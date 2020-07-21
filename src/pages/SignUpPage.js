import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';

const SignUpPage = () => {
  const history=useHistory()
  document.title='Create Account'
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [confirmPassword, setConfirmPassword]=useState("")
  return (
    <main>
      <h1 className='center-text'>Create an Account</h1>
      <div className='center-text'>
        <label htmlFor='Email Input' className='heading'>Email:</label>
        <input id='Email Input' className='userInfoInput small-left-margin' 
        onChange={(event)=>{setEmail(event.target.value)}}/>
        <br />
        <label className='heading'></label>
        <br />
        <br />
        <label htmlFor='Password Input' className='heading'>Password:</label>
        <input type='password' id='Password Input' className='userInfoInput small-left-margin'
        onChange={(event)=>{setPassword(event.target.value)}}/>
        <br />
        <label className='heading'></label>
        <br />
        <br />
        <label htmlFor='Confirm Password Input' className='heading'>Confirm Password:</label>
        <input type='password' id='Confirm Password Input' className='userInfoInput small-left-margin' 
        onChange={(event)=>{setConfirmPassword(event.target.value)}}/>
        <br />
        <label className='heading'></label>
        <br />
        <br />
        <button onClick={signUp} className="link">
          Sign up
        </button>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </main>
  )

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
        if (data.emailTaken){
          window.alert("Sorry, but that email is already taken.")
        } else {
          history.push('/firstTimeLogin')
        }
    }
    ).catch(
      err => console.log(err)
    )
  }
}

export default SignUpPage