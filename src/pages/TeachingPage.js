import React, { Suspense, useState } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import { getTeacher } from '../store/Actions';
import isMobile from '../utilities/IsMobile';
import UncreatedTeachingView from '../components/teaching-views/UncreatedTeachingView'
import AdView from '../components/AdView';
import ProblemPicker from '../components/teaching-views/ProblemPicker'
import TableOfContentsView from '../components/teaching-views/TableOfContentsView'
import '../styles/app.css'

//initial page for a topic
const TeachingPage = (props) => {

  //state
  const { match: { params } } = props;
  const [teacher, setTeacher] = useState(undefined);
  getTeacher(params.teachingName, setTeacher)

  const AboutComponent = React.lazy(() => import(`../components/about-views/About${params.teachingName}`));

  if (teacher) {
    console.log(teacher)
    document.title = params.teachingName;
    return (
      <main>
        {/* title and ad */}
        <h1 className='large-left-margin'>
          {teacher.teaching.displayNamePlural}
        </h1>
        <div className='center-text text-margins'>
          <AdView />
        </div>
        {/* accordian for about, teachings, and problems */}
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true} preExpanded={[]}>
          {/* about and ad */}
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
                <br />
                <div className='center-text text-margins'><AdView /></div>
                <br />
              </AccordionItemPanel>
            </AccordionItem>
          </span>
          {/* teaching links and ad */}
          <span>
            <AccordionItem uuid='table_of_contents'>
              <AccordionItemHeading className="heading large-heading-size">
                <AccordionItemButton>
                  {teacher.teaching.displayNameSingular + ' Teachings'}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TableOfContentsView methods={teacher.teaching.methods} />
                <br />
                <div className='center-text text-margins'>
                  <AdView />
                </div>
                <br />
              </AccordionItemPanel>
            </AccordionItem>
          </span>
          {/* problem links and ad */}
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
        </Accordion>
        {/* line breaks to add space to bottom */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    );
  } else if (teacher === false) {
    //teacher is false is getLesson set it so if it failed to retrive the teacher
    return (
      <main>
        <UncreatedTeachingView className='center-text' />
      </main>
    )
  } else {
    return null
  }
  //for accordian
  function expandTheseIfNotMobile() {
    if (!isMobile()) {
      return ['problems', 'about', 'table_of_contents'];
    } else {
      return [];
    }
  }
}
export default TeachingPage;
