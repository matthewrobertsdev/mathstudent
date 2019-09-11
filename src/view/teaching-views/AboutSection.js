import React from 'react';
import TeachingLink from "./TeachingLink";
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { teacher: state.teacher} };
class UnconnectedAboutSection extends React.Component {
	render() { return (<div className='left-text text-margins'>{this.createAboutSection()}</div>) }
	createAboutSection(){
		if(this.props.teacher.about){
			var aboutSection=[];
			for (var i=0; i<this.props.teacher.teaching.about.length; i++){
				if ( typeof this.props.teacher.teaching.about[i]==='string'){
					if (this.props.teacher.about[i]==='\n\n'){
						aboutSection.push(<div key={i} ><br></br></div>);
					} else { aboutSection.push(<span key={i} className="Heading">
					{this.props.teacher.teaching.about[i]}</span>);
					}
				} else { aboutSection.push(<TeachingLink key={i} displayName=
					{this.props.teacher.teaching.about[i].displayName}
					codeName={this.props.teacher.teaching.about[i].codeName}></TeachingLink>);
				}
			} return aboutSection;
		}
	}
}
const AboutSection = connect(mapStateToProps, null)(UnconnectedAboutSection);
export default AboutSection;
