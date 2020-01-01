import React from 'react';
import { connect } from 'react-redux';
import 'react-simple-keyboard/build/css/index.css';
import '../../views-general/app.css';
import ContentPanel from './ContentPanel';
import CreatorSection from './CreatorSection';
const mapStateToProps = (state) => {
	return { teacher: state.teacher.teacher }
};
class UnconnectedCreatorPanel extends React.Component {
	render() {
        return <ContentPanel introPhrase="Create " uuid='create' section={<CreatorSection teachingViewRef={this.props.teachingViewRef}/>}/>
	}
}
const CreatorPanel = connect(mapStateToProps, null)(UnconnectedCreatorPanel)
export default CreatorPanel;
