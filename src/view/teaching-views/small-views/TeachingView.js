import React from 'react';
import TopicView from './TopicView'
const TeachingView=(props) => {
    return (createView(props));
    function createView(){
    { if (props.topics==null) { return null; }
        const subjectsList = props.topics.map( (topic, index) => {
          return (
              <div key={index} i={index}>
              <TopicView topic={topic}></TopicView>
              <br></br>
              </div>
          );
        });
        return subjectsList
      }
    }
    }
export default TeachingView;