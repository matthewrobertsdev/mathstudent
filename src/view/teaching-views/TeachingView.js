import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {getTeaching, setTeachingObject, clearTeaching} from  '../../manager/Actions';
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill';
import 'katex/dist/katex.min.css';
import {BlockMath } from 'react-katex';
import '../views-general/app.css';

const mapStateToProps = (state) => {
  return { teaching: state.teaching, creationStrings: state.creationStrings, callingStrings: state.callingStrings } };

const mapDispatchToProps = (dispatch) => {
  return { /* gets teaching from home of teaching */
    getTeaching: (teachingName) => { dispatch(getTeaching(teachingName)); },
    setTeachingObject: (name) => { dispatch(setTeachingObject(name)); },
    clearTeaching: () => { dispatch(clearTeaching()); } } };

class UnconnectedTeachingView extends React.Component{
    constructor(props) { super(props); this.state={id: this.props.location.pathname, 
      creationStrings: this.props.creationStrings}}
      componentWillMount() {
        console.log("efgh"+this.props.location.pathname);
        /*
        const pathArray=this.props.location.pathname.split('$');
        console.log(pathArray);
        const pathStartArray=pathArray[0].split('/')
        console.log(pathStartArray[pathStartArray.length-2]);
        document.title="A "+pathStartArray[pathStartArray.length-2]
        */
      }
      render() {
        return(
          <div className='fullWidth'>
          <div className='center-text textMargins'>
          <h1 className="main-text-color">{this.createTitleString()}</h1>
          <h1 className="main-text-color">Here it is:</h1>
          <BlockMath className='block-math'>{this.createMath()}</BlockMath>
          </div>
        </div>
        );
      }

      createMath(){
        return `\\Huge\\color{gold}\\frac{${this.props.creationStrings[1]}}{${this.props.creationStrings[2]}}`;
      }

      createTitleString(){
          var titleString='';
          titleString+="We've created a "+this.props.teaching.singularLowerCase+" with ";
          var c=2;
          var m=1;
          while (m<this.props.callingStrings.length) {
            titleString+=this.props.creationStrings[c]+'='+this.props.creationStrings[m]
            c+=2;
            m++;
            if (m<this.props.creationStrings.length){
              titleString+=', '
            }
          }
          return titleString;
      }
}
const TeachingView=connect(mapStateToProps, mapDispatchToProps)(withRouter((UnconnectedTeachingView)));
export default TeachingView;