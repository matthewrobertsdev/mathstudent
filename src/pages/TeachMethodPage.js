import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TeachMethodView from '../components/teaching-views/TeachMethodView'
import MethodView from '../components/teaching-views/MethodView'
import AdView from '../components/AdView'
import { getTeacher } from '../store/Actions';
import UncreatedTeachingView from '../components/teaching-views/UncreatedTeachingView'
import TOCAccordianItem from '../components/teaching-views/TOCAccordianItem'
import { Accordion } from 'react-accessible-accordion';

//Page for solving a problem
const TeachMethodPage = (props) => {
  const { match: { params } } = props;
  //set page title
  document.title = params.teachingName + " Problem Teaching"
  
  const [teacher, setTeacher] = useState(undefined);
  getTeacher(params.teachingName, setTeacher)
  if (teacher && getMethodIndex()!==-1) {
    return (
      <main>
        {/*a back link or nothing*/}
        {/*createBackLink()*/}
        {/* an ad */}
        <br/><br/>
        <div className='center-text text-margins'>
          <AdView />
        </div>
        <div>
          <TeachMethodView params={params}/>
        </div>
        <br/>
        <div className='center-text text-margins'>
          <AdView />
        </div>
        <h1 className='large-left-margin'>Try It Out:</h1>
        <MethodView teacher={teacher} method={getMethod()} from='teachings' params={params}/>
        <br/>
        <br/>
        <div>
          {providePreviousLink()}
          {provideNextLink()}
        </div>
        <br/>
        <br/>
        <Accordion allowZeroExpanded={true}>
          <TOCAccordianItem teacher={teacher} />
        </Accordion>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    )
  } else if (teacher === false || getMethodIndex()===-1) {
    return (
      <main>
        <UncreatedTeachingView className='center-text' />
      </main>
    )
  } else {
    return null
  }
  //if there is a valid location to go back to, it will be described in this link
  /*
  function createBackLink() {
    return (
      <h1 className='large-left-margin'>
        <Link to={`../../teachings/${params.teachingName}`} className='link-heading'>
          Go to {params.teachingName}'s  Page
        </Link>
      </h1>
    )
  }
  */

  function getMethod() {
    return teacher.teaching.methods.find(
      method => {
        return method[1] === params.method 
      }
    )
  }
  function getMethodIndex(){
    if (teacher===undefined || teacher===false) {
      return -1
    }
    return teacher.teaching.methods.findIndex(
      method => {
        return method[1] === params.method 
      }
    )
  }
  function providePreviousLink(){
    if (getMethodIndex()===-1) {
      return null
    } else if (getMethodIndex()===0) {
      return (
      <Link to={`../${teacher.teaching.objectName}`} className='text-margins link-heading float-left'>
        Previous
      </Link>
      )
    } else {
      return (
      <Link to={`../${teacher.teaching.objectName}/${teacher.teaching.methods[getMethodIndex()-1][1]}`} className='text-margins link-heading float-left'>
        Previous
      </Link>
      )
    }
  }
  function provideNextLink(){
    if (getMethodIndex()===teacher.teaching.methods.length-1) {
      return (
        null
      )
    } else {
      return (
      <Link to={`../${teacher.teaching.objectName}/${teacher.teaching.methods[getMethodIndex()+1][1]}`} className='text-margins link-heading float-right'>
        Next
      </Link>
      )
    }
  }
}
export default TeachMethodPage