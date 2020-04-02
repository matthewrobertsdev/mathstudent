import React from 'react';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
	return {
		teacher: state.teacher.teacher
	}
};
class UnconnectedUncreatedView extends React.Component {

	render() { return (<h3 className='large-heading-size main-text-color center-text'>
    Before working with {this.props.teacher.teaching.pluralLowerCase},
     please create one first.</h3>);}
	
}
const UncreatedView = connect(mapStateToProps, null)(UnconnectedUncreatedView)
export default UncreatedView;
