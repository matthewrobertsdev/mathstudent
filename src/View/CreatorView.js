import React from 'react';
import { connect } from 'react-redux';
import NumberInput from './NumberInput';
import {createTeaching, updateCallingStrings, updateCreationStrings} from '../Actions';
import InputValidator from '../Model/InputValidator';
import { withRouter } from "react-router-dom";
import './app.css';
import ReactModal from 'react-modal';
/* gets the teaching for this method */
const mapStateToProps = (state) => { return { teaching: state.teaching, topics: state.topics, inputMap: state.inputMap} };
/* so that the creator view can get the teaching */
const mapDispatchToProps = (dispatch) =>  { return  { createTeaching: (methodInfo) => { 
  dispatch(createTeaching(methodInfo));  },  updateCallingStrings: (callingStrings) => { 
    dispatch(updateCallingStrings(callingStrings)); }, updateCreationStrings: (creationStrings) => { 
      dispatch(updateCreationStrings(creationStrings)); }}; }
/* for creating a teaching, but not connected yet */
class UnconnectedCreatorView extends React.Component{
    constructor(props) {
        super(props);
        /* methods strings to create view, calling strings to call method */
        this.state={methodSignature: this.props.methodSignature, key: undefined, callingStrings: 
          this.createCallingStrings(), gridIDs: [], showModal: false, type: 'number'}
          this.state.callingStrings[0]=this.props.methodSignature[1];
        this.textHandler = this.textHandler.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.num=0;
      }
      render() {
        return(
          /* will take user to teaching with these names.  Will get teaching from home first. */
          <div className='CreatorView'>
              <h3>{this.props.methodSignature[0]}</h3>
              {this.createView()}<button className="actionButton" onClick={() => this.handleClick()}>
                Create a {this.props.teaching.displayNameSingular}</button>
                <ReactModal className="notNumberModal" isOpen={this.state.showModal} >
          <br></br>
          {this.getErrorString()}
          <br></br>
          <br></br>
          <button className='closeButton' onClick={this.handleCloseModal}>Close</button>
        </ReactModal>
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
        var creatorView=[];
        var column=1;
        this.num=0;
        for (var i=0; i<this.props.methodSignature.length; i++){
          if (i<2) { /* do nothing */ }
          else if (i%2===0) {
            creatorView.push(<span className='small-right-margin creator-text-size' 
            key={i} id={i}>{this.props.methodSignature[i]+': '}</span>);
          } else {
            creatorView.push(<span key={i} id={i}><span className='medium-right-margin'>
            {this.createNumberInput(column)}</span><br className='hide-for-big'></br>
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
      /* bring index to array */
      createNumberInput(column){
        console.log('adding strings')
          this.state.gridIDs.push(this.createGridID(column));
          let fractionInput=<NumberInput gridID={this.createGridID(column)} index={column} 
          textHandler={(column, value) => this.textHandler(column, value)} activateInputHandler={this.props.activateInputHandler}>
          </NumberInput>;
          this.num++;
        return fractionInput;
      }
      createGridID(column){
        return this.props.row+"-"+column
      }
      textHandler(i, value){
        let tempCallingStrings=this.state.callingStrings
        tempCallingStrings[i]=value;
        this.setState(previousState => ({ ...previousState, callingStrings: tempCallingStrings }))
      }
      getMobileCallingStrings(){
          var callingStrings=[];
          callingStrings.push(this.props.methodSignature[0]);
          for (var i=0; i<this.props.methodSignature/2-1; i++){
            callingStrings.push(this.props.inputMap[this.state.gridIDs[i]]);
          };
          this.setState(previousState => ({ ...previousState, callingStrings: callingStrings }))
          return callingStrings;
      }
      makeObjectURLComponent(){
        var urlComponent=`/`
        for (var i=0; i<this.state.callingStrings.length; i++) {
          urlComponent+=`$${this.state.callingStrings[i]}`;
        }
        return urlComponent
      }
      reset(){
        
      }
  handleClick(){
    this.getMobileCallingStrings();
    const { createTeaching, updateCreationStrings} = this.props;
    const {updateCallingStrings}=this.props;
    if (this.props.methodSignature[3]==='integer'){
       this.setState({ type: 'integer' }); 
      if (InputValidator.areIntegers(this.state.callingStrings)){
        updateCallingStrings(this.state.callingStrings);
        createTeaching(this.state.callingStrings);
        updateCreationStrings(this.props.methodSignature);
        //const historyState={teachingObjectName: this.state.teachingObjectName, callingStrings: this.state.callingStrings}
        //this.props.history.push(`/teaching/${this.props.teaching.objectName}`);
        //this.props.history.push(`/teaching/${this.props.teaching.objectName}`+this.makeObjectURLComponent());
      }
      else{
        this.handleOpenModal();
      }
    }
    else if (this.props.methodSignature[3]==='number'){
       this.setState({ type: 'number' }); 
    if(InputValidator.areNumbers(this.state.callingStrings)){
        createTeaching(this.state.callingStrings);
        updateCallingStrings(this.state.callingStrings);
        updateCreationStrings(this.props.methodSignature);
        createTeaching(this.state.callingStrings);
        this.props.history.push(`/teaching/${this.props.teaching.objectName}`);
    } else {
        this.handleOpenModal();
    }
  }
  else if (this.props.methodSignature[3]==='decimal'){
    this.setState({ type: 'decimal' }); this.handleOpenModal();
  }
  }
  handleOpenModal () { this.setState({ showModal: true }); }
  handleCloseModal () { this.setState({ showModal: false }); }
}
const CreatorView=connect(mapStateToProps, mapDispatchToProps)((withRouter)(UnconnectedCreatorView));
export default CreatorView;