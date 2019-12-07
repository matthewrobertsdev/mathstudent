import React from 'react';
import { connect } from 'react-redux';
import isMobile from '../../utilities/IsMobile';
import LearnerView from './LearnerView';
import 'react-simple-keyboard/build/css/index.css';
import '../views-general/app.css';
import {AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';
import TeachingSection from './TeachingSection';
import AdView from './AdView';
import UncreatedView from './UncreatedView';
import InputHeading from './InputHeading';

const mapStateToProps = (state) => {
	return {
		teacher: state.teacher, displayTeaching: state.displayTeaching,
	}
};
class UnconnectedLearningSection extends React.Component {

	render() { return (<div className='fullWidth'> {this.createLearningSection()} </div>); }
	
	createAdEverySecond(i) { if (i - 1 % 2 === 0) { return <div className='fullWidth'><AdView /></div> } }

	createSpaceEverySecond(i) { if (i - 1 % 2 === 0) { return <div><br></br><br></br></div> } }

	createLearningSection() {
		if (this.props.teacher.instanceMethodSignatures.length > 0) {
			return <div className='center-text'><br></br><AccordionItem uuid='working-with'>
				<AccordionItemHeading>
					<AccordionItemButton>
						<span className="main-text-color Heading large-heading-size">
							Working with {this.props.teacher.teaching.displayNamePlural}</span>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					{this.createLearnerViews()}
				</AccordionItemPanel>
			</AccordionItem></div>
		}
	}

	createLearnerViews() {
		if (this.props.displayTeaching) {
			return <div><InputHeading/>
				{this.props.teacher.instanceMethodSignatures.map((methodSignature, i) => {
					return (
						<div key={i}>
							<LearnerView creator={false} methodSignature={methodSignature}
								row={this.props.teacher.teaching.objectName + '-' + methodSignature[2] + '-' + i} teachingViewRef={this.teachingViewRef}></LearnerView>
							<br></br>
							<TeachingSection purpose='method' ownMethod={methodSignature[2]} />
							<br></br>
							{this.createAdEverySecond(i)}
							{this.createSpaceEverySecond(i)}
						</div>
					);
				})}
			</div>
		} else {
			return <UncreatedView/>
		}
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
const LearningSection = connect(mapStateToProps, null)(UnconnectedLearningSection)
export default LearningSection;
