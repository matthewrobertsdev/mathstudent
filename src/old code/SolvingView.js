import React from 'react';
import TeachingLink from '../links/TeachingLink';

const TeachingView = () => {
        return(
          displaySection()
        )
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
export default TeachingView;