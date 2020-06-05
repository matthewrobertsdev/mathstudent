import React from 'react';
import {
  AccordionItem, AccordionItemButton, AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import MethodView from './MethodView'

//can enter a problem
const ProblemEntryView = (props) => {
  if (props.method == null) {
    return null;
  }
  return (
    <span>
      <AccordionItem>
        <AccordionItemHeading className="heading-type-2">
          <AccordionItemButton>
            {props.number + ') ' + props.method[0]}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <MethodView method={props.method} teacher={props.teacher}/>
        </AccordionItemPanel>
      </AccordionItem>
    </span>
  )
}
export default ProblemEntryView