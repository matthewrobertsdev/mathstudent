import React from 'react';
import {AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import AdView from '../../components/AdView';
import TableOfContentsView from '../../components/teaching-views/TableOfContentsView'
import '../../styles/app.css'

const TOCAccordianItem = (props) => {
  return (
    <span>
      <AccordionItem uuid='table_of_contents'>
        <AccordionItemHeading className="heading large-heading-size">
          <AccordionItemButton>
            {props.teacher.teaching.displayNameSingular + ' Teachings'}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <TableOfContentsView methods={props.teacher.teaching.methods} teachingName={props.teacher.teaching.objectName} />
          <br />
          <div className='center-text text-margins'>
            <AdView />
          </div>
          <br />
        </AccordionItemPanel>
      </AccordionItem>
    </span>
  )
}
export default TOCAccordianItem