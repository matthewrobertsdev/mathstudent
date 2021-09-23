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
      <Link to={{pathname: getURL(), state: {from: props.from}}} className="create-button" >
        Generate Problem
      </Link>
    </div>
  )
  function getURL() {
    let url=''
    url+='../solve/teachings/'+props.teacher.teaching.objectName+"/"
    url +=props.method[1]+"/"
    const args=props.teacher[props.method[1]+'Args']()
    console.log(args)
    for (let index = 2; index < props.method.length; index++) {
      if (index % 2 === 0) {
        url += "@" + props.method[index].replace(" ", "-")
      } else {
        url += '@'+args[index-2]
      }
    }
    return url
  }
}
export default ProblemGenerationView