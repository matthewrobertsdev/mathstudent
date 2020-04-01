import React from 'react';
import { connect } from 'react-redux';
import 'react-simple-keyboard/build/css/index.css';
import  '../../../styles/app.css'
import TeachingSection from './TeachingSection';
import AdView from '../small-views/AdView';
const AboutSection = (props) =>  {
        return (
            <span className='text-margins'>
                <div><TeachingSection purpose={'about'} /><br></br><br></br></div><AdView/>
            </span>
        );
}
export default AboutSection;
