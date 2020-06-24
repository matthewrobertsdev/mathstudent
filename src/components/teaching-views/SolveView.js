import React, { useState, useEffect } from 'react';
import { getTeacher } from '../../store/Actions';
import MathJax from 'react-mathjax';

// the view where the solving is displayed
const SolveView = (props) => {

  //set-up state
  const [teacher, setTeacher] = useState(undefined);
  //get the teacher
  getTeacher(props.params.teachingName, setTeacher)
  const [lesson, setLesson] = useState([])

  //get the lesson
  useEffect(() => {
    if (teacher !== undefined) {
      if (typeof teacher[props.params.method] === 'function') {
        setLesson(teacher[props.params.method](props.params.parameters.split('@')))
      }
    }
    return () => {
      if (teacher) {
        teacher.prepared = false
      }
    }
  }, [teacher, props.params.method, props.params.parameters])

  //render the lesson
  return (
    <div>
      {createSolveView()}
    </div>
  )

  //create the view
  function createSolveView() {
    if (teacher) {
      return (
        <div>
          {/*the heading*/}
          <h1 className='large-left-margin'>{teacher.teaching.displayNameSingular}: {getMethodName()}</h1>
          {/*display the lesson of the method*/}
          <div className='text-margins'>
            {displayLesson()}
          </div>
        </div>
      )
    }
  }
  //get the display name
  function getMethodName() {
    let methodName = ""
    teacher.teaching.methods.forEach(method => {
      if (method[1] === props.params.method) {
        methodName = method[0]
      }
    })
    return methodName
  }

  //create the display of the lesson
  function displayLesson() {
    if (teacher.prepared) {
      let teachingDisplay = []
      //create lesson for method with arguments
      for (let i = 0; i < lesson.length; i++) {
        //create concept
        for (let j = 0; j < lesson[i].length; j++) {
          //create segments to build concept
          teachingDisplay.push(createSegment(lesson[i][j], i + '-' + j));
        }
      }
      return teachingDisplay;
    }
  }

  //create an individual segment for a concept
  function createSegment(segment, key) {
    if (segment) {
      if (segment.startsWith('{br}')) {
        return (
        <div key={key} >
          <br/>
        </div>);
      } else if (segment.startsWith('{str}')) {
        return (
        <span key={key} className="main-text-color heading">
          {segment.slice(5)}
        </span>);
      } else if (segment.startsWith('{il}')) {
          return null
      } else if (segment.startsWith('{bl}')) {
        return (
          <MathJax.Provider input="tex" key={key}>
            <MathJax.Node className='heading' formula={`\\color{gold}{${segment.slice(4)}}`}/>
          </MathJax.Provider>
        )
      }
    }
  }
}

export default SolveView