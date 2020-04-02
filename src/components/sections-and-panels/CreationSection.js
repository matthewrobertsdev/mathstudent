import React from 'react';
import DisplayView from '../DisplayView'
import TeachingSection from '../teaching-views/TeachingSection';
import  '../../styles/app.css'
class CreationSection extends React.Component{
      render() {
        return ( <div className="text-margins"> <DisplayView/> <TeachingSection/> </div> );
      }
}
export default CreationSection;