import React from 'react';
import { connect } from 'react-redux';
import {getTeaching, setTeachingObject, clearTeaching} from  '../Actions';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import './app.css';

const mapStateToProps = (state) => {
  return { teaching: state.teaching, callingStrings: state.callingStrings, creationStrings: state.creationStrings } };

const mapDispatchToProps = (dispatch) => {
  return { /* gets teaching from home of teaching */
    getTeaching: (teachingName) => { dispatch(getTeaching(teachingName)); },
    setTeachingObject: (name) => { dispatch(setTeachingObject(name)); },
    clearTeaching: () => { dispatch(clearTeaching()); } } };

class UnconnectedTeachingView extends React.Component{
    constructor(props) {
        super(props);
        this.state={};
      }
      componentWillMount() {
        const { match: { params } } = this.props;
        const { getTeaching, setTeachingObject } = this.props;
        getTeaching(params.teachingName);
        setTeachingObject(params.teachingName);

      }
      render() {
        return(
          <div className='fullWidth'>
          <div className='center-text textMargins'>
          <h1 className="main-text-color">{this.createTitleString()}</h1>
          <h1 className="main-text-color">Here it is:</h1><InlineMath className='inline-math'>{this.createMath()}</InlineMath>
          </div>
        </div>
        );
      }

      createMath(){
        return '\\Huge\\color{gold}\\frac{1}{2}'
      }

      createTitleString(){
          var titleString='';
          titleString+="We've created a "+this.props.teaching.singularLowerCase+" with ";
          var c=2;
          var m=1;
          while (m<this.props.callingStrings.length) {
            titleString+=this.props.creationStrings[c]+'='+this.props.callingStrings[m]
            c+=2;
            m++;
            if (m<this.props.callingStrings.length){
              titleString+=', '
            }
          }
          return titleString;
      }
}
const TeachingView=connect(mapStateToProps, mapDispatchToProps)(UnconnectedTeachingView);
export default TeachingView;