import React from 'react';
import { withRouter, Link } from 'react-router-dom';

//Header at top of each page with links to all main pages
const Header = () => {
  return (
    <header>
      <nav className="nav-bar">
        {/* Home page */}
        <Link className={getClassNameLeft('/')}
          to='/' key={0}>
          Math Teacher
      </Link>
        {/* Curriculum page */}
        <Link className={getClassNameLeft('/curriculum')}
          to='/curriculum' key={2}>
          Curriculum
      </Link>
        {/* Cached version info page */}
        <Link className={getClassNameLeft('/version')}
          to='/version' key={3}>
          Version
      </Link>
        {/* Login page */}
        <Link className={getClassNameRight('/login')}
          to='/login' key={4}>
          Login
      </Link>
      </nav>
    </header>
  );

  //selected or unslected css style that floats left
  function getClassNameLeft(url) {
    if (url === window.location.pathname) {
      return 'selected-nav-link float-left';
    } else {
      return 'nav-link float-left';
    }
  }
  
  //selected or unslected css style that floats right
  function getClassNameRight(url) {
    if (url === window.location.pathname) {
      return 'selected-nav-link float-right';
    } else {
      return 'nav-link float-right';
    }
  }
}
export default withRouter(Header);