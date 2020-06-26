import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MethodView from '../components/teaching-views/MethodView'
import AdView from '../components/AdView'
import { getTeacher } from '../store/Actions';
import UncreatedTeachingView from '../components/teaching-views/UncreatedTeachingView'
import TOCAccordianItem from '../components/teaching-views/TOCAccordianItem'
import { Accordion } from 'react-accessible-accordion';

//Page for solving a problem
const MethodPage = (props) => {
  const { match: { params } } = props;
  //set page title
  document.title = params.teachingName + " Problem Teaching"

  const [teacher, setTeacher] = useState(undefined);
  getTeacher(params.teachingName, setTeacher)
  if (teacher) {
    return (
      <main>
        {/*a back link or nothing*/}
        {createBackLink()}
        {/* an ad */}
        <div className='center-text text-margins'>
          <AdView />
        </div>
        <h1 className='large-left-margin'>{getMethod()[0]}</h1>
        <h1 className='large-left-margin'>Try It Out:</h1>
        <MethodView teacher={teacher} method={getMethod()} from='teaching'/>
        <Accordion allowZeroExpanded={true}>
          <TOCAccordianItem teacher={teacher} />
        </Accordion>
      </main>
    )
  } else if (teacher === false) {
    return (
      <main>
        <UncreatedTeachingView className='center-text' />
      </main>
    )
  } else {
    return null
  }
  //if there is a valid location to go back to, it will be described in this link
  function createBackLink() {
    return (
      <h1 className='large-left-margin'>
        <Link to={`/teachings/${params.teachingName}`} className='link-heading'>
          Go to {params.teachingName}'s  Page
        </Link>
      </h1>
    )
  }

  function getMethod() {
    return teacher.teaching.methods.find(
      method => {
        return method[1] === params.method 
      }
    )
  }
}
export default MethodPage