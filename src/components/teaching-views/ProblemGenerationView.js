import React from 'react';
import { Link } from 'react-router-dom';

//for generating a problem for a method
//incomplete
const ProblemGenerationView = (props) => {
  if (props.method == null) {
    return null;
  }
  return (
    <div className='center-text'>
      <h1 className='h1-2'>{props.number+') '+props.method[0]}:</h1>
      <Link to={getURL} className="link">
        Generate Problem
      </Link>
    </div>
  )
  function getURL() {
    let url=''
    url+='../teachings/'+props.teacher.teaching.objectName+"/"
    url +=props.method[1]+"/"
    const args=props.teacher['addAFractionArgs']()
    console.log(args)
    for (let index = 2; index < props.method.length; index++) {
      if (index % 2 === 0) {
        url += "@" + props.method[index].replace(" ", "-")
      } else {
        url += '@'+args[Math.floor(index/2)-1]
      }
    }
    return url
  }
}
export default ProblemGenerationView