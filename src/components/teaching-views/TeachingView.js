import React, { useEffect, Suspense } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setTeacher, clearCreationTeaching, setDisplayTeaching, updateActiveValue, setFound } from '../../store/Actions';
import isMobile from '../../utilities/IsMobile';
//import NumberKeyboard from '../keyboard-views/NumberKeyboard';
//import KeyboardSpacer from '../keyboard-views/KeyboardSpacer';
//import CreationSection from '../sections-and-panels/CreationSection';
import 'react-simple-keyboard/build/css/index.css';
import '../../styles/app.css'
import UncreatedTeachingView from './UncreatedTeachingView'
import AdView from '../AdView';
//import AboutSection from '.././teaching-views/AboutSection';
//import AboutComponent from '../teachingviews/AboutFraction'
import ProblemPicker from './ProblemPicker'
import { Accordion } from 'react-accessible-accordion'
import { AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const mapStateToProps = (state) => {
  return {
    teacher: state.teacher.teacher, displayTeaching: state.teacher.displayTeaching,
    displayKeyboard: state.input.displayKeyboard, pageNotFound: state.misc.pageNotFound
  }
};
//These need to be linted for redudant actions
const mapDispatchToProps = (dispatch) => {
  return {
    setFound: () => { dispatch(setFound()); },
    setDisplayTeaching: (teachingName) => { dispatch(setDisplayTeaching(teachingName)); },
    updateActiveValue: (key) => { dispatch(updateActiveValue(key)); }
  };
};
const TeachingView = (props) => {
	/*
	constructor(props) {
		super(props); this.state = { displayKeyboard: false };
		const { match: { params } } = this.props;
		this.props.clearCreationTeaching(); this.props.setTeachingObjectName(params.teachingName);
		this.props.getTeaching(params.teachingName); document.title = params.teachingName
		this.teachingViewRef = React.createRef();
	}
	*/
  const dispatch = useDispatch()
  const { match: { params } } = props;
  dispatch(setTeacher(params.teachingName));
  const teacher = useSelector(state => state.teaching.teacher)
  const AboutComponent = React.lazy(() => import(`../teachingviews/About${params.teachingName}`));

  //let AboutComponent=null
  /*useEffect(()=>{{import("../teachingviews/AboutFraction").then(component => {
    AboutComponent=component.default
  })}})*/
  //useEffect(()=>{dispatch(setFound());}, [])
  //console.log(teacher)
	/*
	componentDidUpdate() {
		if (this.props.teacher) { if (this.props.teaching) { document.title = this.props.teacher.teaching.displayNamePlural } };
	}
	componentWillUnmount() { this.props.setDisplayTeaching(false); }
  */
  //const AboutComponent=React.lazy(() => import('../teachingviews/AboutFraction')).default
  return (<div> {createView()} </div>);

  function createView() {
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
              <ProblemPicker />
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
  }

  /*function getAboutView() {
    if (AboutComponent!=undefined) {
      return <AboutComponent/>
    }*/
  /*
  import(`../teachingviews/AboutFraction`).then(aboutView => {
    return aboutView.default
  }).catch(function (error) {
    console.log(error);
  });
  
}
*/
	/*
	function displayCreatedObject() {
		if (this.props.displayTeaching) {
			return (<div ref={this.teachingViewRef}>{<CreationSection />}<br></br>
				<br></br><AdView /></div>
			);
		} else { return (<span ref={this.teachingViewRef}></span>); }
	}
  */
  /*
	function addKeyboardForMobile() {
		if (isMobile()) {
			return <div><NumberKeyboard className={props.displayKeyboard ?
				'display-keyboard' : 'hide-keyboard'} keyPressHandler={(key)=>props.updateActiveValue(key)} /><KeyboardSpacer /></div>
		}
		else { return <div><br></br><br></br><br></br><br></br></div> }
  }
  */
  //for accordian tabs
  function expandTheseIfNotMobile() {
    if (!isMobile()) { return ['problems', 'about']; }
    else { return []; }
  }
}
export default TeachingView;
