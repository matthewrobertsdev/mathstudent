import React from 'react';
import { connect } from 'react-redux';
import NumberInput from './NumberInput';
import InputValidator from '../../utilities/InputValidator';
import { withRouter } from "react-router-dom";
import '../views-general/app.css';
import ReactModal from 'react-modal';
import {InlineMath } from 'react-katex';
import {createTeaching, createTeachingObject, updateCreationStrings, setDisplayTeaching, 
    setParamaterLabels, updateKeyAndValue, clearTeaching} from '../../manager/Actions';
import deepClone from 'lodash.clonedeep';
/* gets the teaching for this method */
const mapStateToProps = (state) => { return { teacher: state.teacher, topics: state.topics, inputMap: state.inputMap, 
    callingStrings: state.callingStrings, creationStrings: state.creationStrings,
     teachingObjectName: state.teachingObjectName, argumentLabels: state.argumentLabels, simplestForm: state.simplestForm} };
  /* so that the creator view can get the teaching */
  const mapDispatchToProps = (dispatch) =>  { return  { createTeaching: (methodInfo) => { 
    dispatch(createTeaching(methodInfo));  }, updateCreationStrings: (creationStrings) => { 
    dispatch(updateCreationStrings(creationStrings)); }, setDisplayTeaching: (boolean) => { 
    dispatch(setDisplayTeaching(boolean)); }, updateKeyAndValue: (key, value) => { 
    dispatch(updateKeyAndValue(key, value)); }, createTeachingObject: (teachingobjectName, args) => {
    dispatch(createTeachingObject(teachingobjectName, args)); }, setParamaterLabels: (argumentLabels) => {
    dispatch(setParamaterLabels(argumentLabels));}, clearTeaching: () => { 
      dispatch(clearTeaching());}, };}

