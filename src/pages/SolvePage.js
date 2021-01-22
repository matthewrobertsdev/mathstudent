import React, { useState } from 'react';
import UncreatedTeachingView from '../components/teaching-views/UncreatedTeachingView'
import { getTeacher } from '../store/Actions';
import LessonView from '../components/teaching-views/LessonView'
import EnterSolutionView from '../components/teaching-views/EnterSolutionView'

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
        {/*createBackLink()*/}
        <LessonView lesson={mathProblem.problem} teacher={teacher} params={params}/>
        <div className='center-text'>
          <Link to={{pathname: getURL(), state: {from: "SolvePage"}}}
          className='create-button' tabIndex={0}>
          Show Solution
          </Link>
          <EnterSolutionView teacher={teacher} method={params.method} parameters={params.parameters} 
          solutions={mathProblem.solutions}/>
        </div>
      </main>
    )
  } else if (teacher === false || getMethodIndex()===-1) {
    return (
      <main>
        {createBackLink()}
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

  function createBackLink(){
    if (props.location.state && props.location.state.from) {
        return (
          <h1 className='large-left-margin'>
            <Link to={`../../../../GenerateProblems/${params.teachingName}`} className='link-heading'>
              Go to {params.teachingName}'s Generate Problem Page
            </Link>
          </h1>
        )
    }
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