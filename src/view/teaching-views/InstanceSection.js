import React from 'react';
import LearnerView from './LearnerView'
import TeachingSection from './TeachingSection';
import '../views-general/app.css';
class InstanceSection extends React.Component{
      render() {
        return ( <div className="text-margins"> <LearnerView/> <TeachingSection/> </div> );
      }
}
export default InstanceSection;