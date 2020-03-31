import React, { useEffect } from 'react';
import {useDispatch, connect } from 'react-redux';
import {getTopics, updateURL} from '../../manager/Actions'
import TopicView from './TopicView'
import '../../styles/app.css'
const mapStateToProps = (state) => { return { topics: state.teacher.topics } };
const CurriculumView = (props) => {
  const dispatch=useDispatch();
  useEffect( () => {dispatch(getTopics()); dispatch(updateURL())})
        return (
          <div className='subject-view'>
            <br></br><br></br><br></br><br></br>
          {createSubjectsList(props)}
          </div>
        );
      function createSubjectsList(props) { if (props.topics==null) { return; }
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
export default connect(mapStateToProps)(CurriculumView);