import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {getTeaching, setTeachingObject, clearTeaching} from  '../../manager/Actions';
import 'katex/dist/katex.min.css';
import {BlockMath, InlineMath } from 'react-katex';
import TeachingLink from './TeachingLink'
import '../views-general/app.css';
const mapStateToProps = (state) => {
  return { teaching: state.teaching, creationStrings: state.creationStrings, 
    callingStrings: state.callingStrings, paramaterLabels: 
    state.paramaterLabels } };
const mapDispatchToProps = (dispatch) => {
  return { /* gets teaching from home of teaching */
    getTeaching: (teachingName) => { dispatch(getTeaching(teachingName)); },
    setTeachingObject: (name) => { dispatch(setTeachingObject(name)); },
    clearTeaching: () => { dispatch(clearTeaching()); } } };
class UnconnectedTeachingSection extends React.Component{
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
          {this.teachConcept(this.props.teaching.main)}
        </div>
        );
      }
      createTitleString(){
        if(this.props.teaching){
          var titleString='';
          titleString+="We've created a "+this.props.teaching.singularLowerCase+" with ";
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
        if(this.props.teaching){
          return this.props.teaching.latex();
        }
      }
      teachConcepts(){

      }
      teachConcept(concept){
        console.log('soon to teach');
        if(this.props.teaching){
          console.log('teaching now');
          var mainTeaching=[];
          for (var i=0; i<concept.length; i++){
            if ( typeof concept[i]==='string'){
              if (concept[i]==='\n\n'){
                mainTeaching.push(<div key={i} ><br></br></div>);
              } else if (concept[i].startsWith('{H}')){
                mainTeaching.push(<h1 key={i} className="main-text-color">{concept[i].slice(3)}</h1>);
              } else if (concept[i].startsWith('{L}')) {
                mainTeaching.push(<InlineMath key={i} className='inline-math'>{concept[i].slice(3)}</InlineMath>);
              }
              else{
                mainTeaching.push(<span key={i} className="Heading">{concept[i]}</span>);
              }
            } else {
              mainTeaching.push(<TeachingLink key={i} displayName={concept[i].displayName}
                        codeName={this.props.teaching.main[i].codeName}></TeachingLink>);
            }
          }
          return mainTeaching;
        }
      }
}
const TeachingSection=connect(mapStateToProps, mapDispatchToProps)(withRouter((UnconnectedTeachingSection)));
export default TeachingSection;