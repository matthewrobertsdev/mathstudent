import React from 'react';
import { connect } from 'react-redux';
import FractionInput from './FractionInput';
import {createTeaching} from '../Actions'
import './app.css';
const mapStateToProps = (state) => {
  return {
    teaching: state.teaching
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    //gets array of topics in an object
    createTeaching: (methodInfo) => {
      dispatch(createTeaching(methodInfo));
    }
  }
};
//for displaying a link to a teaching, that displays its name and loads that teaching when clicked
class UnconnectedCreatorView extends React.Component{
    constructor(props) {
        super(props);
        this.state={methodSignature: this.props.methodSignature,
          callingStrings: [] };
          this.latexHandler = this.latexHandler.bind(this);
          this.createCallingStrings();
          this.state.callingStrings[0]=this.props.methodSignature[1]
      }
      render() {
        return(
            //will take user to teaching with these names.  Will get teaching from home first.
          <div className='CreatorView'>
              <h3>{this.props.methodSignature[0]}</h3>
              {this.createView()}<button onClick={() => this.handleClick()}>Create a {this.props.teaching.displayNameSingular}</button>
          </div>
        );
      }
      createView(){
        var creatorView=[];
        var index=1;
        for (var i=0; i<this.props.methodSignature.length; i++){
          if (i<2){
          }
          else if (i%2===0){
            creatorView.push(<span className='small-right-margin' key={i} id={i}>{this.props.methodSignature[i]+':'}</span>);
          }else{
            creatorView.push(<span key={i} id={i}><span className='medium-right-margin'>{this.createFractionInput(index)}</span><br className='hide-for-not-small'></br></span>);
            index++
          }
        }
        return creatorView;
      }
      createCallingStrings(){
        for (var i=0; i<this.props.methodSignature.length/2; i++){
          //this.state.callingStrings.push("");
          this.setState(previousState => ({
                ...previousState ,
                callingStrings: previousState.callingStrings.push('')
        }))
        }
      }
      //bring index to array
      createFractionInput(i){
        let fractionInput=<FractionInput index={i} latexHandler={this.latexHandler}></FractionInput>;
        return fractionInput;
      }
      updateFractionArray(i, latex){
        this.state.callingString[i]=latex;
      }
      latexHandler(i, latex){
        this.state.callingStrings[i]=latex;
      }
      handleClick(){
        const { createTeaching } = this.props;
        createTeaching(this.state.callingStrings);
      }
}
const CreatorView=connect(mapStateToProps, mapDispatchToProps)(UnconnectedCreatorView);
export default CreatorView;