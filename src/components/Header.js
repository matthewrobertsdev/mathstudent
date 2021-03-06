import React from 'react';
import { withRouter, Link, useLocation } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {clearJWT, clearEmail} from '../store/AuthReducer'

//Header at top of each page with links to all main pages
const Header = () => {
  let jwt=useSelector(state=>state.auth.jwt)
  let location = useLocation();
  let dispatch=useDispatch()
  return (
    <header>
      <nav className="nav-bar">
        {/* Home page */}
        <Link className={getClassNameLeft('/')}
          to='/' key={0}>
          Math Student
      </Link>
        {/* Curriculum page */}
        <Link className={getClassNameLeft('/curriculum')}
          to='/curriculum' key={2}>
          Curriculum
      </Link>
      <Link className={getClassNameLeft('/recents')}
          to='/recents' key={4}>
          Recents
      </Link>
        {getLogInOrOut()}
      </nav>
    </header>
  );

  function getLogInOrOut(){
    if (jwt==='undefined'||jwt===undefined||jwt==='null'||jwt==null){
      /* Login page */
      return (
      <Link className={getClassNameRight('/login')}
      to='/login' key={5}>
      Login
  </Link>
      )
    }
    else {
      return (
        <Link onClick={()=>{
          dispatch(clearJWT())
          dispatch(clearEmail())
        }} className='nav-link float-right'
        to='/logout' key={5}>
        Logout
    </Link>
        )
    }
  }

  //selected or unslected css style that floats left
  function getClassNameLeft(url) {
    console.log(window.location.pathname)
    console.log(location.pathname)
    if (url === location.pathname) {
      return 'selected-nav-link float-left';
    } else {
      return 'nav-link float-left';
    }
  }
  
  //selected or unslected css style that floats right
  function getClassNameRight(url) {
    if (url === location.pathname) {
      return 'selected-nav-link float-right';
    } else {
      return 'nav-link float-right';
    }
  }
}
export default withRouter(Header);