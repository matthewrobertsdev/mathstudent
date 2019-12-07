import React from 'react';
import { connect } from 'react-redux';
import LearnerView from './LearnerView';
import 'react-simple-keyboard/build/css/index.css';
import '../views-general/app.css';
import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';
import AdView from './AdView';
import CreatorSection from './CreatorSection';

const mapStateToProps = (state) => {
	return {
		teacher: state.teacher
	}
};

class UnconnectedCreatorPanel extends React.Component {
	
	render() { return (<div className='fullWidth'> {this.createView()} </div>); }
	createView() {
		if (this.props.teacher) {
			if (this.props.teacher.teaching) {
				return (
						<AccordionItem uuid={this.props.uuid}>
							<AccordionItemHeading>
								<AccordionItemButton>
									<span className="center-text main-text-color Heading large-heading-size">
										Create {this.props.teacher.teaching.displayNamePlural}</span>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<CreatorSection/>
							</AccordionItemPanel>
						</AccordionItem>
						
				);
			}
		}
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
	createAdEverySecond(i) { if (i - 1 % 2 === 0) { return <div className='fullWidth'><AdView /></div> } }

    createCreatorKey(index) { return 'creator' + this.props.teacher.teaching.objectName + "-" + index; }
    
}
const CreatorPanel = connect(mapStateToProps, null)(UnconnectedCreatorPanel)
export default CreatorPanel;
