import React from 'react';
import { withRouter, Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="nav-bar">
      <Link className={getClassNameLeft('/')} 
      to='/' key={0}>Math Teacher</Link>
      <Link className={getClassNameLeft('/curriculum')} 
      to='/curriculum' key={1}>Curriculum</Link>
      <Link className={getClassNameLeft('/teachings')} 
      to='/teachings' key={2}>Teachings</Link>
      <Link className={getClassNameLeft('/version')} 
      to='/version' key={3}>Version</Link>
      <Link className={getClassNameRight('/login')} 
      to='/login' key={4}>Login</Link>
    </div>
  );
function getClassNameLeft(url) {
  if (url === window.location.pathname) {
    return 'selected-nav-link float-left';
  } else {
    return 'nav-link float-left';
  }
}
  function getClassNameRight(url) {
    if (url === window.location.pathname) {
      return 'selected-nav-link float-right';
    } else {
      return 'nav-link float-right';
    }
  }
}
export default withRouter(Header);