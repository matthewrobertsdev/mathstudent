import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CourseOverview from '../components/teaching-views/CourseOverview'
import '../styles/app.css'
//shows courses in sections
//courses have a title, and a list of topics
const CurrciulumPage = (props) => {
  //update page title on navigation to page
  useEffect(() => { document.title = "Curriculum" })
  //get the curriculum (courses)
  const curriculum = useSelector(state => state.teaching.curriculum)
  //if curriculm isn't updated from store yet, return null
  if (curriculum == null) {
    return null
  } else {
    return (
      //else create the course views
      <main className='subject-view'>
        {/*create course GUIs*/}
        {curriculum.map((course, index) => {
          return (
            <div key={index}>
              {/*create CourseOverview*/}
              <CourseOverview course={course} />
              <br></br>
            </div>
          );
        })}
      </main>
      );
  }
}
export default CurrciulumPage;