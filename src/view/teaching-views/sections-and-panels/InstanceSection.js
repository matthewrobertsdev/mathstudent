import React from 'react';
import LearnerView from '../small-views/LearnerView'
import TeachingSection from './TeachingSection';
import '../../views-general/app.css';
class InstanceSection extends React.Component{
      render() {
        return ( <div className="text-margins"> <LearnerView/> <TeachingSection/> </div> );
      }
}
export default InstanceSection;