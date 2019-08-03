import React from 'react';
import { connect } from 'react-redux';
import { getTeaching, clearTeaching, updateURL } from '../Actions';
import CreatorView from './CreatorView';
import isMobile from '../Model/utilities/IsMobile';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './app.css';
/*
This view is for the UI for creating a MathTeachingObject
*/
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
    },
    updateURL: () => {
      dispatch(updateURL());
    }
  }
};
//for displaying a link to a teaching, that displays its name and loads the CreateView for it when clicked
class UnconnectedCreateView extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  componentWillMount() {
    const { match: { params } } = this.props;
    const { getTeaching, updateURL } = this.props;
    getTeaching(params.teachingName);
    updateURL();
  }
  componentWillUnmount() {
    const { clearTeaching } = this.props;
    clearTeaching();
  }
  render() {
    return (
      <div>
        <br></br>
        <div className='center-text'>
        <h1 className="CreateView">Create {this.props.teaching.displayNamePlural}</h1>
        <h3 className="Heading">Enter numbers as integers or fractions.  If you want a fraction, type '/' to separate the denominator from the numerator.</h3>
        </div>
        <br></br>
        {this.createCreatorViews()}
        {this.addKeyboardForMobile()}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
  createCreatorViews() {
    if (this.props.teaching.creationMethodSignatures === undefined) {
      return;
    }
    const creatorViews = this.props.teaching.creationMethodSignatures.map((arg, index) => {
      return (
        <div key={index}>
          <CreatorView className='CreatorView' methodSignature={arg} id={this.createID(index)} classID={this.createID(index)}></CreatorView>
          <br></br>
        </div>
      );
    });
    return creatorViews;
  }
  addKeyboardForMobile(){
    if( isMobile() ){
      return <div className='keyboard-container'>
        <Keyboard className='Keyboard' layout={{
            default: [
              " 1 2 3 4 5",
              " 6 7 8 9 0",
              " . - / {bksp}"
            ]}}/>
      </div>
   }
  }
  createID(index){
    return this.props.teaching.objectName+"-"+index;
  }
}
const CreateView = connect(mapStateToProps, mapDispatchToProps)(UnconnectedCreateView)
export default CreateView;