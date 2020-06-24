import React from 'react';
import {
  AccordionItem, AccordionItemButton, AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import MethodView from './MethodView'

//accordian that contains method view for entering a problem
const ProblemEntryView = (props) => {
  if (props.method === undefined) {
    return null;
  }
  return (
    <span>
      <AccordionItem>
        <AccordionItemHeading className="heading-type-2">
          <AccordionItemButton>
            {/* method name */}
            {props.number + ') ' + props.method[0]}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          {/* actually let's you enter the problem for the method and link to SolvePage */}
          <MethodView method={props.method} teacher={props.teacher} />
        </AccordionItemPanel>
      </AccordionItem>
    </span>
  )
}
export default ProblemEntryView