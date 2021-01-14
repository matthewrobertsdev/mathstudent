import React, { useState } from 'react';
import { Accordion } from 'react-accessible-accordion'
import AdView from '../components/AdView';
import BackToTeachingView from '../components/teaching-views/BackToTeachingView'
import ProblemGenerationView from '../components/teaching-views/ProblemGenerationView';
import UncreatedTeachingView from '../components/teaching-views/UncreatedTeachingView';
import { getTeacher } from '../store/Actions';
// genrate a problem set for the entire topic or for individual subtopics
const GenerateProblemsPage = (props) => {
  const { match: { params } } = props;
  document.title = `Generate ${params.teachingName} Problems`
  //state
  const [teacher, setTeacher] = useState(false);
  getTeacher(params.teachingName, setTeacher)
  if (teacher) {
    return (
      <main>
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
          {/*<BackToTeachingView teacher={teacher} />*/}
          <br/>
          <br/>
          <div className='center-text text-margins'>
            <AdView />
          </div>
          <h1 className='large-left-margin'>
            Generate {teacher.teaching.displayNameSingular} Problems:
          </h1>
          {/* one ProblemGenerationView for every method in teacher's teaching */}
          {teacher.teaching.methods.map((method, index) => {
            return (
              <ProblemGenerationView teacher={teacher} method={method} key={index} 
              number={index + 1} from='GenerateProblems'/>
            )
          })}
          <br></br>
          <br></br>
          <br></br>
        </Accordion>
      </main>
    )
  } else if (teacher===false){
    //if teacher can't be retreived
    return <UncreatedTeachingView/>
  }
}
export default GenerateProblemsPage