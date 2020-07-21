import React, { useState } from 'react'
import {getTeacher} from '../../store/Actions'

const MethodRecentView = (props) => {
  const [teacher, setTeacher]=useState(undefined)
  getTeacher(props.teachingName, setTeacher)
  if (teacher&&getMethodIndex!==-1){
  return (
    <span>
      <h1 className='heading text-margins'>Teaching</h1>
      <span className='text-margins'>
        <span className='big-heading'>{props.teachingName} Teaching: </span>
        <a href={`../teachings/${props.teachingName}/${props.method}`} className='link-heading'>
           {getMethod()[0]}
        </a>
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