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
class UnconnectedTeachingSection extends React.Component{
    constructor(props) { super(props); this.state={id: this.props.location.pathname, 
      creationStrings: this.props.creationStrings}}
      render() {
        return(
          this.displayTeaching()
        );
      }
      displayTeaching(){
        var teachingDisplay=[]
        if (this.props.purpose==='about'){
          for (var i=0; i<this.props.teacher.teaching.about.length; i++){
            teachingDisplay.push(this.teachConcept(this.props.teacher.teaching.about[i], i));
          }
        }
        else if (this.props.teacher.concept){
            for (var j=0; j<this.props.teacher.concept.length; j++){
              teachingDisplay.push(this.teachConcept(this.props.teacher.concept[i], i));
            }
        }
        return teachingDisplay;
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
const TeachingSection=connect(mapStateToProps, mapDispatchToProps)(withRouter(UnconnectedTeachingSection));
export default TeachingSection;