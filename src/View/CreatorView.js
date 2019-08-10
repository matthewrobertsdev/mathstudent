import React from 'react';
import { connect } from 'react-redux';
import NumberInput from './NumberInput';
import {createTeaching} from '../Actions';
import InputValidator from '../Model/InputValidator';
import { withRouter } from "react-router-dom";
import './app.css';
import isMobile from '../Model/utilities/IsMobile';
import ReactModal from 'react-modal';
/* gets the teaching for this method */
const mapStateToProps = (state) => { return { teaching: state.teaching, topics: state.topics, inputMap: state.inputMap} };
/* so that the creator view can get the teaching */
const mapDispatchToProps = (dispatch) => { return { createTeaching: (methodInfo) => { 
  dispatch(createTeaching(methodInfo)); } } };
/* for creating a teaching, but not connected yet */
class UnconnectedCreatorView extends React.Component{
    constructor(props) {
        super(props);
        /* methods strings to create view, calling strings to call method */
        this.state={methodSignature: this.props.methodSignature, key: undefined, callingStrings: 
          this.createCallingStrings(), gridIDs: [], showModal: false}
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
          Sorry, those were not all numbers or some were left blank.
          <br></br>
          <br></br>
          <button className='closeButton' onClick={this.handleCloseModal}>Close</button>
        </ReactModal>
          </div>
        );
      }
      createView(){
        var creatorView=[];
        var column=1;
        this.num=0;
        for (var i=0; i<this.props.methodSignature.length; i++){
          if (i<2) { /* do nothing */ }
          else if (i%2===0) {
            creatorView.push(<span className='small-right-margin creator-text-size' 
            key={i} id={i}>{this.props.methodSignature[i]+':'}</span>);
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
          for (var i=0; i<this.num; i++){
            callingStrings.push(this.props.inputMap[this.state.gridIDs[i]]);
          };
          this.setState(previousState => ({ ...previousState, callingStrings: callingStrings }))
          return callingStrings;
      }
  handleClick(){
    const { createTeaching } = this.props;
    if (isMobile&&InputValidator.handleAttemptedFraction(this.getMobileCallingStrings())){
      this.props.history.push(`/creation/${this.props.teaching.objectName}`);
    } else if(InputValidator.handleAttemptedFraction(this.state.callingStrings)){
        createTeaching(this.state.callingStrings);
        this.props.history.push(`/creation/${this.props.teaching.objectName}`);
    } else {
        this.handleOpenModal()
    }
  }
  handleOpenModal () { this.setState({ showModal: true }); }
  handleCloseModal () { this.setState({ showModal: false }); }
}
const CreatorView=connect(mapStateToProps, mapDispatchToProps)((withRouter)(UnconnectedCreatorView));
export default CreatorView;