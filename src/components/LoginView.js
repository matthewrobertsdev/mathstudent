import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';

//view for logging in
const LoginView = () => {
  //for navigation on success
  const history=useHistory()
  //state
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  return (
      <div className='center-text'>
        {/* email field */}
        <label htmlFor='Email Input' className='heading'>Email:</label>
        <input id='Email Input' className='userInfoInput small-left-margin'
        onChange={(event)=>{setEmail(event.target.value)}}/>
        <br/>
        <br/>
        {/* password field */}
        <label htmlFor='Password Input' className='heading'>Password:</label>
        <input type='password' id='Password Input' className='userInfoInput small-left-margin'
        onChange={(event)=>{setPassword(event.target.value)}}/>
        <br/>
        <br/>
        {/* login button */}
        <button onClick={login} className="link">
          Login
        </button>
      </div>
  )

  /* try to login at endpoint /login */
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

export default LoginView