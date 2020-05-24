import React from 'react';
import {AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

//just provides initial links to enter a problem or generate problems
const ProblemEntryView = (props) => {
  if (props.method == null) {
    return null;
  }
  //else return series of TeachingLinks
  return (
    <span>
      <AccordionItem>
            <AccordionItemHeading className="heading-type-2">
              <AccordionItemButton>
              {props.method[0]}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            {createMethodViews()}
            <button className='create-button'>Solve</button>
            </AccordionItemPanel>
          </AccordionItem>
    </span>
  )
  function createMethodViews(){
    const methodViews=[]
      for (let index=2; index<props.method.length; index++){
        if (index%2==0) {
          methodViews.push(<label for={props.method[index]} className='heading medium-line-height small-left-margin label'>{props.method[index]}:</label>)
        } else {
          methodViews.push(<input id={props.method[index]} className='fixed-small-left-margin'/>)
          methodViews.push(<span className='small-space medium-line-height'></span>)
        }
      }
      return methodViews
  }
}
export default ProblemEntryView