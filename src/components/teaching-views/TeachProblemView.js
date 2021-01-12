import React, { useState, useEffect } from 'react'
import { getTeacher } from '../../store/Actions'
import LessonView from './LessonView'
import { useSelector } from 'react-redux'

// the view where the solving is displayed
const TeachProblemView = (props) => {

  let jwt = useSelector(state => state.auth.jwt)

  //set-up state
  const [teacher, setTeacher] = useState(undefined);
  //get the teacher
  getTeacher(props.params.teachingName, setTeacher)
  const [lesson, setLesson] = useState([])

  //get the lesson
  useEffect(() => {
    if (teacher !== undefined) {
      if (typeof teacher[props.params.method] === 'function') {
        teacher.goodInput=false
        setLesson(teacher[props.params.method](props.params.parameters.split('@')))
      }
    }
  }, [teacher, props.params.method, props.params.parameters])

  //too update recents if jwt was valid
  useEffect(() => {
    if (teacher!==undefined&&teacher.goodInput&&props.params.teachingName!=='false'){
      let unescapedArgs=props.params.parameters
      unescapedArgs=unescapedArgs.split('@')
      let escapedArgs=''
      for (let i=1; i<unescapedArgs.length; i++){
        escapedArgs+=`%40${unescapedArgs[i]}`
      }
      fetch(`http://localhost:9000/teachings/${
        props.params.teachingName}/${
        props.params.method}/${escapedArgs}`, {method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({jwt: jwt})}
        ).then(
        res => res.json()
      ).then(
        data =>console.log(data)
      ).catch(
        err => console.log(err)
      )
    }
  }, [lesson, teacher, props.params, jwt])

  //render the lesson
  return (
    <div>
      <LessonView params={props.params} teacher={teacher} lesson={lesson} type="Solution"/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )

}

export default TeachProblemView