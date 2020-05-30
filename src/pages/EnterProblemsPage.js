import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { setTeacher } from '../store/Actions';
import ProblemEntryView from '../components/teaching-views/ProblemEntryView';
import { Accordion } from 'react-accessible-accordion'
import BackToTeachingView from '../components/teaching-views/BackToTeachingView'
import AdView from '../components/AdView';
const EnterProblemsPage = (props) => {
  const dispatch = useDispatch()
  const { match: { params } } = props;
  dispatch(setTeacher(params.teachingName));
  document.title=`Enter ${params.teachingName} Problems`
  const teacher = useSelector(state => state.teaching.teacher)

  console.log(teacher)
    if (teacher) {
      return (
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
          <BackToTeachingView teacher={teacher}/>
          <div className='center-text text-margins'><AdView /></div>
          <h1 className='large-left-margin'>
            Enter {teacher.teaching.displayNameSingular} Problems
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