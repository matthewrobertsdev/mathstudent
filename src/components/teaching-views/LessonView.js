import React from 'react'
import MathJax from 'react-mathjax'

// the view where the solving is displayed
const LessonView = (props) => {

  //render the lesson
  return (
    <div>
      {createSolveView()}
    </div>
  )

  //create the view
  function createSolveView() {
    if (props.teacher) {
      return (
        <div>
          {/*the heading*/}
          <h1 className='large-left-margin'>
            {props.teacher.teaching.displayNameSingular} {props.type}: {getMethodName()}
          </h1>
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
    props.teacher.teaching.methods.forEach(method => {
      if (method[1] === props.params.method) {
        methodName = method[0]
      }
    })
    return methodName
  }

  //create the display of the lesson
  function displayLesson() {
    let teachingDisplay = []
    //create lesson for method with arguments
    for (let i = 0; i < props.lesson.length; i++) {
      //create concept
      for (let j = 0; j < props.lesson[i].length; j++) {
        //create segments to build concept
        teachingDisplay.push(createSegment(props.lesson[i][j], i + '-' + j));
      }
    }
    return teachingDisplay;
  }

  //create an individual segment for a concept
  function createSegment(segment, key) {
    if (segment) {
      if (segment.startsWith('{h}')) {
        return (
          <h1 key={key} className="large-left-margin">
            {segment.slice(3)}
          </h1>);
      } else if (segment.startsWith('{br}')) {
        return (
          <div key={key} >
            <br />
          </div>);
      } else if (segment.startsWith('{str}')) {
        return (
          <span key={key} className="main-text-color heading">
            {segment.slice(5)}
          </span>);
      } else if (segment.startsWith('{$il}')) {
        const math = segment.split('{$il}')
        return (
          <span aria-label={math[2]} key={key}>
            <MathJax.Provider input="tex" >
              <MathJax.Node inline aria-hidden='true' className='heading' formula={`\\color{white}{${math[1]}}`} />
            </MathJax.Provider>
          </span>
        )
      } else if (segment.startsWith('{$bl}')) {
        const math = segment.split('{$bl}')
        return (
          <span aria-label={math[2]} key={key}>
            <MathJax.Provider input="tex" >
              <MathJax.Node aria-hidden='true' className='heading' formula={`\\color{white}{${math[1]}}`} />
            </MathJax.Provider>
          </span>
        )
      }
    }
  }
}

export default LessonView