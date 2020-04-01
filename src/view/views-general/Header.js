import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const URLpathname = useSelector(state => state.misc.URLpathname)
  return (
    <div className="nav-bar">
      <Link className={getClassNameLeft(URLpathname, '/')} to='/' 
      key={0}>Math Teacher</Link>
      <Link className={getClassNameLeft(URLpathname, '/curriculum')} to='/curriculum' 
      key={1}>Curriculum</Link>
      <Link className={getClassNameLeft(URLpathname, '/teachings')} to='/teachings' 
      key={2}>Topics</Link>
      <Link className={getClassNameLeft(URLpathname, '/version')} 
      to='/version' key={3}>Version</Link>
      <Link className={getClassNameRight(URLpathname, '/login')} 
      to='/login' key={4}>Login</Link>
    </div>
  );
function getClassNameLeft(URLpathname, url) {
  if (url === URLpathname) {
    return 'selected-nav-link float-left';
  } else {
    return 'nav-link float-left';
  }
}
  function getClassNameRight(URLpathname, url) {
    if (url === URLpathname) {
      return 'selected-nav-link float-right';
    } else {
      return 'nav-link float-right';
    }
  }
}
export default withRouter(Header);