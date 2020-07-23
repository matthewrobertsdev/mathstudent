import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {clearJWT, clearEmail} from '../store/AuthReducer'
//import LoginView from '../components/LoginView'
//page that just thanks the user for using Math Teacher
const GoodByePage = () => {
  let dispatch=useDispatch()

  useEffect(()=>{dispatch(clearJWT())
    dispatch(clearEmail())}, [dispatch])

  return (
    <span>
      <h1 className='center-text'>Thank you for using Math Teacher.</h1>
      <h2 className='center-text heading'>You are now logged out</h2>
      {/*<h1 className='center-text'>Want to sign in again?</h1>
      <LoginView/>*/}
    </span>
  )
}
export default GoodByePage