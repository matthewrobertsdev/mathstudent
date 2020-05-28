import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { setTeacher } from '../store/Actions';
import { Accordion } from 'react-accessible-accordion'
import { Link } from 'react-router-dom';
const GenerateProblemsPage = (props) => {
  const dispatch = useDispatch()
  const { match: { params } } = props;
  dispatch(setTeacher(params.teachingName));
  document.title=`Generate ${params.teachingName} Problems`
  const teacher = useSelector(state => state.teaching.teacher)

  console.log(teacher)
    if (teacher) {
      return (
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
          <br></br>
          <h1 className='large-left-margin'>
            Generate <Link to={'/teachings/'+teacher.teaching.objectName} className='link-heading'>
              {teacher.teaching.displayNameSingular}
            </Link> Problems
          </h1>
      </Accordion>
      )
    } else if (teacher == undefined) {
      return null
    }
}
export default GenerateProblemsPage