import React from 'react';
import { connect } from 'react-redux';
import 'react-simple-keyboard/build/css/index.css';
import '../views-general/app.css';
import PageNotFoundView from '../views-general/PageNotFoundView';
import TeachingSection from './TeachingSection';
import AdView from './AdView';

const mapStateToProps = (state) => {
    return {
        teacher: state.teacher
    }
};
class UnconnectedAboutSection extends React.Component {

    render() { return (<div className='fullWidth'> {this.createView()} </div>); }
    createView() {
        if (this.props.teacher) {
            if (this.props.teacher.teaching) {
                return (
                    <span className='textMargins'>
                        <div><TeachingSection purpose={'about'} /><br></br><br></br></div> <AdView />
                    </span>
                );
            }
        }
        else if (this.props.pageNotFound) {
            return <div className="text-margins main-text-color"><br></br><br></br><PageNotFoundView className='fullWidth center-text' /></div>
        }
    }
}
const AboutSection = connect(mapStateToProps, null)(UnconnectedAboutSection)
export default AboutSection;
