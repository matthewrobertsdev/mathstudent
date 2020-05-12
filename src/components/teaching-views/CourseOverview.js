import React from 'react';
import TeachingsOverview from './TeachingsOverview'

const CourseOverview = (props) => {
    return (
        <span>
    <h1 className="heading-text-size">{props.course.name}</h1>
          {/*all topics in course*/}
          {<TeachingsOverview topics={props.course.topics} />}
          </span>
    )
}
export default CourseOverview