import React from 'react';
import { Link } from 'react-router-dom';
const BackToTeachingView = (props) => {
  return (
  <h1 className='large-left-margin'>
    <Link to={'/teachings/'+props.teacher.teaching.objectName} className='link-heading'>
      {'Back to '+props.teacher.teaching.displayNameSingular+' Page'}
    </Link>
  </h1>
  );
}
export default BackToTeachingView