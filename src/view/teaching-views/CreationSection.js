import React from 'react';
import DisplayView from './DisplayView'
import TeachingSection from './TeachingSection';
import '../views-general/app.css';
class CreationSection extends React.Component{
      render() {
        return ( <div className="text-margins"> <DisplayView/> <TeachingSection/> </div> );
      }
}
export default CreationSection;