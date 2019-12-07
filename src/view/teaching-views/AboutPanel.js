import React from 'react';
import { connect } from 'react-redux';
import 'react-simple-keyboard/build/css/index.css';
import '../views-general/app.css';
import {AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';
import PageNotFoundView from '../views-general/PageNotFoundView';
import AboutSection from './AboutSection';

const mapStateToProps = (state) => {
    return {
        teacher: state.teacher
    }
};
class UnconnectedAboutPanel extends React.Component {
    
    render() { return (<div className='fullWidth'> {this.createView()} </div>); }
    createView() {
        if (this.props.teacher) {
            if (this.props.teacher.teaching) {
                return (
                    <AccordionItem uuid={this.props.uuid} >
                        <AccordionItemHeading >
                            <AccordionItemButton >
                                <span className="center-text main-text-color Heading large-heading-size">
                                    About {this.props.teacher.teaching.displayNamePlural}</span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <AboutSection/>
                        </AccordionItemPanel>
                    </AccordionItem >

                );
            }
        }
        else if (this.props.pageNotFound) {
            return <div className="text-margins main-text-color"><br></br><br></br><PageNotFoundView className='fullWidth center-text' /></div>
        }
    }
}
const AboutPanel = connect(mapStateToProps, null)(UnconnectedAboutPanel)
export default AboutPanel;
