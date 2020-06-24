import React from 'react';
import { Link } from 'react-router-dom';
//back to main teaching page link
const BackToTeachingView = (props) => {
  return (
  <h1 className='large-left-margin'>
    <Link to={'/teachings/'+props.teacher.teaching.objectName} className='link-heading'>
      {'Go to '+props.teacher.teaching.displayNameSingular+'\'s Page'}
    </Link>
  </h1>
  );
}
export default BackToTeachingView