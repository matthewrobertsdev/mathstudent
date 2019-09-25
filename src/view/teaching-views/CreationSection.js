import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {getTeaching, setTeachingObject, clearTeaching} from  '../../manager/Actions';
import 'katex/dist/katex.min.css';
import '../views-general/app.css';
import DisplayView from './DisplayView'
import TeachingSection from './TeachingSection';
const mapStateToProps = (state) => {
  return { teacher: state.teacher, creationStrings: state.creationStrings, 
    callingStrings: state.callingStrings, paramaterLabels: 
    state.paramaterLabels } };
const mapDispatchToProps = (dispatch) => {
  return { getTeaching: (teachingName) => { dispatch(getTeaching(teachingName)); },
    setTeachingObject: (name) => { dispatch(setTeachingObject(name)); },
    clearTeaching: () => { dispatch(clearTeaching()); } } };
class UnconnectedCreationSection extends React.Component{
    constructor(props) { super(props); this.state={id: this.props.location.pathname, 
      creationStrings: this.props.creationStrings}}
      render() {
        return ( <div> <DisplayView/> <TeachingSection/> </div> );
      }
}
const CreationSection=connect(mapStateToProps, mapDispatchToProps)(withRouter(UnconnectedCreationSection));
export default CreationSection;