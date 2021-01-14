import React, { useState } from 'react';
import UncreatedTeachingView from '../components/teaching-views/UncreatedTeachingView'
import { getTeacher } from '../store/Actions';
import LessonView from '../components/teaching-views/LessonView'
import {Link} from 'react-router-dom'

const SolvePage = (props) => {
  const { match: { params } } = props;
  document.title = params.teachingName + " Problem"

  const [teacher, setTeacher] = useState(undefined);
  getTeacher(params.teachingName, setTeacher)
  if (teacher && getMethodIndex()!==-1) {
    const mathProblem=teacher[params.method+"Problem"](params.parameters.split('@'))
    return (
      <main>
        <LessonView lesson={mathProblem} teacher={teacher} params={params}/>
        <div className='center-text'>
          <Link to={{pathname: getURL(), state: {from: props.from}}}
          className='create-button' tabIndex={0}>
          Show Solution
          </Link>
        </div>
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
  function getURL() {
    return `../../../../../../teachings/${params.teachingName}/${params.method}/${params.parameters}`
  }
}

export default SolvePage

/*
<span aria-label={math[2]}>
            <MathJax.Provider input="tex" >
              <MathJax.Node aria-hidden='true' className='heading' formula={`\\color{white}{${math[1]}}`} />
            </MathJax.Provider>
          </span>

*/