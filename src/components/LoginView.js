import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {storeJWT, storeEmail} from '../store/AuthReducer'

//view for logging in
const LoginView = () => {
  //for navigation on success
  const history=useHistory()
  const dispatch=useDispatch()
  //state
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  return (
      <div className='center-text'>
        {/* email field */}
        <label htmlFor='Email Input' className='heading'>Email:</label>
        <input id='Email Input' className='text-input userInfoInput small-left-margin'
        value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
        <br/>
        <br/>
        {/* password field */}
        <label htmlFor='Password Input' className='heading'>Password:</label>
        <input type='password' id='Password Input' className='text-input userInfoInput small-left-margin'
        value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
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
        if (data.error){
          window.alert("Invalid email or password")
        } else {
          //if login was successfull, store jwt and email
          dispatch(storeJWT(data.jwt))
          dispatch(storeEmail(data.email))
          history.push('/')
        }
    }
    ).catch(
      err => console.log(err)
    )
  }
}

export default LoginView