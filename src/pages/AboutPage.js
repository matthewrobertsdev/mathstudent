import React, { useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import UncreatedTeachingView from '../components/teaching-views/UncreatedTeachingView'
import { getTeacher } from '../store/Actions';
//Page for solving a problem
const AboutPage = (props) => {
  const { match: { params } } = props;
  document.title = params.teachingName + " Teaching"
  const [teacher, setTeacher] = useState(undefined);
  getTeacher(params.teachingName, setTeacher)
  const AboutComponent = React.lazy(() => import(`../components/teachingviews/About${params.teachingName}`));
  if (teacher) {
    return (
      <main className='text-margins'>
        <h1 className='center-text'>{teacher.teaching.displayNamePlural}</h1>
        <Suspense fallback={<div>Loading {teacher.teaching.displayNameSingular} Teaching...</div>}>
          <AboutComponent />
        </Suspense>
      </main>
    )
  } else {
    return (
      <main>
        <UncreatedTeachingView className='center-text' />
      </main>
    )
  }
  //if there is a valid location to go back to, it will be described in this link
  function createBackLink() {
    if (props.location.state && props.location.state.from) {
      if (props.location.state.from === "EnterProblemsPage") {
        return (
          <h1 className='large-left-margin'>
            <Link to={`../../../EnterProblems/${params.teachingName}`} className='link-heading'>
              Go to {params.teachingName}'s Enter Problem Page
            </Link>
          </h1>
        )
      }
    }
  }
  function createSpacer() {
    if (!(props.location.state && props.location.state.from)) {
      return (
        <div>
          <br></br>
          <br></br>
        </div>
      )
    }
  }
}
export default AboutPage