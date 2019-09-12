import React from 'react';
import { connect } from 'react-redux';
import { getTeaching, clearTeaching, updateURL, updateActiveValue, setTeachingObjectName, setDisplayTeaching} from '../../manager/Actions';
import CreatorView from './CreatorView';
import isMobile from '../../model/utilities/IsMobile';
import NumberKeyboard from '../keyboard-views/NumberKeyboard';
import KeyboardSpacer from '../keyboard-views/KeyboardSpacer';
import AboutSection from './AboutSection';
import TeachingSection from './TeachingSection';
import WorkerView from './WorkerView';
import 'react-simple-keyboard/build/css/index.css';
import '../views-general/app.css';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton} from 'react-accessible-accordion';
import PageNotFoundView from '../views-general/PageNotFoundView';

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
		getTeaching(params.teachingName);  updateURL();document.title=params.teachingName
	}
	activeInput='';
	componentWillMount() { this.teachingViewRef=React.createRef();}
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
					<div className='center-text textMargins'>{this.createAD()}</div>
					<h1 className='center-text main-text-color Heading large-heading-size'>{this.props.teacher.teaching.displayNamePlural}</h1>
					<AccordionItem uuid='about' >
					<AccordionItemHeading >
					<AccordionItemButton >
					{/* About section */}
					<span className="center-text main-text-color Heading large-heading-size">{/*console.log(this.props.teaching.default)*/}
					About {this.props.teacher.teaching.displayNamePlural}</span>
					</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
					<span className='textMargins'>
					{this.createAboutSection()} {this.createAD()}
					</span>
					</AccordionItemPanel>
					</AccordionItem >
					<br></br>
					<AccordionItem uuid='create'>
					<AccordionItemHeading>
					<AccordionItemButton>
					{/* Display CreatorViews to create objects */}
					<span className="center-text main-text-color Heading large-heading-size">{/*console.log(this.props.teaching.default)*/}
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
					{this.createUseObjectsViews()}
					<div className='fullWidth center-text'>
					</div>
					{/* On mobile, display keyboard */}
					{this.addKeyboardForMobile()}
					</Accordion>
					);
		} else if (this.props.pageNotFound){
			return <div><br></br><br></br><PageNotFoundView className='fullWidth center-text'/></div>
		}
	}
	}
	
	createAboutSection(){
		return (<div><AboutSection/><br></br><br></br></div>)
	}
	displayChosenObject(){
		if (this.props.displayTeaching){
			return (<div ref={this.teachingViewRef}>{<TeachingSection/>}<br></br>
					<br></br>{this.createAD()}</div>
					);} else { return (<span ref={this.teachingViewRef}></span>); }
	}
	createAD(){
		return <div className='center-text'>
		<br></br>
		<div className='hide-for-small leaderBoardAd center-text'>
		There is an ad here when you are online.<br></br><br></br>Ads help Learn Math make money.</div>
		<div className='hide-for-big mobileBanner center-text'>
		There is an ad here when you are online.<br></br><br></br>Ads help Learn Math make money.</div>
		</div>
	}
	createInputHeading(){
		var heading=<span></span>;
		if(this.props.teacher&&this.props.teacher.anyNumbers){
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
																					 <CreatorView className='CreatorView fullWidth' methodSignature={methodSignature}
																					 row={this.createKey(i)} teachingViewRef={this.teachingViewRef}></CreatorView>
																					 {this.createAdEverySecond(i)}
																					 </div>
																					 );
																			 });
		return creatorViews;
	}
	createAdEverySecond(i) { if (i-1%2===0){ return <div className='fullWidth'>{this.createAD()}</div> } }
	
	onKeyPress = key => { const {updateActiveValue}=this.props; updateActiveValue(key); };
	
	addKeyboardForMobile() { if( isMobile() ) { return <div><NumberKeyboard className={this.props.displayKeyboard ?
		'display-keyboard' : 'hide-keyboard'} keyPressHandler={this.onKeyPress}/><KeyboardSpacer/></div> }
		else { return <div><br></br><br></br><br></br><br></br></div> }}
	
	createKey(index) { return this.props.teacher.teaching.objectName+"-"+index; }
	
	createUseObjectsViews(){
		if(this.props.teacher.instanceMethodSignatures.length>0){
			return <div className='center-text'><br></br><AccordionItem uuid='working-with'>
			<AccordionItemHeading>
			<AccordionItemButton>
			{/* About section */}
			<span className=" main-text-color Heading large-heading-size">{/*console.log(this.props.teaching.default)*/}
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
																	 <WorkerView className='CreatorView fullWidth' methodSignature={methodSignature}
																	 row={this.createKey(i)} teachingViewRef={this.teachingViewRef}></WorkerView
																	>
																	 {this.createAdEverySecond(i)}
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
			return ['about', 'create', 'working-with']
		} else {
			return [];
		}
	}
}
const CreateView = connect(mapStateToProps, mapDispatchToProps)(UnconnectedCreateView)
export default CreateView;
