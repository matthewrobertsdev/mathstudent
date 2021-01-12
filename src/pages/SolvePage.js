import React, { useState } from 'react';
import UncreatedTeachingView from '../components/teaching-views/UncreatedTeachingView'
import { getTeacher } from '../store/Actions';


const SolvePage = (props) => {
  const { match: { params } } = props;
  document.title = params.teachingName + " Problem"

  const [teacher, setTeacher] = useState(undefined);
  getTeacher(params.teachingName, setTeacher)
  if (teacher && getMethodIndex()!==-1) {
    return (
      <main>
        <h1 className='large-left-margin'>{params.teachingName} Problem</h1>
      </main>
    )
  } else if (teacher === false || getMethodIndex()===-1) {
    return (
      <main>
        <UncreatedTeachingView className='center-text' />
      </main>
    )
  } else {
    return null
  }
  function getMethodIndex(){
    if (teacher===undefined || teacher===false) {
      return -1
    }
    return teacher.teaching.methods.findIndex(
      method => {
        return method[1] === params.method 
      }
    )
  }
}

export default SolvePage
