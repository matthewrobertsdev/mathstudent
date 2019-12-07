import React from 'react';
import { connect } from 'react-redux';
import 'react-simple-keyboard/build/css/index.css';
import '../views-general/app.css';
import {AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';
import AdView from './AdView';
import LearningSection from './LearningSection';

const mapStateToProps = (state) => {
	return {
		teacher: state.teacher, displayTeaching: state.displayTeaching,
	}
};
class UnconnectedLearningPanel extends React.Component {

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
					<LearningSection/>
				</AccordionItemPanel>
			</AccordionItem></div>
		}
	}

}
const LearningPanel = connect(mapStateToProps, null)(UnconnectedLearningPanel)
export default LearningPanel;
