

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const FirstTimeUserLoginPage = () => {
  const history=useHistory()
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  document.title='Login'
  return (
    <main>
      <h1 className='center-text'>Log in to Math Teacher with Your New Account!</h1>
      <div className='center-text'>
        <label htmlFor='Email Input' className='heading'>Email:</label>
        <input id='Email Input' className='userInfoInput small-left-margin'
        onChange={(event)=>{setEmail(event.target.value)}}/>
        <br/>
        <br/>
        <label type='password' htmlFor='Password Input' className='heading'>Password:</label>
        <input type='password' id='Password Input' className='userInfoInput small-left-margin'
        onChange={(event)=>{setPassword(event.target.value)}}/>
        <br/>
        <br/>
        <button onClick={login} className="link">
          Login
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

  function login(){
    if (email===null ||email===undefined||email===""){
      window.alert("Email must not be blank")
      return
    }
    if (password===null ||password===undefined||password===""){
      window.alert("Passwords must not be blank")
      return
    }
    fetch(`http://localhost:9000/login`, {method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: email, password: password})}
    ).then(
      res => res.json()
    ).then(
      data =>  {
        console.log(data)
        if (data.error){
          window.alert("Invalid email or password")
        } else {
          history.push('/')
        }
    }
    ).catch(
      err => console.log(err)
    )
  }
}

export default FirstTimeUserLoginPage