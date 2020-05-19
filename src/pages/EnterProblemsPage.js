import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { setTeacher } from '../store/Actions';
import ProblemEntryView from '../components/teaching-views/ProblemEntryView';
const EnterProblemsPage = (props) => {
  const dispatch = useDispatch()
  const { match: { params } } = props;
  dispatch(setTeacher(params.teachingName));
  const teacher = useSelector(state => state.teaching.teacher)

  console.log(teacher)
    if (teacher) {
      return (
      <div>
        <h1 className className='large-left-margin'>{teacher.teaching.displayNamePlural}</h1>
        {teacher.teaching.methods.map((method, index) => {
        return (
          <div key={index}>
            <ProblemEntryView method={method}></ProblemEntryView>
            <br></br>
          </div>
        );
      })}
      </div>
      )
    } else if (teacher == undefined) {
      return null
    }
}
export default EnterProblemsPage