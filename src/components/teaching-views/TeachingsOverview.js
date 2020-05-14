import React from 'react';
import TeachingLink from '../links/TeachingLink'
//create a series of TeachingLinks based on topics passed in
const TeachingsOverview = (props) => {
  //if topics is null return null
  if (props.topics == null) {
    return null;
  }
  //else return series of TeachingLinks
  return props.topics.map((topic, index) => {
    return (
      <div key={index} i={index}>
        {/* create TeachingLink from topic */}
        <TeachingLink topic={topic}></TeachingLink>
        <br></br>
      </div>
    );
  });
}
export default TeachingsOverview;