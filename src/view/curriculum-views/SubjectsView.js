import React from 'react';
import { connect } from 'react-redux';
import {getTopics, updateURL} from '../../manager/Actions';
import TopicView from './TopicView';
import '../views-general/app.css';
const mapStateToProps = (state) => { return { topics: state.defaultReducer.topics } };
const mapDispatchToProps = (dispatch) => {
  return { getTopics: () => { dispatch(getTopics()); }, updateURL: () => { dispatch(updateURL()); } } };
class UnconnectedSubjectView extends React.Component{
      componentWillMount() { this.props.getTopics(); this.props.updateURL(window.location.href);}
      render() {
        return (
          <div className='subject-view'>
            <br></br><br></br><br></br><br></br>
          {this.createSubjectsList()}
          </div>
        );
      }
      createSubjectsList() { if (this.props.topics==null) { return; }
        const subjectsList = this.props.topics.map( (topic, index) => {
          return (
              <div key={index} i={index}><TopicView topic={topic}></TopicView><br></br></div>
          );
        });
        return subjectsList
      }
}
const SubjectsView=connect(mapStateToProps, mapDispatchToProps)(UnconnectedSubjectView)
export default SubjectsView;