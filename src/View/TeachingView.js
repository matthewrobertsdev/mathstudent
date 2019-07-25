import React from 'react';
import { connect } from 'react-redux';
import {getTeaching, clearTeaching} from  '../Actions';
import './app.css';

const mapStateToProps = (state) => {
  return {
    teaching: state.teaching
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    //gets teaching from home of teaching
    getTeaching: (teachingName) => {
      dispatch(getTeaching(teachingName));
    },
    clearTeaching: () => {
      dispatch(clearTeaching());
    }
  }
};
class UnconnectedTeachingView extends React.Component{
    constructor(props) {
        super(props);
        this.state={};
        console.log(this.props.teaching);
      }
      componentWillMount() {
        const { match: { params } } = this.props;
        const { getTeaching } = this.props;
        getTeaching(params.teachingName);
      }
      render() {
        return(
            //will take user to teaching with these names.  Will get teaching from home first.
          <div>
            <br></br>
            <br></br>
            <br></br>
            <h3>{this.props.teaching.objectName}</h3>
            <br></br>
            <br></br>
            <br></br>
          </div>
        );
      }
      
}
const TeachingView=connect(mapStateToProps, mapDispatchToProps)(UnconnectedTeachingView);
export default TeachingView;