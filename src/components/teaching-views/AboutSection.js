import React from 'react';
import 'react-simple-keyboard/build/css/index.css';
import  '../../styles/app.css'
import TeachingSection from './TeachingSection';
import AdView from '../AdView';
const AboutSection = () =>  {
        return (
            <span className='text-margins'>
                <div><TeachingSection purpose={'about'} /></div><br></br><br></br><br></br><br></br><AdView/>
            </span>
        );
}
export default AboutSection;
