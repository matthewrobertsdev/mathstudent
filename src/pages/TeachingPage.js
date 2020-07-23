import React, { Suspense, useState, useEffect } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import { getTeacher } from '../store/Actions';
//import isMobile from '../utilities/IsMobile';
import UncreatedTeachingView from '../components/teaching-views/UncreatedTeachingView'
import AdView from '../components/AdView';
import ProblemPicker from '../components/teaching-views/ProblemPicker'
import TOCAccordianItem from '../components/teaching-views/TOCAccordianItem'
import '../styles/app.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

//initial page for a topic
const TeachingPage = (props) => {
  
  let jwt = useSelector(state => state.auth.jwt)

  //state
  const { match: { params } } = props;
  const [teacher, setTeacher] = useState(undefined);
  getTeacher(params.teachingName, setTeacher)

  //update recents if jwt is valid
  useEffect(() => {
    if (teacher&&params.teachingName!=='false') {
      console.log()
      fetch(`http://localhost:9000/teachings/${params.teachingName}`, {method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({jwt: jwt})}).then(
        res => res.json()
      ).then(
        data =>console.log(data)
      ).catch(
        err => console.log(err)
      )
    }
  }, [teacher, params.teachingName, jwt])

  const AboutComponent = React.lazy(() => import(`../components/about-views/About${params.teachingName}`));

  if (teacher) {
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
                <div className='text-margins float-right'>
                  <Link to={`./${teacher.teaching.objectName}/${teacher.teaching.methods[0][1]}`} className='link-heading'>Next</Link>
                </div>
                <br />
                <br />
                <br />
                <div className='center-text text-margins'>
                  <AdView />
                </div>
                <br />
              </AccordionItemPanel>
            </AccordionItem>
          </span>
          {/* teaching links and ad */}
          <TOCAccordianItem teacher={teacher} />
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
        <div>
          <Link to={`./${teacher.teaching.objectName}/${teacher.teaching.methods[0][1]}`} className='link-heading text-margins float-right'>Next</Link>
        </div>
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
  /*
  function expandTheseIfNotMobile() {
    if (!isMobile()) {
      return ['problems', 'about', 'table_of_contents'];
    } else {
      return [];
    }
  }
  */
}
export default TeachingPage;
