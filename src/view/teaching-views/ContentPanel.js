import React from 'react';
import { connect } from 'react-redux';
import 'react-simple-keyboard/build/css/index.css';
import '../views-general/app.css';
import {AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';
import AdView from './AdView';
import LearningSection from './LearningSection';

const mapStateToProps = (state) => {
	return {
		teacher: state.teacher
	}
};
class UnconnectedLearningPanel extends React.Component {

	render() {
			return <div className='fullWidth'><br></br><AccordionItem uuid='working-with'>
				<AccordionItemHeading>
					<AccordionItemButton>
						<span className="main-text-color Heading large-heading-size">
							{this.props.introPhrase}{this.props.teacher.teaching.displayNamePlural}</span>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					{this.props.section}
				</AccordionItemPanel>
			</AccordionItem></div>
		
	}

}
const LearningPanel = connect(mapStateToProps, null)(UnconnectedLearningPanel)
export default LearningPanel;
