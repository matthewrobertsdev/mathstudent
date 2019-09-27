import React from 'react';
import { connect } from 'react-redux';
import { getTeaching, clearTeaching, updateURL, updateActiveValue, setTeachingObjectName, setDisplayTeaching} from '../../manager/Actions';
import isMobile from '../../utilities/IsMobile';
import NumberKeyboard from '../keyboard-views/NumberKeyboard';
import KeyboardSpacer from '../keyboard-views/KeyboardSpacer';
import CreationSection from './CreationSection';
import LearnerView from './LearnerView';
import 'react-simple-keyboard/build/css/index.css';
import '../views-general/app.css';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton} from 'react-accessible-accordion';
import PageNotFoundView from '../views-general/PageNotFoundView';
import TeachingSection from './TeachingSection';
import AdView from './AdView';
const mapStateToProps = (state) => { return { teacher: state.teacher, displayTeaching: state.displayTeaching, 
	callingStrings: state.callingStrings, displayKeyboard: state.displayKeyboard, pageNotFound: state.pageNotFound} };
const mapDispatchToProps = (dispatch) => {
	return { /* gets teaching */ getTeaching: (teachingName) => { dispatch(getTeaching(teachingName)); },
	clearTeaching: () => { dispatch(clearTeaching()); }, updateURL: () => { dispatch(updateURL()); },
	updateActiveValue: (key) => { dispatch(updateActiveValue(key)); } ,
	setTeachingObjectName: (teachingName) => { dispatch(setTeachingObjectName(teachingName)); },
		setDisplayTeaching: (teachingName) => { dispatch(setDisplayTeaching(teachingName)); } }; };
/* This view is for the UI for creating a MathTeachingObject */
class UnconnectedCreateView extends React.Component {
	constructor(props) { super(props); this.state={ activeText: null, displayKeyboard: false};
		const { match: { params } } = this.props;
		const { clearTeaching, setTeachingObjectName, getTeaching} = this.props;
		clearTeaching(); setTeachingObjectName(params.teachingName);
		getTeaching(params.teachingName); document.title=params.teachingName
	}
	activeInput='';
	componentWillMount() { this.teachingViewRef=React.createRef(); this.props.updateURL(window.location.href);}
	componentDidUpdate(){
		if (this.props.teacher){if(this.props.teaching){ document.title=this.props.teacher.teaching.displayNamePlural}};
	}
	componentWillUnmount() { const {setDisplayTeaching}=this.props; setDisplayTeaching(false); }
	render() { return ( <div className='fullWidth'> {this.createView()} </div> ); }
	createView(){
		if (this.props.teacher){
			if(this.props.teacher.teaching){
			return (
					<Accordion allowZeroExpanded={true} allowMultipleExpanded={true} preExpanded={this.expandIfNotMobile()}>
					<div className='center-text textMargins'><AdView/></div>
					<h1 className='center-text main-text-color Heading large-heading-size'>{this.props.teacher.teaching.displayNamePlural}</h1>
					<AccordionItem uuid='about' >
					<AccordionItemHeading >
					<AccordionItemButton >
					{/* About section */}
					<span className="center-text main-text-color Heading large-heading-size">
					About {this.props.teacher.teaching.displayNamePlural}</span>
					</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
					<span className='textMargins'>
					{this.createAboutSection()} <AdView/>
					</span>
					</AccordionItemPanel>
					</AccordionItem >
					<br></br>
					<AccordionItem uuid='create'>
					<AccordionItemHeading>
					<AccordionItemButton>
					{/* Display CreatorViews to create objects */}
					<span className="center-text main-text-color Heading large-heading-size">
					Create {this.props.teacher.teaching.displayNamePlural}</span>
					</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
					<span className='center-text textMargins'>
					{this.createInputHeading()} {this.createCreatorViews()}
					</span>
					</AccordionItemPanel>
					</AccordionItem>
					{/* Display TeachingView if an object has been created */}
					{this.displayChosenObject()}
					{this.createLearningSection()}
					<div className='fullWidth center-text'>
					</div>
					{/* On mobile, display keyboard */}
					{this.addKeyboardForMobile()}
					</Accordion>
					);
		}
	}
	else if (this.props.pageNotFound){
		return <div className="text-margins main-text-color"><br></br><br></br><PageNotFoundView className='fullWidth center-text'/></div>
	}
	}
	
