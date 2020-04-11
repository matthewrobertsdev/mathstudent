import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTeaching, clearCreationTeaching, setTeachingObjectName, setDisplayTeaching, updateActiveValue, setFound} from '../../store/Actions';
import isMobile from '../../utilities/IsMobile';
import NumberKeyboard from '../keyboard-views/NumberKeyboard';
import KeyboardSpacer from '../keyboard-views/KeyboardSpacer';
import CreationSection from '../sections-and-panels/CreationSection';
import 'react-simple-keyboard/build/css/index.css';
import '../../styles/app.css'
import UncreatedTeachingView from './UncreatedTeachingView'
import AdView from '../AdView';
import AboutSection from '.././teaching-views/AboutSection';
import ProblemPicker from './ProblemPicker'
import {Accordion} from 'react-accessible-accordion'
import {AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from 'react-accessible-accordion'


/*
##########################################################################
Renders an entire teaching view--all but the header for a teaching a topic
##########################################################################
*/
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
		getTeaching: (teachingName) => { dispatch(getTeaching(teachingName)); },
		setTeachingObjectName: (teachingName) => { dispatch(setTeachingObjectName(teachingName)); },
		setDisplayTeaching: (teachingName) => { dispatch(setDisplayTeaching(teachingName)); },
		updateActiveValue: (key) =>{dispatch(updateActiveValue(key));}
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
	useEffect(()=>{})
	/*
	componentDidUpdate() {
		if (this.props.teacher) { if (this.props.teaching) { document.title = this.props.teacher.teaching.displayNamePlural } };
	}
	componentWillUnmount() { this.props.setDisplayTeaching(false); }
	*/
	return (<div> {createView()} </div>); 

	function createView() {
		//props.setFound()
		if (props.teacher && props.teacher.teaching) {
				return (
						<Accordion allowZeroExpanded={true} allowMultipleExpanded={true} preExpanded={expandTheseIfNotMobile()}>
						<AccordionItem uuid={'problems'}>
        <AccordionItemHeading className="heading large-heading-size">
            <AccordionItemButton>
			{props.teacher.teaching.displayNameSingular+" Problems"}
						</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
						<ProblemPicker/>
						<div className='center-text text-margins'><AdView /></div>
				</AccordionItemPanel>
			</AccordionItem>
						<AccordionItem uuid='about'>
        <AccordionItemHeading className="heading large-heading-size">
            <AccordionItemButton>
						{"About "+props.teacher.teaching.displayNamePlural}
						</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<AboutSection/>
						</AccordionItemPanel>
			</AccordionItem>
			</Accordion>
				);
		} else if (props.teacher==null) {
			return <UncreatedTeachingView className='center-text'/>
		}
	}
	/*
	function displayCreatedObject() {
		if (this.props.displayTeaching) {
			return (<div ref={this.teachingViewRef}>{<CreationSection />}<br></br>
				<br></br><AdView /></div>
			);
		} else { return (<span ref={this.teachingViewRef}></span>); }
	}
	*/
	function addKeyboardForMobile() {
		if (isMobile()) {
			return <div><NumberKeyboard className={props.displayKeyboard ?
				'display-keyboard' : 'hide-keyboard'} keyPressHandler={(key)=>props.updateActiveValue(key)} /><KeyboardSpacer /></div>
		}
		else { return <div><br></br><br></br><br></br><br></br></div> }
	}
	//for accordian tabs
	function expandTheseIfNotMobile() {
		if (!isMobile()) { return ['problems', 'about'];} 
		else { return []; }
	}
}
export default TeachingView;
