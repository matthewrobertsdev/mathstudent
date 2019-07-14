import React from 'react';
import { connect } from 'react-redux';
import {getTopics} from '../Actions';
import Topic_View from './TopicView';
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
      dispatch(getTopics());
    }
  }
};

class SubjectView extends React.Component{

    constructor(props) {
        super(props);
        
      }

      //get topics when the component will mount
      componentWillMount() {
        console.log('component will mount');
        const { getTopics} = this.props;
        getTopics();
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
              <Topic_View topic={topic}></Topic_View>
              <br></br>
              </div>
          );
        });
        return subjects_list
      }
  

}

const subjects_view=connect(mapStateToProps, mapDispatchToProps)(SubjectView)

export default subjects_view;