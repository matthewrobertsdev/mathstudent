import React from 'react';
import 'react-simple-keyboard/build/css/index.css';
import  '../../../styles/app.css'
import AboutSection from './AboutSection';
import ContentPanel from './ContentPanel';
class AboutPanel extends React.Component {
	render() { return <ContentPanel introPhrase="About " uuid='about' section={<AboutSection/>}/> }
}
export default AboutPanel;