	createAboutSection(){
		return (<div><TeachingSection purpose={'about'}/><br></br><br></br></div>)
	}
	displayChosenObject(){
		if (this.props.displayTeaching){
			return (<div ref={this.teachingViewRef}>{<CreationSection/>}<br></br>
					<br></br><AdView/></div>
					);} else { return (<span ref={this.teachingViewRef}></span>); }
	}
	createInputHeading(){
		var heading=<span></span>;
		if(this.props.teacher&&this.props.teacher){
			heading=<h3 className="center-text Heading">Enter numbers as integers or fractions.
			If you want a fraction, type '/' to separate the denominator from the numerator.</h3>;
		} else if (this.props.teacher&&this.props.teacher.onlyFractions){
			heading=<h3 className="center-text Heading">To type a fraction, type '/' to separate the
			denominator from the numerator.</h3>;
		}
		return heading;
	}
	createCreatorViews() {
		if (this.props.teacher.creationMethodSignatures === undefined) { return; }
		const creatorViews = this.props.teacher.creationMethodSignatures.map((methodSignature, i) => {
																			 return (
																					 <div key={i} className='fullWidth'>
																					 <LearnerView className='CreatorView fullWidth' creator={true} methodSignature={methodSignature}
																					 row={this.createCreatorKey(i)} teachingViewRef={this.teachingViewRef}></LearnerView>
																					 {this.createAdEverySecond(i)}
																					 </div>
																					 );
																			 });
		return creatorViews;
	}
	createAdEverySecond(i) { if (i-1%2===0){ return <div className='fullWidth'><AdView/></div> } }

	createSpaceEverySecond(i) { if (i-1%2===0){ return <div><br></br><br></br></div> } }
	
	onKeyPress = key => { const {updateActiveValue}=this.props; updateActiveValue(key); };
	
	addKeyboardForMobile() { if( isMobile() ) { return <div><NumberKeyboard className={this.props.displayKeyboard ?
		'display-keyboard' : 'hide-keyboard'} keyPressHandler={this.onKeyPress}/><KeyboardSpacer/></div> }
		else { return <div><br></br><br></br><br></br><br></br></div> }}
	
	createCreatorKey(index) { return 'creator'+this.props.teacher.teaching.objectName+"-"+index; }
	
	createLearningSection(){
		if(this.props.teacher.instanceMethodSignatures.length>0){
			return <div className='center-text'><br></br><AccordionItem uuid='working-with'>
			<AccordionItemHeading>
			<AccordionItemButton>
			{/* About section */}
			<span className=" main-text-color Heading large-heading-size">
			Working with {this.props.teacher.teaching.displayNamePlural}</span>
			</AccordionItemButton>
			</AccordionItemHeading>
			<AccordionItemPanel>
			{this.createLearnerViews()}
			</AccordionItemPanel>
			</AccordionItem></div>
		}
	}
	
	
	createLearnerViews(){
		if (this.props.displayTeaching){
			return <div>{this.createInputHeading()}
			{this.props.teacher.instanceMethodSignatures.map((methodSignature, i) => {
															 return (
																	 <div key={i} className='fullWidth'>
																	 <LearnerView className='CreatorView fullWidth' creator={false} methodSignature={methodSignature}
																	 row={this.props.teacher.teaching.objectName+'-'+methodSignature[2]+'-'+i} teachingViewRef={this.teachingViewRef}></LearnerView>
																	 <br></br><br></br>
																	 {this.createAdEverySecond(i)}
																	 {this.createSpaceEverySecond(i)}
																	 </div>
																	 );
															 })}
			</div>
		} else {
			return <h3 className='large-heading-size main-text-color center-text'>Before working with fractions, please create one first.</h3>
		}
	}
	expandIfNotMobile(){
		if (!isMobile()){
			return ['about', 'create', 'working-with'];
		} else {
			return [];
		}
	}
}
const CreateView = connect(mapStateToProps, mapDispatchToProps)(UnconnectedCreateView)
export default CreateView;
