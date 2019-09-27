import React from 'react';
import { connect } from 'react-redux';
import NumberInput from './NumberInput';
import {createTeaching, createTeachingObject, updateCreationStrings, setDisplayTeaching, 
  setParamaterLabels, updateKeyAndValue, clearTeaching} from '../../manager/Actions';
import InputValidator from '../../utilities/InputValidator';
import { withRouter } from "react-router-dom";
import '../views-general/app.css';
import ReactModal from 'react-modal';
import {InlineMath } from 'react-katex';
/* gets the teaching for this method */
const mapStateToProps = (state) => { return { teacher: state.teacher, topics: state.topics, inputMap: state.inputMap, 
  callingStrings: state.callingStrings, creationStrings: state.creationStrings,
   teachingObjectName: state.teachingObjectName, argumentLabels: state.argumentLabels, simplestForm: state.simplestForm} };
/* so that the creator view can get the teaching */
const mapDispatchToProps = (dispatch) =>  { return  { createTeaching: (methodInfo) => { 
  dispatch(createTeaching(methodInfo));  }, updateCreationStrings: (creationStrings) => { 
  dispatch(updateCreationStrings(creationStrings)); }, setDisplayTeaching: (boolean) => { 
  dispatch(setDisplayTeaching(boolean)); }, updateKeyAndValue: (key, value) => { 
  dispatch(updateKeyAndValue(key, value)); }, createTeachingObject: (teachingObjectName, args) => {
  dispatch(createTeachingObject(teachingObjectName, args)); }, setParamaterLabels: (argumentLabels)=>{
  dispatch(setParamaterLabels(argumentLabels));}, clearTeaching: () => { 
    dispatch(clearTeaching());}, };}

/* for creating a teaching, but not connected yet */
class UnconnectedCreatorView extends React.Component{
    constructor(props) {
        super(props);
        /* methods strings to create view, calling strings to call method */
        this.state={methodSignature: this.props.methodSignature, key: undefined, creationStrings: 
          this.createCreationStrings(), gridIDs: [], showModal: false, type: 'number', 
          first: true}
          this.props.creationStrings[0]=this.props.methodSignature[1];
          this.textHandler = this.textHandler.bind(this);
          this.openModal = this.openModal.bind(this);
          this.closeModal = this.closeModal.bind(this);
      }
      render() {
        return(
          /* will take user to teaching with these names.  Will get teaching from home first. */
          <div className='CreatorView'>
                {this.createHeading()}
                {this.createView()}<button className="createButton creator-text-size" 
                onClick={() => this.handleButtonClick()}>{this.createButtonString()}
                </button>
                <ReactModal className="notNumberModal" isOpen={this.state.showModal} >
                <br></br>
                <span className='creator-text-size'>{this.getErrorString()}</span>
                <br></br>
                <br></br>
                <button className='closeButton button-size' onClick={this.closeModal}>Close</button>
                </ReactModal>
          </div>
        );
      }
      createButtonString(){
        return this.props.creator ? "Create a "+this.props.teacher.teaching.displayNameSingular : this.props.methodSignature[0];
      }
      createHeading(){
          return this.props.creator ? <h3 className='heading-size'>{this.props.methodSignature[0]}</h3> : <div>{this.createInstanceHeading()}</div>
      }
      createInstanceHeading(){
        if (this.props.methodSignature[1].components === undefined || this.props.simplestForm===undefined ) { return; }
        const creatorViews = this.props.methodSignature[1].components.map((component, i) => {
                                           return (
                                               <span key={i} className='main-text-color Heading'>
                                               {this.createInstanceHeadingComponent(component)}
                                               </span>
                                               );
                                           });
        return creatorViews;
      }
      
      createInstanceHeadingComponent(component){
        if (component==='{Latex}'){
          return <InlineMath>{this.props.simplestForm}</InlineMath>;
        } else {
          return component;
        }
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
        var creatorView=[]; var column=1; this.num=0;
        for (var i=0; i<this.props.methodSignature.length; i++){
          if (!this.props.creator&&i<3){ }
          else if (i<2) { }
          else if (!this.props.creator){
            if (i%2!==0) {
              creatorView.push(<span className='small-right-margin creator-text-size' 
              key={i} id={i}>{this.props.methodSignature[i]+': '}</span>);
            } else {
              creatorView.push(<span key={i} id={i}><span className='medium-right-margin creator-text-size'>
              {this.createNumberInput(column-1)}</span><br className='hide-for-big'></br>
              </span>);
              column++
            }
          }
          else if (i%2===0) {
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
          if (!this.props.creator&&i<3) { }
          else if (i<2){ }
          else if (i%2===0) { paramaterLabels.push(this.props.methodSignature[i]); }
        }
        return paramaterLabels;
      }
      createCreationStrings(){
        var creationStrings=[];
        for (var i=0; i<this.props.methodSignature.length/2; i++){ creationStrings.push(''); };
        return creationStrings;
      }
      /* bring index to array */
      createNumberInput(column){ this.state.gridIDs.push(this.createGridID(column));
          let fractionInput=<NumberInput gridID={this.createGridID(column)} index={column} 
          textHandler={(key, value) => this.textHandler(key, value)} activateInputHandler={this.props.activateInputHandler}>
          </NumberInput>; this.num++; return fractionInput; }
      createGridID(column){ return this.props.row+"-"+column }
      textHandler(key, value){ { const { updateKeyAndValue } = this.props; updateKeyAndValue(key, value); } }
      makeObjectURLComponent(){
        var urlComponent='/'
        for (var i=0; i<this.state.creationStrings.length; i++) { urlComponent+=`$${this.state.creationStrings[i]}`; }
        return urlComponent
      }
      getCreationStrings(){
        var creationStrings=[]; creationStrings.push(this.props.methodSignature[1]);
        for (var i=0; i<this.props.methodSignature.length/2-1; i++){
          creationStrings.push(this.props.inputMap[this.state.gridIDs[i]]);
        };
        return creationStrings;
    } 
  handleButtonClick(){
    const creationStrings=this.getCreationStrings();
    if (this.props.methodSignature[3]==='integer'){ this.setState({ type: 'integer' }); 
      if (InputValidator.areIntegers(creationStrings)){ this.updateForTeaching(creationStrings);
      } else { this.openModal(); }
    }
    else if (this.props.methodSignature[3]==='number'){ this.setState({ type: 'number' }); 
    if(InputValidator.areNumbers(creationStrings)){ this.updateForTeaching(creationStrings);
    } else { this.openModal(); } }
  else if (this.props.methodSignature[3]==='decimal'){
    this.setState({ type: 'decimal' }); this.openModal();
    if(InputValidator.areNumbers(creationStrings)){ this.updateForTeaching(creationStrings); }
     else { this.openModal(); }
  }
  }
  updateForTeaching(creationStrings){
    this.props.updateCreationStrings(creationStrings); this.props.clearTeaching()
    this.props.createTeachingObject(this.props.teachingObjectName, creationStrings.slice());
    this.props.setDisplayTeaching(true);
    this.props.teachingViewRef.current.scrollIntoView();
  }
  openModal () { this.setState({ showModal: true }); }
  closeModal () { this.setState({ showModal: false }); }
}
const CreatorView=connect(mapStateToProps, mapDispatchToProps)((withRouter)(UnconnectedCreatorView));
export default CreatorView;