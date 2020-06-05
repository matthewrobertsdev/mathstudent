import React, { useState } from 'react';
import { Accordion } from 'react-accessible-accordion'
import { Link } from 'react-router-dom';
import AdView from '../components/AdView';
import BackToTeachingView from '../components/teaching-views/BackToTeachingView'
import ProblemGenerationView from '../components/teaching-views/ProblemGenerationView';
import { getTeacher } from '../store/Actions';
const GenerateProblemsPage = (props) => {
  const { match: { params } } = props;
  document.title = `Generate ${params.teachingName} Problems`
  const [teacher, setTeacher] = useState(undefined);
  getTeacher(params.teachingName, setTeacher)
  if (teacher) {
    return (
      <main>
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
          <BackToTeachingView teacher={teacher} />
          <div className='center-text text-margins'>
            <AdView />
          </div>
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
              <ProblemGenerationView method={method} key={index} number={index + 1} />
            )
          })}
          <br></br>
          <br></br>
          <br></br>
        </Accordion>
      </main>
    )
  } else if (teacher === undefined) {
    return null
  }
}
export default GenerateProblemsPage