import React from 'react';
import 'react-simple-keyboard/build/css/index.css';
import '../views-general/app.css';
import AboutSection from './AboutSection';
import ContentPanel from './ContentPanel';
class AboutPanel extends React.Component {

	render() {
        return <ContentPanel introPhrase="About " section={<AboutSection/>}/>
	}

}
export default AboutPanel;
