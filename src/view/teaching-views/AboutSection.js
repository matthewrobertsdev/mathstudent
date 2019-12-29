import React from 'react';
import { connect } from 'react-redux';
import 'react-simple-keyboard/build/css/index.css';
import '../views-general/app.css';
import TeachingSection from './TeachingSection';
import AdView from './AdView';

const mapStateToProps = (state) => {
    return {
        teacher: state.teacher
    }
};
class UnconnectedAboutSection extends React.Component {

    render() {
        return (
            <span className='full-width text-margins'>
                <div><TeachingSection purpose={'about'} /><br></br><br></br></div><AdView/>
            </span>
        );
    }

}
const AboutSection = connect(mapStateToProps, null)(UnconnectedAboutSection)
export default AboutSection;
