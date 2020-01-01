import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import TeachingLink from '../small-views/TeachingLink';
import '../../views-general/app.css';
/*
########################################################
Renderer for a GUI teaching section based off of a model
########################################################
*/
const mapStateToProps = (state) => { return { teacher: state.teacher.teacher, activeMethod: state.teacher.activeMethod,
  methodTeacher: state.teacher.methodTeacher}; }
class UnconnectedTeachingSection extends React.Component{
    constructor(props) { super(props); this.state={id: this.props.location.pathname, 
      creationStrings: this.props.creationStrings}}
      render() {
        return(
          this.displaySection()
        );
      }
      displaySection(){
        //if about section, render that
        if (this.props.purpose==='about'){
            return this.createSection(this.props.teacher.teaching.about)
            //if method section, render that
        } else if (this.props.purpose==='method'){
            if (this.props.ownMethod===this.props.activeMethod && this.props.methodTeacher && this.props.methodTeacher.concept){
              return this.createSection(this.props.methodTeacher.concept)
              //if nothing is active, return empty section
            } else {
              return null
            }
            //if passed a teacher with a concept, render that
        } else if (this.props.teacher.concept){
            return this.createSection(this.props.teacher.concept)
        }
      }
      createSection(segmentArray){
        var teachingDisplay=[]
        for (var i=0; i<segmentArray.length; i++){
          teachingDisplay.push(this.createSegment(segmentArray[i], i));
        }
        return teachingDisplay;
      }
      createSegment(concept, c){
        if(concept){
          var teaching=[];
            if ( typeof concept==='string'){
              if (concept==='\n\n'){
                teaching.push(<div key={c} ><br></br></div>);
              } else if (concept.startsWith('{H}')){
                teaching.push(<h1 key={c} className="main-text-color center-text">{concept.slice(3)}</h1>);
              } else if (concept.startsWith('{IL}')) {
                teaching.push(<span aria-label="test number"><InlineMath aria-hidden="true" key={c} className='inline-math' >{concept.slice(4)}</InlineMath></span>);
              } else if (concept.startsWith('{BL}')) {
                teaching.push(<div aria-label="test number"><BlockMath aria-hidden="true" key={c} className='block-math'>{concept.slice(4)}</BlockMath></div>);
              }
              else{
                teaching.push(<span key={c} className="heading center-text">{concept}</span>);
              }
            } else {
              teaching.push(<TeachingLink key={c} displayName={concept.displayName}
                        codeName={this.props.teacher.main[c].codeName}></TeachingLink>);
            }
          return teaching;
        }
      }
}
const TeachingSection=connect(mapStateToProps, null)(withRouter(UnconnectedTeachingSection));
export default TeachingSection;