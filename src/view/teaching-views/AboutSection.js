import React from 'react';
import TeachingLink from "./TeachingLink";
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { teaching: state.teaching} };
class UnconnectedAboutSection extends React.Component {
	render() { return (<div>{this.createAboutSection()}</div>) }
	createAboutSection(){
		if(this.props.teaching.about){
			var aboutSection=[];
			for (var i=0; i<this.props.teaching.about.length; i++){
				if ( typeof this.props.teaching.about[i]==='string'){
					if (this.props.teaching.about[i]==='\n\n'){
						aboutSection.push(<div key={i} ><br></br></div>);
					} else{ aboutSection.push(<span key={i} className="Heading">
					{this.props.teaching.about[i]}</span>);
					}
				} else { aboutSection.push(<TeachingLink key={i} displayName=
					{this.props.teaching.about[i].displayName}
					codeName={this.props.teaching.about[i].codeName}></TeachingLink>);
				}
			} return aboutSection;
		}
	}
}
const AboutSection = connect(mapStateToProps, null)(UnconnectedAboutSection);
export default AboutSection;
