import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/app.css'
const TeachingLink = (props) => {
  return (
    <Link className={"text-link"} to={`/teachings/${props.codeName}`}>
      {props.displayName}
    </Link>
  );
}
export default TeachingLink;