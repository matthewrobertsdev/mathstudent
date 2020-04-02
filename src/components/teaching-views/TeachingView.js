import React from 'react';
import { connect } from 'react-redux';
import { getTeaching, clearCreationTeaching, updateURL, setTeachingObjectName, setDisplayTeaching, updateActiveValue} from '../../store/Actions';
import isMobile from '../../utilities/IsMobile';
import NumberKeyboard from '../keyboard-views/NumberKeyboard';
import KeyboardSpacer from '../keyboard-views/KeyboardSpacer';
import CreationSection from '../sections-and-panels/CreationSection';
import 'react-simple-keyboard/build/css/index.css';
import '../../styles/app.css'
import PageNotFoundPage from '../../pages/PageNotFoundPage';
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
		getTeaching: (teachingName) => { dispatch(getTeaching(teachingName)); },
		clearCreationTeaching: () => { dispatch(clearCreationTeaching()); }, 
		updateURL: () => { dispatch(updateURL()); },
		setTeachingObjectName: (teachingName) => { dispatch(setTeachingObjectName(teachingName)); },
		setDisplayTeaching: (teachingName) => { dispatch(setDisplayTeaching(teachingName)); },
		updateActiveValue: (key) =>{dispatch(updateActiveValue(key));}
	};
};
class UnconnectedTeachingView extends React.Component {
	constructor(props) {
		super(props); this.state = { displayKeyboard: false };
		const { match: { params } } = this.props;
		this.props.clearCreationTeaching(); this.props.setTeachingObjectName(params.teachingName);
		this.props.getTeaching(params.teachingName); document.title = params.teachingName
		this.teachingViewRef = React.createRef(); this.props.updateURL(window.location.href);
	}
	componentDidUpdate() {
		if (this.props.teacher) { if (this.props.teaching) { document.title = this.props.teacher.teaching.displayNamePlural } };
	}
	componentWillUnmount() { this.props.setDisplayTeaching(false); }

	render() { return (<div> {this.createView()} </div>); }

	createView() {
		if (this.props.teacher) {
			if (this.props.teacher.teaching) {
				return (
					<div >
						<Accordion allowZeroExpanded={true} allowMultipleExpanded={true} preExpanded={this.expandTheseIfNotMobile()}>
						<AccordionItem uuid={'problems'}>
        <AccordionItemHeading className="heading large-heading-size">
            <AccordionItemButton>
			{this.props.teacher.teaching.displayNameSingular+" Problems"}
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
						{"About "+this.props.teacher.teaching.displayNamePlural}
						</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<AboutSection/>
						</AccordionItemPanel>
			</AccordionItem>
			</Accordion>
						</div>
				);
			}
		} else if (this.props.teacher==null) {
			return <PageNotFoundPage className='center-text'/>
		}
	}
	displayCreatedObject() {
		if (this.props.displayTeaching) {
			return (<div ref={this.teachingViewRef}>{<CreationSection />}<br></br>
				<br></br><AdView /></div>
			);
		} else { return (<span ref={this.teachingViewRef}></span>); }
	}
	addKeyboardForMobile() {
		if (isMobile()) {
			return <div><NumberKeyboard className={this.props.displayKeyboard ?
				'display-keyboard' : 'hide-keyboard'} keyPressHandler={(key)=>this.props.updateActiveValue(key)} /><KeyboardSpacer /></div>
		}
		else { return <div><br></br><br></br><br></br><br></br></div> }
	}
	//for accordian tabs
	expandTheseIfNotMobile() {
		if (!isMobile()) { return ['problems', 'about'];} 
		else { return []; }
	}
}
const TeachingView = connect(mapStateToProps, mapDispatchToProps)(UnconnectedTeachingView)
export default TeachingView;
