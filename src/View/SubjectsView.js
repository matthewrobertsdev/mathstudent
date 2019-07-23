import React from 'react';
import { connect } from 'react-redux';
import {getTopics, updateURL} from '../Actions';
import TopicView from './TopicView';
import './app.css';

//pass in array of topics in an object
const mapStateToProps = (state) => {
  return {
    topics: state.topics
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    //gets array of topics in an object
    getTopics: () => {
      console.log("this works");
      dispatch(getTopics());
    },
    updateURL: () => {
      console.log("does this work");
      dispatch(updateURL());
    }
  }
};

class UnconnectedSubjectView extends React.Component{

      //get topics when the component will mount
      componentWillMount() {
        const { getTopics, updateURL} = this.props;
        getTopics();
        updateURL();
      }

      render() {
        return(
          <div className='SubjectView'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          {this.createSubjectsList()}</div>
        );
      }

      //takes array of topics from props and makes a list of Topic_Views
      createSubjectsList(){
        console.log(this.props.topics);
        if (this.props.topics==null){
          return;
        }
        const subjects_list = this.props.topics.map( (topic) => {
          return (
              <div>
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