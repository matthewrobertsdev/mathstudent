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
    this.state={latex: ""};
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
        <br></br>
        <br></br>
        <h1>Create {this.props.teaching.displayNamePlural}</h1>
        Enter numbers as whole numbers or fractions.  If you want a demoninator, type '/' to sepaarate the numerator from the denominator.
        <br></br>
        <br></br>
        <br></br>
        {this.createCreatorViews()}
      </div>

    );
  }

  createCreatorViews() {
    if (this.props.teaching.creationMethodSignatures === undefined) {
      console.log('creation methods are undefined');
      return;
    }
    const creatorViews = this.props.teaching.creationMethodSignatures.map((arg) => {
      return (
        <div>
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