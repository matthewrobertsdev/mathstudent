import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const URLpathname = useSelector(state => state.misc.URLpathname)
  return (
    <div className="nav-bar">
      <Link className={getClassName(URLpathname, '/')} to='/' 
      key={0}>Curriculum</Link>
      <Link className={getClassName(URLpathname, '/topics')} to='/topics' 
      key={0}>Topics</Link>
      <Link className={getClassName(URLpathname, '/version')} 
      to='/version' key={1}>Version</Link>
      <Link className={getClassName(URLpathname, '/login')} 
      to='/login' key={1}>Login</Link>
    </div>
  );
}
function getClassName(URLpathname, url) {
  if (url === URLpathname) {
    return 'selected-nav-link float-left';
  } else {
    return 'nav-link float-left';
  }
}
export default withRouter(Header);