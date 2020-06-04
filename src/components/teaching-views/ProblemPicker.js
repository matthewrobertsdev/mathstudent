import React from 'react';
import { Link } from 'react-router-dom'
//just provides initial links to enter a problem or generate problems
const ProblemPicker = (props) => {
  return (
    <div className='full-width center-text'>
      <Link className='link center-text' to={`/EnterProblems/${props.teachingName}`}>
        Enter Problem
      </Link>
      <br/>
      <br/>
      <Link className='link center-text' to={`/GenerateProblems/${props.teachingName}`}>
        Generate Problems
      </Link>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>);
}
export default ProblemPicker