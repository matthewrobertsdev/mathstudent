import React from 'react';
import { connect } from 'react-redux';
import LearnerView from '../input-views/LearnerView';
import 'react-simple-keyboard/build/css/index.css';
import  '../../../styles/app.css'
import AdView from '../small-views/AdView';
import InputHeading from '../small-views/InputHeading';
const mapStateToProps = (state) => {
	return { teacher: state.teacher.teacher }
};
class UnconnectedCreatorSection extends React.Component {
	render() { return (<div className='full-width'> {this.createView()} </div>); }
	createView() {
				return (
					<span className='center-text text-margins'>
						<InputHeading /> {this.createCreatorViews()}
					</span>
				);
	}
	createCreatorViews() {
		if (this.props.teacher.creationMethodSignatures === undefined) { return; }
		const creatorViews = this.props.teacher.creationMethodSignatures.map((methodSignature, i) => {
			return (
				<div key={i} className='full-width'>
					<LearnerView className='creator-view full-width' creator={true} methodSignature={methodSignature}
						row={this.createCreatorKey(i)} teachingViewRef={this.props.teachingViewRef}></LearnerView>
					{this.createAdEverySecond(i)}
				</div>
			);
		});
		return creatorViews;
	}
	createAdEverySecond(i) { if (i - 1 % 2 === 0) { return <div className='full-width'><AdView /></div> } }
	createCreatorKey(index) { return 'creator' + this.props.teacher.teaching.objectName + "-" + index; }
}
const CreatorSection = connect(mapStateToProps, null)(UnconnectedCreatorSection)
export default CreatorSection;
