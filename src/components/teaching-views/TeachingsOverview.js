import React from 'react';
import TeachingLink from '../links/TeachingLink'
const TeachingsOverview=(props) => {
    return (createView(props));
    function createView(){
    { if (props.topics==null) { return null; }
        const subjectsList = props.topics.map( (topic, index) => {
          return (
              <div key={index} i={index}>
              <TeachingLink topic={topic}></TeachingLink>
              <br></br>
              </div>
          );
        });
        return subjectsList
      }
    }
    }
export default TeachingsOverview;