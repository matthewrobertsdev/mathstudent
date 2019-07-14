import React from 'react';
import { connect } from 'react-redux';
import {getTeaching, clearTeaching} from '../Actions';
import Creator_View from './CreatorView';
import './app.css';

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
      },
      clearTeaching: () => {
        dispatch(clearTeaching());
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
        const { match: { params } } = this.props;
        const { getTeaching} = this.props;
        console.log(params.teachingName);
        getTeaching(params.teachingName);
      }

      componentWillUnmount(){
        const { clearTeaching} = this.props;
        clearTeaching();
      }

      render() {
        return(
  
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
              {this.createCreatorViews()}
          </div>
  
        );
      }

      createCreatorViews(){
        if (this.props.teaching.creationMethodSignatures==undefined){
          return;
        }
        console.log("abcd1");
        console.log(this.props.teaching);
        console.log("abcd2");
        const creatorViews = this.props.teaching.creationMethodSignatures.map( (arg) => {
          return (
              <div>
              <Creator_View methodSignature={arg}></Creator_View>
              <br></br>
              <br></br>
              </div>
          );
        });
        return creatorViews;
      }

}

const Teaching_View=connect(mapStateToProps,mapDispatchToProps)(TeachingView)

export default Teaching_View;