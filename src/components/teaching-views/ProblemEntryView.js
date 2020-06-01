import React, { useState } from 'react';
import { AccordionItem, AccordionItemButton, AccordionItemHeading, 
  AccordionItemPanel } from 'react-accessible-accordion'
import { Link } from 'react-router-dom';
import MethodView from './MethodView'
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
            {props.number+') '+props.method[0]}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <MethodView method={props.method}/>
        </AccordionItemPanel>
      </AccordionItem>
    </span>
  )
}
export default ProblemEntryView