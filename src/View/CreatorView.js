import React from 'react';
import { connect } from 'react-redux';
import NumberInput from './NumberInput';
import {createTeaching} from '../Actions'
import InputValidator from '../Model/InputValidator';
import { withRouter } from "react-router-dom";
import './app.css';
/* gets the teaching for this method */
const mapStateToProps = (state) => { return { teaching: state.teaching, topics: state.topics } };
/* so that the creator view can get the teaching */
const mapDispatchToProps = (dispatch) => { return { createTeaching: (methodInfo) => { 
  dispatch(createTeaching(methodInfo)); } } };
/* for creating a teaching, but not connected yet */
class UnconnectedCreatorView extends React.Component{
    constructor(props) {
        super(props);
        /* methods strings to create view, calling strings to call method */
        this.state={methodSignature: this.props.methodSignature,
          callingStrings: [], key: undefined};
        this.state.callingStrings=this.createCallingStrings();
        this.state.callingStrings[0]=this.props.methodSignature[1];
        this.textHandler = this.textHandler.bind(this);
      }
      render() {
        return(
          /* will take user to teaching with these names.  Will get teaching from home first. */
          <div className='CreatorView'>
              <h3>{this.props.methodSignature[0]}</h3>
              {this.createView()}<button className="actionButton" onClick={() => this.handleClick()}>
                Create a {this.props.teaching.displayNameSingular}</button>
          </div>
        );
      }
      createView(){
        var creatorView=[];
        var column=1;
        for (var i=0; i<this.props.methodSignature.length; i++){
          if (i<2) { /* do nothing */ }
          else if (i%2===0) {
            creatorView.push(<span className='small-right-margin creator-text-size' 
            key={i} id={i}>{this.props.methodSignature[i]+':'}</span>);
          } else {
            creatorView.push(<span key={i} id={i}><span className='medium-right-margin'>
            {this.createNumberInput(column)}</span><br className='hide-for-not-small'></br>
            </span>);
            column++
          }
        }
        return creatorView;
      }
      createCallingStrings(){
        var callingStrings=[];
        for (var i=0; i<this.props.methodSignature.length/2; i++){
          callingStrings.push('');
        };
        return callingStrings;
      }
      //bring index to array
      createNumberInput(column){
          let fractionInput=<NumberInput gridID={this.props.row+"-"+column} 
          index={column} textHandler={(column, value) => this.textHandler(column, value)} activateInputHandler={this.props.activateInputHandler}>
          </NumberInput>;
        return fractionInput;
      }
      textHandler(i, value){
        let tempCallingStrings=this.state.callingStrings
        tempCallingStrings[i]=value;
        this.setState(previousState => ({ ...previousState, callingStrings: tempCallingStrings }))
      }
  handleClick(){
    const { createTeaching } = this.props;
      if(InputValidator.handleAttemptedFraction(this.state.callingStrings)){
        createTeaching(this.state.callingStrings);
        this.props.history.push(`/teaching/${this.props.teaching.objectName}`);
      }
    }
}
const CreatorView=connect(mapStateToProps, mapDispatchToProps)((withRouter)(UnconnectedCreatorView));
export default CreatorView;