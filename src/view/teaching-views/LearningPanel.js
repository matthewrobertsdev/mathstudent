import React from 'react';
import { connect } from 'react-redux';
import 'react-simple-keyboard/build/css/index.css';
import '../views-general/app.css';
import LearningSection from './LearningSection';
import ContentPanel from './ContentPanel';

const mapStateToProps = (state) => {
	return {
		teacher: state.teacher
	}
};
class UnconnectedLearningPanel extends React.Component {

	render() { return (<div className='full-width'> {this.createLearningSection()} </div>); }

	createLearningSection() {
		if (this.props.teacher.instanceMethodSignatures.length > 0) {
		return <ContentPanel introPhrase="Working with " section={<LearningSection/>}/>
		}
	}

}
const LearningPanel = connect(mapStateToProps, null)(UnconnectedLearningPanel)
export default LearningPanel;
