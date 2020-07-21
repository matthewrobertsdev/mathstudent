import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const LoginPage = () => {
  document.title='Login'
  const history=useHistory()
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  return (
    <main>
      <h1 className='center-text'>Returning User?  Log in to Math Teacher</h1>
      <div className='center-text'>
        <label htmlFor='Email Input' className='heading'>Email:</label>
        <input id='Email Input' className='userInfoInput small-left-margin'
        onChange={(event)=>{setEmail(event.target.value)}}/>
        <br/>
        <br/>
        <label htmlFor='Password Input' className='heading'>Password:</label>
        <input type='password' id='Password Input' className='userInfoInput small-left-margin'
        onChange={(event)=>{setPassword(event.target.value)}}/>
        <br/>
        <br/>
        <button onClick={login} className="link">
          Login
        </button>
      </div>
      <h2 className='center-text'>Or</h2>
      <h1 className='center-text'>New User? Create an Account</h1>
      <h2 className='center-text'>Don't have an account?  Click the link below to create one:</h2>
      <div className='center-text'>
        <Link to="/createAccount" className="link">
          Create Account
        </Link>
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

export default LoginPage