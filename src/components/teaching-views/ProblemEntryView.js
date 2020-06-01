import React, { useState } from 'react';
import { AccordionItem, AccordionItemButton, AccordionItemHeading, 
  AccordionItemPanel } from 'react-accessible-accordion'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//can enter a problem
const ProblemEntryView = (props) => {
  const teacher = useSelector(state => state.teaching.teacher)
  let initialText = {}
  for (let index = 2; index < props.method.length; index++) {
    if (index % 2 == 1) {
      initialText[index.toString()] = ""
    }
  }
  const [text, setText] = useState(initialText);
  if (props.method == null) {
    return null;
  }
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
          <Link to={'./teach/' + teacher.teaching.objectName} 
          className='create-button'>
            Solve
          </Link>
        </AccordionItemPanel>
      </AccordionItem>
    </span>
  )
  function createMethodViews() {
    const methodViews = []
    for (let index = 2; index < props.method.length; index++) {
      if (index % 2 == 0) {
        methodViews.push(
          <label htmlFor={props.method[0] + "-" + props.method[index]}
            className='heading medium-line-height small-left-margin label'
            key={props.method[0] + "-" + props.method[index] + 'label'}>
            {props.method[index]}:
          </label>
        )
      } else {
        methodViews.push(
          <input id={props.method[0] + "-" + props.method[index - 1]}
            className='fixed-small-left-margin'
            key={props.method[0] + "-" + props.method[index - 1] + 'input'}
            value={text[index.toString()]}/>
        )
        methodViews.push(
          <span className='small-space medium-line-height'
            key={props.method[0] + "-" + props.method[index - 1] + '-span'}>
          </span>
        )
      }
    }
    return methodViews
  }
}
export default ProblemEntryView