import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
	return {
		teacher: state.teacher
	}
};
class UnconnectedInputHeading extends React.Component {
	
    render() { return (this.createInputHeading()); }
    
	createInputHeading() {
		var heading = <span></span>;
		if (this.props.teacher && this.props.teacher) {
			heading = <h3 className="center-text heading">Enter numbers as integers or fractions.
			If you want a fraction, type '/' to separate the denominator from the numerator.</h3>;
		} else if (this.props.teacher && this.props.teacher.onlyFractions) {
			heading = <h3 className="center-text heading">To type a fraction, type '/' to separate the
			denominator from the numerator.</h3>;
		}
		return heading;
	}
}
const InputHeading = connect(mapStateToProps, null)(UnconnectedInputHeading)
export default InputHeading;
