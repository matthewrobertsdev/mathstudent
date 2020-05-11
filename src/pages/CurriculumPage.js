import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TeachingsOverview from '../components/teaching-views/TeachingsOverview'
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
    createCourseViews(props)
  );
}
  function createCourseViews(props) {
    return (
      <div className='subject-view'>
        <br></br>
    {/*create course GUIs*/}
   {curriculum.map((course, index) => {
      console.log(curriculum)
      return (
        <div key={index}>
          {/*course name*/}
          <h1 className="heading-text-size">{course.name}</h1>
          {/*all topics in course*/}
          {<TeachingsOverview topics={course.topics} />}
          <br></br>
        </div>
      );
    })}
     </div>)
  }
}
export default CurrciulumPage;