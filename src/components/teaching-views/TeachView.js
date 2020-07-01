import React, { useState, useEffect } from 'react'
import { getTeacher } from '../../store/Actions'
import LessonView from './LessonView'

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
        setLesson(teacher[props.params.method]())
      }
    }
  }, [teacher, props.params.method, props.params.parameters])

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