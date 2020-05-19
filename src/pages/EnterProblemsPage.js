import React from 'react';
import {useDispatch } from 'react-redux';
import { setTeacher } from '../store/Actions';
const EnterProblemsPage = (props) => {
  const dispatch = useDispatch()
  const { match: { params } } = props;
  dispatch(setTeacher(params.teachingName));
  return (
    null
  )
}
export default EnterProblemsPage