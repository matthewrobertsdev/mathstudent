import React from 'react';
import { connect } from 'react-redux';
import 'react-simple-keyboard/build/css/index.css';
import  '../../../styles/app.css'
import {AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';
const mapStateToProps = (state) => { return { teacher: state.teacher.teacher } };
class UnconnectedContentPanel extends React.Component {
	render() {
			return <div className='full-width'><br></br>
						<span className="main-text-color heading large-heading-size">
							{this.props.introPhrase}{this.props.teacher.teaching.displayNamePlural}</span>
					</div>	
	}
}
const ContentPanel = connect(mapStateToProps, null)(UnconnectedContentPanel)
export default ContentPanel;