/* for creating a teaching, but not connected yet */
class UnconnectedLearnerView extends React.Component{
    constructor(props) {
        super(props);
        /* methods strings to create view, calling strings to call method */
        this.state={methodSignature: this.props.methodSignature, key: undefined, creationStrings: 
          this.createCallingStrings(), gridIDs: [], showModal: false, type: 'number', 
          first: true, localTeacher: undefined}
          this.props.creationStrings[0]=this.props.methodSignature[1];
          this.textHandler = this.textHandler.bind(this);
          this.handleOpenModal = this.handleOpenModal.bind(this);
          this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      render() {
        return(
          /* will take user to teaching with these names.  Will get teaching from home first. */
          <div className='center-text'><br></br>
           {/* About section */}
        {/*<span className="main-text-color Heading">{this.props.methodSignature[0]}
        </span>*/}
    {this.createHeading()}
    <div className='CreatorView'>
                {this.createView()}<button className="createButton creator-text-size" onClick={() => this.handleClick()}>
                {this.props.methodSignature[0]}</button>
                <br></br><br></br>
                <ReactModal className="notNumberModal" isOpen={this.state.showModal} >
                <br></br>
                <span classname='creator-text-size'>{this.getErrorString()}</span>
                <br></br><br></br>
                <button className='closeButton button-size' onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
          </div>
</div>
        );
      }
      getErrorString(){
        switch(this.state.type){
          case 'integer': return 'Sorry, those were not all integers or some were left blank.';
          case 'fraction': return 'Sorry, those were not all fractions or some were left blank.';
          case 'decimal': return 'Sorry, those were not all decimals or some were left blank.';
          case 'number': return 'Sorry, those were not all numbers or some were left blank.';
          default: return 'Sorry, those were not all numbers or some were left blank.';
        }
      }
      createView(){
        //this.createCallingStrings();
        var creatorView=[];
        var column=1;
        this.num=0;
        for (var i=0; i<this.props.methodSignature.length; i++){
          if (i<3) { /* do nothing */ }
          else if (i%2!==0) {
            creatorView.push(<span className='small-right-margin creator-text-size' 
            key={i} id={i}>{this.props.methodSignature[i]+': '}</span>);
          } else {
            creatorView.push(<span key={i} id={i}><span className='medium-right-margin creator-text-size'>
            {this.createNumberInput(column-1)}</span><br className='hide-for-big'></br>
            </span>);
            column++
          }
        }
        return creatorView;
      }
      getParamaterLabels(){
        var paramaterLabels=[];
        for (var i=0; i<this.props.methodSignature.length; i++){
          if (i<2) { /* do nothing */ }
          else if (i%2===0) {
            paramaterLabels.push(this.props.methodSignature[i]);
          }
        }
        return paramaterLabels;
      }
      createCallingStrings(){
        var callingStrings=[];
        for (var i=0; i<this.props.methodSignature.length/2; i++){
          callingStrings.push('');
        };
        return callingStrings;
      }
      /* bring index to array */
      createNumberInput(column){
          this.state.gridIDs.push(this.createGridID(column));
          let fractionInput=<NumberInput gridID={this.createGridID(column)} index={column} 
          textHandler={(key, value) => this.textHandler(key, value)} activateInputHandler={this.props.activateInputHandler}>
          </NumberInput>;
          this.num++;
        return fractionInput;
      }
      createGridID(column){
        console.log(this.props.row+"-"+column);
        return this.props.row+"-"+column;
      }
      textHandler(key, value){
        { const { updateKeyAndValue } = this.props; updateKeyAndValue(key, value); }
      }
      makeObjectURLComponent(){
        var urlComponent='/'
        for (var i=0; i<this.state.callingStrings.length; i++) {
          urlComponent+=`$${this.state.callingStrings[i]}`;
        }
        return urlComponent
      }
      getCallingStrings(){
        var callingStrings=[];
        callingStrings.push(this.props.methodSignature[2]);
        for (var i=0; i<(this.props.methodSignature.length-3)/2; i++){
          callingStrings.push(this.props.inputMap[this.state.gridIDs[i]]);
        };
        return callingStrings;
    } 
  handleClick(){
    const callingStrings=this.getCallingStrings();
    if (this.props.methodSignature[4]==='integer'){
       this.setState({ type: 'integer' }); 
      if (InputValidator.areIntegers(callingStrings)){
        this.updateForTeaching(callingStrings);
      } else {
        this.handleOpenModal();
      }
    }
    else if (this.props.methodSignature[4]==='number'){
       this.setState({ type: 'number' }); 
    if(InputValidator.areNumbers(callingStrings)){
      this.updateForTeaching(callingStrings);
    } else {
        this.handleOpenModal();
    }
  }
  else if (this.props.methodSignature[4]==='decimal'){
    this.setState({ type: 'decimal' }); this.handleOpenModal();
    if(InputValidator.areNumbers(callingStrings)){
      this.updateForTeaching(callingStrings);
    } else {
        this.handleOpenModal();
    }
  }
  }
  updateForTeaching(callingStrings){
    const {createTeachingObject, updateCreationStrings, setDisplayTeaching,
      setParamaterLabels, clearTeaching}=this.props;
    //const paramaterLabels=this.getParamaterLabels();
    this.state.localTeacher=deepClone(this.props.teacher);
    console.log("created a local copy of teacher: "+this.state.localTeacher)
    const methodString=callingStrings[0];
    console.log("methodString: "+methodString);
    callingStrings.shift()
    this.state.localTeacher[methodString](callingStrings);
    if(true){
      //updateCreationStrings(callingStrings);
    } else {

    }
    clearTeaching()
    if (true){
      //createTeachingObject(this.props.teachingObjectName, creationStrings.slice());
    }
    //setDisplayTeaching(true);
    //this.props.teachingViewRef.current.scrollIntoView();
  }
  handleOpenModal () { this.setState({ showModal: true }); }
  handleCloseModal () { this.setState({ showModal: false }); }

  createHeading(){
		if (this.props.methodSignature[1].components === undefined || this.props.simplestForm===undefined ) { return; }
		const creatorViews = this.props.methodSignature[1].components.map((component, i) => {
																			 return (
																					 <span key={i} className='main-text-color Heading'>
																					 {this.createHeadingComponent(component)}
																					 </span>
																					 );
																			 });
		return creatorViews;
	}
  
  createHeadingComponent(component){
    if (component==='{Latex}'){
      return <InlineMath>{this.props.simplestForm}</InlineMath>;
    } else {
      return component;
    }
  }
}
const LearnerView=connect(mapStateToProps, mapDispatchToProps)((withRouter)(UnconnectedLearnerView));
export default LearnerView;

        /* const historyState={teachingObjectName: this.state.teachingObjectName, 
          callingStrings: this.state.callingStrings}
        //this.props.history.push(`/teaching/${this.props.teaching.objectName}`);
        //this.props.history.push(`/teaching/${this.props.teaching.objectName}`+
        this.makeObjectURLComponent());
        //this.props.history.push(`/teaching/${this.props.teaching.objectName}`+
        this.makeObjectURLComponent()); */