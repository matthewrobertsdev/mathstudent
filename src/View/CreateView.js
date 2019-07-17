import React from 'react';
import { connect } from 'react-redux';
import {getTeaching, clearTeaching} from '../Actions';
import Creator_View from './CreatorView';
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

//for displaying a link to a teaching, that displays its name and loads the CreateView for it when clicked
class TeachingView extends React.Component{

    constructor(props) {
        super(props);
      }

      componentWillMount() {
        const { match: { params } } = this.props;
        const { getTeaching} = this.props;
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

const Creation_View=connect(mapStateToProps,mapDispatchToProps)(TeachingView)

export default Creation_View;