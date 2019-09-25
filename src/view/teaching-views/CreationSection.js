import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {getTeaching, setTeachingObject, clearTeaching} from  '../../manager/Actions';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath } from 'react-katex';
import TeachingLink from './TeachingLink'
import '../views-general/app.css';
const mapStateToProps = (state) => {
  return { teacher: state.teacher, creationStrings: state.creationStrings, 
    callingStrings: state.callingStrings, paramaterLabels: 
    state.paramaterLabels } };
const mapDispatchToProps = (dispatch) => {
  return { getTeaching: (teachingName) => { dispatch(getTeaching(teachingName)); },
    setTeachingObject: (name) => { dispatch(setTeachingObject(name)); },
    clearTeaching: () => { dispatch(clearTeaching()); } } };
class UnconnectedCreationSection extends React.Component{
    constructor(props) { super(props); this.state={id: this.props.location.pathname, 
      creationStrings: this.props.creationStrings}}
      render() {
        return(
          <div>
          <div className='text-margins'>
          <h1 className="main-text-color center-text">{this.createTitleString()}</h1>
          <h1 className="main-text-color center-text">Here it is:</h1>
          <BlockMath className='block-math'>{this.createMath()}</BlockMath>
          {this.displayTeaching()}
          </div>
        </div>
        );
      }
      displayTeaching(){
        var teachingDisplay=[]
        if (this.props.teacher.concept){
            for (var i=0; i<this.props.teacher.concept.length; i++){
              //teachingDisplay.push(this.displayHeading(this.props.teacher.headings[i], i));
              teachingDisplay.push(this.teachConcept(this.props.teacher.concept[i], i));
            }
        }
        return teachingDisplay;
      }
      createTitleString(){
        if(this.props.teacher){
          var titleString='';
          titleString+="We've created a "+this.props.teacher.teaching.singularLowerCase+" with ";
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
        if(this.props.teacher){
          console.log(this.props.teacher.latex());
          return this.props.teacher.latex();
        }
      }
      displayHeading(heading, i){
        return <h1 key={'H'+i} className="main-text-color center-text">{heading.slice(3)}</h1>;
      }
      teachConcept(concept, c){
        if(concept){
          var teaching=[];
            if ( typeof concept==='string'){
              if (concept==='\n\n'){
                teaching.push(<div key={c} ><br></br></div>);
              } else if (concept.startsWith('{H}')){
                teaching.push(<h1 key={c} className="main-text-color center-text">{concept.slice(3)}</h1>);
              } else if (concept.startsWith('{IL}')) {
                teaching.push(<InlineMath key={c} className='inline-math'>{concept.slice(4)}</InlineMath>);
              } else if (concept.startsWith('{BL}')) {
                teaching.push(<BlockMath key={c} className='block-math'>{concept.slice(4)}</BlockMath>);
              }
              else{
                teaching.push(<span key={c} className="Heading center-text">{concept}</span>);
              }
            } else {
              teaching.push(<TeachingLink key={c} displayName={concept.displayName}
                        codeName={this.props.teacher.main[c].codeName}></TeachingLink>);
            }
          
          return teaching;
        }
      }
}
const CreationSection=connect(mapStateToProps, mapDispatchToProps)(withRouter((UnconnectedCreationSection)));
export default CreationSection;