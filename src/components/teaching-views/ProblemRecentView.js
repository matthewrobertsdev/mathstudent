import React, { useState } from 'react'
import {getTeacher} from '../../store/Actions'
import MathJax from 'react-mathjax'

const MethodRecentView = (props) => {
  const [teacher, setTeacher]=useState(undefined)
  getTeacher(props.teachingName, setTeacher)
  if (teacher&&getMethodIndex!==-1){
  const problemStrings=teacher[`${props.method}Problem`](props.arguments).split('{$bl}')
  return (
    <span>
      <h1 className='heading text-margins'>Problem</h1>
      <a href={`../teachings/${props.teachingName}/${props.method}/${props.arguments}`} className='link-heading text-margins'>
        {props.teachingName} Teaching: {getMethod()[0]}
      </a>
      <span aria-label={problemStrings[2]}>
      <MathJax.Provider input="tex" >
        <MathJax.Node aria-hidden='true' className='heading' formula={`\\color{white}{${problemStrings[1]}}`} />
      </MathJax.Provider>
      </span>
      <br />
      <br />
      <hr className='text-margins' />
    </span>
  )
  } else {
    return null
  }

  function getMethod() {
    return teacher.teaching.methods.find(
      method => {
        return method[1] === props.method 
      }
    )
  }
  function getMethodIndex(){
    if (teacher===undefined || teacher===false) {
      return -1
    }
    return teacher.teaching.methods.findIndex(
      method => {
        return method[1] === props.method 
      }
    )
  }
}

export default MethodRecentView