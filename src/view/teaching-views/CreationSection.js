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
  return { /* gets teaching from home of teaching */
    getTeaching: (teachingName) => { dispatch(getTeaching(teachingName)); },
    setTeachingObject: (name) => { dispatch(setTeachingObject(name)); },
    clearTeaching: () => { dispatch(clearTeaching()); } } };
class UnconnectedCreationSection extends React.Component{
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
        if (this.props.teacher.description&&this.props.teacher.headings&&this.props.teacher.concepts){
          console.log("should display teaching");
            teachingDisplay.push(this.teachConcept(this.props.teacher.description));
            for (var i=0; i<this.props.teacher.headings.length; i++){
              teachingDisplay.push(this.displayHeading(this.props.teacher.headings[i], i));
              teachingDisplay.push(this.teachConcept(this.props.teacher.concepts[i], i));
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
          var mainTeaching=[];
          for (var i=0; i<concept.length; i++){
            if ( typeof concept[i]==='string'){
              if (concept[i]==='\n\n'){
                mainTeaching.push(<div key={i+'-'+c} ><br></br></div>);
              } else if (concept[i].startsWith('{H}')){
                mainTeaching.push(<h1 key={i+'-'+c} className="main-text-color center-text">{concept[i].slice(3)}</h1>);
              } else if (concept[i].startsWith('{IL}')) {
                mainTeaching.push(<InlineMath key={i+'-'+c} className='inline-math'>{concept[i].slice(4)}</InlineMath>);
              } else if (concept[i].startsWith('{BL}')) {
                mainTeaching.push(<BlockMath key={i+'-'+c} className='block-math'>{concept[i].slice(4)}</BlockMath>);
              }
              else{
                mainTeaching.push(<span key={i+'-'+c} className="Heading center-text">{concept[i]}</span>);
              }
            } else {
              console.log(concept[i])
              mainTeaching.push(<TeachingLink key={i+'-'+c} displayName={concept[i].displayName}
                        codeName={this.props.teacher.main[i].codeName}></TeachingLink>);
            }
          }
          return mainTeaching;
        }
      }
}
const CreationSection=connect(mapStateToProps, mapDispatchToProps)(withRouter((UnconnectedCreationSection)));
export default CreationSection;