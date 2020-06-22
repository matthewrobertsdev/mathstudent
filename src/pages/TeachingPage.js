import React, { Suspense, useState } from 'react';
import { getTeacher } from '../store/Actions';
import isMobile from '../utilities/IsMobile';
import UncreatedTeachingView from '../components/teaching-views/UncreatedTeachingView'
import AdView from '../components/AdView';
import ProblemPicker from '../components/teaching-views/ProblemPicker'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import 'react-simple-keyboard/build/css/index.css';
import '../styles/app.css'

const TeachingPage = (props) => {
  const { match: { params } } = props;
  const [teacher, setTeacher] = useState(undefined);
  getTeacher(params.teachingName, setTeacher)
  const AboutComponent = React.lazy(() => import(`../components/teachingviews/About${params.teachingName}`));

  if (teacher) {
    console.log(teacher)
    document.title = params.teachingName;
    return (
      <main>
        <h1 className='large-left-margin'>
        {teacher.teaching.displayNamePlural}
        </h1>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true} preExpanded={expandTheseIfNotMobile()}>
        <span>
          <AccordionItem uuid={'problems'}>
            <AccordionItemHeading className="heading large-heading-size">
              <AccordionItemButton>
                {teacher.teaching.displayNameSingular + " Problems"}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ProblemPicker teachingName={params.teachingName} />
              <div className='center-text text-margins'><AdView /></div>
            </AccordionItemPanel>
          </AccordionItem>
        </span>
        <span>
          <AccordionItem uuid='about'>
            <AccordionItemHeading className="heading large-heading-size">
              <AccordionItemButton>
                {"About " + teacher.teaching.displayNamePlural}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Suspense fallback={<div>Loading {teacher.teaching.displayNameSingular} Teaching...</div>}>
                <AboutComponent />
              </Suspense>
            </AccordionItemPanel>
          </AccordionItem>
        </span>
      </Accordion>
      </main>
    );
  } else if (teacher === false) {
    return(
    <main>
      <UncreatedTeachingView className='center-text'/>
    </main>
    )
  } else {
    return null
  }
  //for accordian tabs
  function expandTheseIfNotMobile() {
    if (!isMobile()) {
       return ['problems', 'about']; 
    } else {
      return [];
    }
  }
}
export default TeachingPage;
