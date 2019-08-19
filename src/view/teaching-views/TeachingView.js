import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {getTeaching, setTeachingObject, clearTeaching} from  '../../manager/Actions';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath } from 'react-katex';
import TeachingLink from './TeachingLink'
import '../views-general/app.css';


const mapStateToProps = (state) => {
  return { teachingObject: state.teachingObject, teaching: state.teaching, creationStrings: state.creationStrings, 
    callingStrings: state.callingStrings, teachingObjectName: state.teachingObjectName, paramaterLabels: 
    state.paramaterLabels } };

const mapDispatchToProps = (dispatch) => {
  return { /* gets teaching from home of teaching */
    getTeaching: (teachingName) => { dispatch(getTeaching(teachingName)); },
    setTeachingObject: (name) => { dispatch(setTeachingObject(name)); },
    clearTeaching: () => { dispatch(clearTeaching()); } } };

class UnconnectedTeachingView extends React.Component{
    constructor(props) { super(props); this.state={id: this.props.location.pathname, 
      creationStrings: this.props.creationStrings}}
      componentWillMount() {
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
          {this.createTeaching()}
        </div>
        );
      }
      createTitleString(){
        if(this.props.teachingObject.default){
          var titleString='';
          titleString+="We've created a "+this.props.teachingObject.default.teaching.singularLowerCase+" with ";
          var c=0; var m=1;
          while (c<this.props.paramaterLabels.length) {
            titleString+=this.props.paramaterLabels[c]+': '+this.props.creationStrings[m]
            c++; m++;
            if (c<this.props.paramaterLabels.length){
              titleString+=', '
            }
          }
          return titleString;
        }
      }
      createMath(){
        if(this.props.teachingObject.default){
          return this.props.teachingObject.default.teaching.latex();
        }
      }
      createTeaching(){
        console.log('soon to teach');
        if(this.props.teachingObject.default){
          console.log('teaching now');
          var mainTeaching=[];
          for (var i=0; i<this.props.teachingObject.default.teaching.main.length; i++){
            if ( typeof this.props.teachingObject.default.teaching.main[i]==='string'){
              if (this.props.teachingObject.default.teaching.main[i]==='\n\n'){
                mainTeaching.push(<div key={i} ><br></br></div>);
              } else if (this.props.teachingObject.default.teaching.main[i].startsWith('{H}')){
                mainTeaching.push(<h1 className="main-text-color">{this.props.teachingObject.default.teaching.main[i].slice(3)}</h1>);
              } else if (this.props.teachingObject.default.teaching.main[i].startsWith('{L}')) {
                mainTeaching.push(<InlineMath className='inline-math'>{this.props.teachingObject.default.teaching.main[i].slice(3)}</InlineMath>);
              }
              else{
                mainTeaching.push(<span key={i} className="Heading">{this.props.teachingObject.default.teaching.main[i]}</span>);
              }
            } else {
              mainTeaching.push(<TeachingLink key={i} displayName={this.props.teachingObject.default.teaching.main[i].displayName}
                        codeName={this.props.teachingObject.default.teaching.main[i].codeName}></TeachingLink>);
            }
          }
          return mainTeaching;
        }
      }
}
const TeachingView=connect(mapStateToProps, mapDispatchToProps)(withRouter((UnconnectedTeachingView)));
export default TeachingView;