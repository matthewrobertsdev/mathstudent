import React from 'react';
import { connect } from 'react-redux';
import LearnerView from '../input-views/LearnerView';
import 'react-simple-keyboard/build/css/index.css';
import  '../../../styles/app.css'
import TeachingSection from './TeachingSection';
import AdView from '../small-views/AdView';
import UncreatedView from '../small-views/UncreatedView';
import InputHeading from '../small-views/InputHeading';
const mapStateToProps = (state) => {
	return {
		teacher: state.teacher.teacher, displayTeaching: state.teacher.displayTeaching,
	}
};
class UnconnectedLearningSection extends React.Component {
	render() { return (<div className='full-width'> {this.createLearningSection()} </div>); }
	createAdEverySecond(i) { if (i - 1 % 2 === 0) { return <div className='full-width'><AdView /></div> } }
	createSpaceEverySecond(i) { if (i - 1 % 2 === 0) { return <div><br></br><br></br></div> } }
	createLearningSection() {
		if (this.props.teacher.instanceMethodSignatures.length > 0) {
			return <span>{this.createLearnerViews()}</span>
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
}
const LearningSection = connect(mapStateToProps, null)(UnconnectedLearningSection)
export default LearningSection;
