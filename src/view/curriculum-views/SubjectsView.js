import React from 'react';
import { connect } from 'react-redux';
import {getTopics, updateURL} from '../../manager/Actions';
import TopicView from './TopicView';
import '../views-general/app.css';
/* pass in array of topics in an object */
const mapStateToProps = (state) => { return { topics: state.topics } };
const mapDispatchToProps = (dispatch) => {
  return { /* gets array of topics in an object */
    getTopics: () => { dispatch(getTopics()); },
    updateURL: () => { dispatch(updateURL()); } } };
class UnconnectedSubjectView extends React.Component{
      /* get topics when the component will mount */
      componentWillMount() { const { getTopics, /*updateURL*/} = this.props; getTopics(); /*updateURL();*/ }
      render() {
        return (
          <div className='SubjectView'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          {this.createSubjectsList()}
          </div>
        );
      }
      /* takes array of topics from props and makes a list of Topic_Views */
      createSubjectsList() { if (this.props.topics==null) { return; }
        const subjects_list = this.props.topics.map( (topic, index) => {
          return (
              <div key={index} i={index}>
              <TopicView topic={topic}></TopicView>
              <br></br>
              </div>
          );
        });
        return subjects_list
      }
}
const SubjectsView=connect(mapStateToProps, mapDispatchToProps)(UnconnectedSubjectView)
export default SubjectsView;