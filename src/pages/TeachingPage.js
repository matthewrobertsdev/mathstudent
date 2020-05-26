import React, {Suspense } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { setTeacher, setFound } from '../store/Actions';
import isMobile from '../utilities/IsMobile';
import UncreatedTeachingView from '../components/teaching-views/UncreatedTeachingView'
import AdView from '../components/AdView';
import ProblemPicker from '../components/teaching-views/ProblemPicker'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import 'react-simple-keyboard/build/css/index.css';
import '../styles/app.css'
import { Link } from 'react-router-dom';

const TeachingView = (props) => {
  const dispatch = useDispatch()
  const { match: { params } } = props;
  dispatch(setTeacher(params.teachingName));
  const teacher = useSelector(state => state.teaching.teacher)
  const AboutComponent = React.lazy(() => import(`../components/teachingviews/About${params.teachingName}`));

  dispatch(setFound())
    console.log(teacher)
    if (teacher) {
      document.title = params.teachingName;
      return (
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true} preExpanded={expandTheseIfNotMobile()}>
          <AccordionItem uuid={'problems'}>
            <AccordionItemHeading className="heading large-heading-size">
              <AccordionItemButton>
                {teacher.teaching.displayNameSingular + " Problems"}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ProblemPicker teachingName={params.teachingName}/>
              <div className='center-text text-margins'><AdView /></div>
            </AccordionItemPanel>
          </AccordionItem>
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
        </Accordion>
      );
    } else if (teacher == undefined) {
      return <UncreatedTeachingView className='center-text' />
    }
  //for accordian tabs
  function expandTheseIfNotMobile() {
    if (!isMobile()) { return ['problems', 'about']; }
    else { return []; }
  }
}
export default TeachingView;
