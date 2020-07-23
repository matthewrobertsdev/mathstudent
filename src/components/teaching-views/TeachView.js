import React, { useState, useEffect } from 'react'
import { getTeacher } from '../../store/Actions'
import LessonView from './LessonView'
import { useSelector } from 'react-redux'

// the view where the solving is displayed
const SolveView = (props) => {

  let jwt = useSelector(state => state.auth.jwt)

  //set-up state
  const [teacher, setTeacher] = useState(undefined);
  //get the teacher
  getTeacher(props.params.teachingName, setTeacher)
  const [lesson, setLesson] = useState([])

  //get the lesson
  useEffect(() => {
    if (teacher !== undefined && teacher!==false&&props.params.teachingName!==false) {
      if (typeof teacher[props.params.method] === 'function') {
        setLesson(teacher[props.params.method]())
        fetch(`http://localhost:9000/teachings/${
        props.params.teachingName}/${
        props.params.method}`, {method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({jwt: jwt})}).then(
        res => res.json()
      ).then(
        data =>console.log(data)
      ).catch(
        err => console.log(err)
      )
      }
    }
  }, [teacher, props.params.method, props.params.parameters, 
    props.params.teachingName])

  //render the lesson
  return (
    <div>
      <LessonView params={props.params} teacher={teacher} lesson={lesson} type="Teaching"/>
      <br/>
    </div>
  )

}

export default SolveView

/*
<Accordion allowZeroExpanded={true} allowMultipleExpanded={true} preExpanded={[]}>
      <AccordionItem uuid='about'>
        <AccordionItemHeading className="heading large-heading-size">
          <AccordionItemButton>
            {teacher.teaching.displayNameSingular} Teaching: {getMethodName()}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <LessonView params={props.params} teacher={teacher} lesson={lesson} type="Teaching"/>
            <br/>
            <br/>
            <div className='center-text text-margins'>
              <AdView />
            </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
*/