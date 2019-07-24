import React from 'react';
import { connect } from 'react-redux';
import { getTeaching, clearTeaching, updateURL } from '../Actions';
import CreatorView from './CreatorView';
import './app.css';
import {MathQuill}  from 'react-mathquill';

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
    window.addEventListener ? window.addEventListener('focus', this.onFoucsChange, true) : window.attachEvent('onfocusout', this.onFoucsChange);  
    window.addEventListener ? window.addEventListener('blur', this.onBlur, true) : window.attachEvent('onblur', this.onBlur);
    
  }

  onFoucsChange(){
    console.log("focused changed");
  }

  onBlur(){
    console.log("focus of element lost");
  }

  componentWillUnmount() {
    const { clearTeaching } = this.props;
    clearTeaching();
  }

  render() {
    return (

      <div onKeyDown={(e) => this.onKeyPressed(e)}>
        <br></br>
        <br></br>
        <br></br>
        <h1>Create {this.props.teaching.displayNamePlural}</h1>
        Enter numbers as fractions.  If you want a demoninator, type '/' to sepaarate the numerator from the denominator.
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
          <CreatorView methodSignature={arg} onChange={this.onChange.bind(this)}></CreatorView>
          <br></br>
          <br></br>
        </div>
      );
    });
    return creatorViews;
  }

  onKeyPressed(e) {
    switch (e.key) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case '/':
        break;
      default:
        e.preventDefault();
    }
    if (this.state.latex.match("\n")&&e.key=='/'){
      e.preventDefault();
    }
    if ( typeof document.activeElement==MathQuill){
      console.log('fraction input');
    } else {
      console.log('not fraction input');
    }
  }
  
  onChange(latex) {
    //this.setState( latex.__controller.container.context.innerText );
    this.state.latex=latex.__controller.container.context.innerText
    console.log(latex.__controller.container.context.innerText);
    console.log(latex);
  }

}

const CreateView = connect(mapStateToProps, mapDispatchToProps)(UnconnectedCreateView)

export default CreateView;