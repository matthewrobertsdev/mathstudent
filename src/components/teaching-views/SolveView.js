import React, { useState } from 'react';
import { getTeacher } from '../../store/Actions';
import TeachingLink from '../links/TeachingLink';

// the view where the solving is displayed
const SolveView = (props) => {
  const [teacher, setTeacher] = useState(undefined);
  getTeacher(props.params.teachingName, setTeacher)
  return (
    <div>
      {createSolveView()}
    </div>
  )
  function createSolveView(){
    if (teacher) {
      return (
        //the heading
        <h1 className='large-left-margin'>{teacher.teaching.displayNameSingular}: {getMethodName()}</h1>
      )
    }
  }
  //get the display name
  function getMethodName(){
    let methodName=""
    teacher.teaching.methods.forEach(method => {
      if(method[1]===props.params.method){
        methodName=method[0]
      }
    })
    return methodName
  }
  function displaySection(segmentArray){
    var teachingDisplay=[]
    for (var i=0; i<segmentArray.length; i++){
      teachingDisplay.push(createSegment(segmentArray[i], i));
    }
    return teachingDisplay;
  }
  function createSegment(concept, c){
    if(concept){
      var teaching=[];
        if ( typeof concept==='string'){
          if (concept==='\n\n'){
            teaching.push(<div key={c} ><br></br></div>);
          } else if (concept.startsWith('{H}')){
            teaching.push(<h1 key={c} className="main-text-color center-text">{concept.slice(3)}</h1>);
          } else if (concept.startsWith('{IL}')) {
            //teaching.push(<span aria-label="test number"><InlineMath aria-hidden="true" key={c} className='inline-math' >{concept.slice(4)}</InlineMath></span>);
          } else if (concept.startsWith('{BL}')) {
            //teaching.push(<div aria-label="test number"><BlockMath aria-hidden="true" key={c} className='block-math'>{concept.slice(4)}</BlockMath></div>);
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
export default SolveView