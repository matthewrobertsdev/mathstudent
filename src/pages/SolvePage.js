import React, { useState } from 'react';
import UncreatedTeachingView from '../components/teaching-views/UncreatedTeachingView'
import { getTeacher } from '../store/Actions';
import MathJax from 'react-mathjax'

const SolvePage = (props) => {
  const { match: { params } } = props;
  document.title = params.teachingName + " Problem"

  const [teacher, setTeacher] = useState(undefined);
  getTeacher(params.teachingName, setTeacher)
  if (teacher && getMethodIndex()!==-1) {
    const mathProblem=teacher[params.method+"Problem"](params.parameters.split('@'))
    const math = mathProblem.split('{$bl}')
    return (
      <main>
        <h1 className='large-left-margin'>{params.teachingName} Problem</h1>
          <span aria-label={math[2]}>
            <MathJax.Provider input="tex" >
              <MathJax.Node aria-hidden='true' className='heading' formula={`\\color{white}{${math[1]}}`} />
            </MathJax.Provider>
          </span>
        )
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
