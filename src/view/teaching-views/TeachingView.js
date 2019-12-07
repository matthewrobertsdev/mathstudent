import React from 'react';
import { connect } from 'react-redux';
import { getTeaching, clearCreationTeaching, updateURL, setTeachingObjectName, setDisplayTeaching } from '../../manager/Actions';
import isMobile from '../../utilities/IsMobile';
import NumberKeyboard from '../keyboard-views/NumberKeyboard';
import KeyboardSpacer from '../keyboard-views/KeyboardSpacer';
import CreationSection from './CreationSection';
import 'react-simple-keyboard/build/css/index.css';
import '../views-general/app.css';
import { Accordion } from 'react-accessible-accordion';
import PageNotFoundView from '../views-general/PageNotFoundView';
import AdView from './AdView';
import LearningPanel from './LearningPanel';
import AboutPanel from './AboutPanel';
import CreatorPanel from './CreatorPanel';


/*
##########################################################################
Renders an entire teaching view--all but the header for a teaching a topic
##########################################################################
*/
const mapStateToProps = (state) => {
	return {
		teacher: state.teacher, displayTeaching: state.displayTeaching,
		displayKeyboard: state.displayKeyboard, pageNotFound: state.pageNotFound
	}
};
//These need to be linted for redudant actions
const mapDispatchToProps = (dispatch) => {
	return {
		getTeaching: (teachingName) => { dispatch(getTeaching(teachingName)); },
		clearCreationTeaching: () => { dispatch(clearCreationTeaching()); }, 
		updateURL: () => { dispatch(updateURL()); },
		setTeachingObjectName: (teachingName) => { dispatch(setTeachingObjectName(teachingName)); },
		setDisplayTeaching: (teachingName) => { dispatch(setDisplayTeaching(teachingName)); }
	};
};
class UnconnectedTeachingView extends React.Component {
	constructor(props) {
		super(props); this.state = { displayKeyboard: false };
		const { match: { params } } = this.props;
		this.props.clearTeaching(); this.props.setTeachingObjectName(params.teachingName);
		this.props.getTeaching(params.teachingName); document.title = params.teachingName
		/*this.teachingViewRef = React.createRef();*/ this.props.updateURL(window.location.href);
	}
	componentDidUpdate() {
		if (this.props.teacher) { if (this.props.teaching) { document.title = this.props.teacher.teaching.displayNamePlural } };
	}
	componentWillUnmount() { this.props.setDisplayTeaching(false); }

	render() { return (<div className='fullWidth'> {this.createView()} </div>); }
	
	createView() {
		if (this.props.teacher) {
			if (this.props.teacher.teaching) {
				return (
					<Accordion allowZeroExpanded={true} allowMultipleExpanded={true} preExpanded={this.expandTheseIfNotMobile()}>
						<div className='center-text textMargins'><AdView /></div>
						<h1 className='center-text main-text-color Heading large-heading-size'>{this.props.teacher.teaching.displayNamePlural}</h1>
						<AboutPanel uuid='about'/>
						<br></br>
						<CreatorPanel uuid='create'/>
						{this.displayCreatedObject()}
						<LearningPanel uuid='working-with'/>
						{this.addKeyboardForMobile()}
					</Accordion>
				);
			}
		}
		else if (this.props.pageNotFound) {
			return <div className="text-margins main-text-color"><br></br><br></br><PageNotFoundView className='fullWidth center-text' /></div>
		}
	}

	displayCreatedObject() {
		if (this.props.displayTeaching) {
			return (<div /*ref={this.teachingViewRef}*/>{<CreationSection />}<br></br>
				<br></br><AdView /></div>
			);
		} else { return (<span /*ref={this.teachingViewRef}*/></span>); }
	}
	
	addKeyboardForMobile() {
		if (isMobile()) {
			return <div><NumberKeyboard className={this.props.displayKeyboard ?
				'display-keyboard' : 'hide-keyboard'} keyPressHandler={this.onKeyPress} /><KeyboardSpacer /></div>
		}
		else { return <div><br></br><br></br><br></br><br></br></div> }
	}

	//for accordian tabs
	expandTheseIfNotMobile() {
		if (!isMobile()) {
			return ['about', 'create', 'working-with'];
		} else {
			return [];
		}
	}
}
const TeachingView = connect(mapStateToProps, mapDispatchToProps)(UnconnectedTeachingView)
export default TeachingView;
