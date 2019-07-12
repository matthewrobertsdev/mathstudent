import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getTeaching} from './Actions';

//pass in array of topics in an object
const mapStateToProps = (state) => {
    return {
      teaching: state.teaching
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      //will get teaching from home of teachings once implemented
      getTeaching: (teachingName) => {
          dispatch(getTeaching(teachingName));
        console.log("Link clicked")
      }
    }
  };

//for displaying a link to a teaching, that displays its name and loads that teaching when clicked
class TeachingView extends React.Component{

    constructor(props) {
        super(props);
      }

      componentWillMount() {
        console.log('component will mount');
        const { getTeaching} = this.props;
        getTeaching("LineIn2D");
      }

      render() {
        return(
  
            //will take user to teaching with these names.  Will get teaching from home first.
          <div>
              Teaching Coming Soon!
          </div>
  
        );
      }

}

const Teaching_View=connect(mapStateToProps,mapDispatchToProps)(TeachingView)

export default Teaching_View;