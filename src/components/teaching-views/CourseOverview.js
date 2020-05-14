import React from 'react';
import TeachingsOverview from './TeachingsOverview'
//displays course name and TeachingOverview with links to topics
const CourseOverview = (props) => {
  return (
    <span>
      {/* course name in heading */}
      <h1 className="heading-text-size">
        {props.course.name}
      </h1>
      {/* all topics in course as links */}
      <TeachingsOverview topics={props.course.topics} />
    </span>
  )
}
export default CourseOverview