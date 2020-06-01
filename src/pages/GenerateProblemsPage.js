import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { setTeacher } from '../store/Actions';
import { Accordion } from 'react-accessible-accordion'
import { Link } from 'react-router-dom';
import AdView from '../components/AdView';
import BackToTeachingView from '../components/teaching-views/BackToTeachingView'
import ProblemGenerationView from '../components/teaching-views/ProblemGenerationView';
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
          <BackToTeachingView teacher={teacher}/>
          <div className='center-text text-margins'><AdView /></div>
          <h1 className='large-left-margin'>
            Generate {teacher.teaching.displayNameSingular} Problems:
          </h1>
          <div className='center-text'>
          <Link to="/" className="link">
            Generate Problem Set
          </Link>
          </div>
          <h1 className='large-left-margin'>Select Your Problems:</h1>
          <div className='center-text'>
          <Link to="/" className="link">
            Generate Problems from Selection
          </Link>
          </div>
          {teacher.teaching.methods.map((method, index) => {
          return (
              <ProblemGenerationView method={method} key={index} number={index+1}/>
          )
          })}
          <br></br>
          <br></br>
          <br></br>
      </Accordion>
      )
    } else if (teacher == undefined) {
      return null
    }
}
export default GenerateProblemsPage