import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { setTeacher } from '../store/Actions';
import ProblemEntryView from '../components/teaching-views/ProblemEntryView';
import { Accordion } from 'react-accessible-accordion'
import { Link } from 'react-router-dom';
const EnterProblemsPage = (props) => {
  const dispatch = useDispatch()
  const { match: { params } } = props;
  dispatch(setTeacher(params.teachingName));
  const teacher = useSelector(state => state.teaching.teacher)

  console.log(teacher)
    if (teacher) {
      return (
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
          <br></br>
          <h1>
            <Link to={'/teachings/'+teacher.teaching.objectName} className='link-heading large-left-margin'>
              {teacher.teaching.displayNamePlural}
            </Link>
          </h1>
          {teacher.teaching.methods.map((method, index) => {
          return (
              <ProblemEntryView method={method} key={index}/>
          );
      })}
      </Accordion>
      )
    } else if (teacher == undefined) {
      return null
    }
}
export default EnterProblemsPage