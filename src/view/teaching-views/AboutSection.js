import React from 'react';
import TeachingLink from "./TeachingLink";
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { teacher: state.teacher} };
class UnconnectedAboutSection extends React.Component {
	render() { return (<div>{this.createAboutSection()}</div>) }
	createAboutSection(){
		if(this.props.teacher.about){
			var aboutSection=[];
			for (var i=0; i<this.props.teacher.about.length; i++){
				if ( typeof this.props.teacher.about[i]==='string'){
					if (this.props.teacher.about[i]==='\n\n'){
						aboutSection.push(<div key={i} ><br></br></div>);
					} else { aboutSection.push(<span key={i} className="Heading">
					{this.props.teacher.about[i]}</span>);
					}
				} else { aboutSection.push(<TeachingLink key={i} displayName=
					{this.props.teacher.about[i].displayName}
					codeName={this.props.teacher.about[i].codeName}></TeachingLink>);
				}
			} return aboutSection;
		}
	}
}
const AboutSection = connect(mapStateToProps, null)(UnconnectedAboutSection);
export default AboutSection;
