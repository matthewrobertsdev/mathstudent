import React, { useState } from 'react';
import ProblemEntryView from '../components/teaching-views/ProblemEntryView';
import { Accordion } from 'react-accessible-accordion'
import BackToTeachingView from '../components/teaching-views/BackToTeachingView'
import AdView from '../components/AdView';
import { getTeacher } from '../store/Actions';
// a page for entering problems based on the methods
const EnterProblemsPage = (props) => {
  const { match: { params } } = props;
  document.title = `Enter ${params.teachingName} Problems`
  //state
  const [teacher, setTeacher] = useState(undefined);
  getTeacher(params.teachingName, setTeacher)
  if (teacher) {
    return (
      <main>
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
          <BackToTeachingView teacher={teacher} />
          <div className='center-text text-margins'><AdView /></div>
          <h1 className='large-left-margin'>
            Enter {teacher.teaching.displayNameSingular} Problems
          </h1>
          {/* one ProblemEntryView for each of the teacher's teaching's methods */}
          {teacher.teaching.methods.map((method, index) => {
            return (
              <ProblemEntryView method={method} key={index} number={index + 1} teacher={teacher}/>
            );
          })}
        </Accordion>
      </main>
    )
  } else if (teacher === undefined) {
    return null
  }
}
export default EnterProblemsPage