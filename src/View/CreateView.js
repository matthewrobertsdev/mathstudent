import React from 'react';
import { connect } from 'react-redux';
import { getTeaching, clearTeaching, updateURL } from '../Actions';
import CreatorView from './CreatorView';
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

  componentDidMount() {
    
  }

  componentWillUnmount() {
    const { clearTeaching } = this.props;
    clearTeaching();
  }

  render() {
    return (

      <div>
        <br></br>
        <br></br>
        <br></br>
        <h1>Create {this.props.teaching.displayNamePlural}</h1>
        Enter numbers as integers or fractions.  If you want a fraction, type '/' to separate the deominator from the numerator.
        <br></br>
        <br></br>
        <br></br>
        {this.createCreatorViews()}
      </div>

    );
  }

  createCreatorViews() {
    if (this.props.teaching.creationMethodSignatures === undefined) {
      return;
    }
    const creatorViews = this.props.teaching.creationMethodSignatures.map((arg, index) => {
      return (
        <div key={index} id={index}>
          <CreatorView methodSignature={arg}></CreatorView>
          <br></br>
          <br></br>
        </div>
      );
    });
    return creatorViews;
  }

}

const CreateView = connect(mapStateToProps, mapDispatchToProps)(UnconnectedCreateView)

export default CreateView;