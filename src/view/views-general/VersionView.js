import React from 'react';
import { connect } from 'react-redux';
import {updateURL} from '../../manager/Actions';
const mapDispatchToProps = (dispatch) => {
    return { /* gets array of topics in an object */
      updateURL: () => { dispatch(updateURL()); } } };
class UnconnectedVersionView extends React.Component{
      componentWillMount() { this.props.updateURL(window.location.href);}
    render() { return <div className="center-text">{this.tellLastChecked()}
    <br></br><br></br>{this.tellVersion()}<br></br><br></br><span 
    className="center-text main-text-color Heading large-heading-size">
        Reload the page to see if a new update has been found.</span>
        <br></br><br></br><span 
    className="center-text main-text-color Heading large-heading-size">
        Latest cached version only runs if you have closed every single page in your browser that has Math Teacher, 
        so that none were open so that the new version could be launched when you next opened a Math Teacher page.</span></div>}

    tellVersion(){
        let lastUpdated=localStorage.getItem('lastUpdated');
        if (lastUpdated){

            return <span className="center-text main-text-color Heading large-heading-size">Latest Cached Version: {lastUpdated}.</span>
        } else {
            return <span className="center-text main-text-color Heading large-heading-size">No version fully cached yet.</span>
        }
    }

    tellLastChecked(){
        let lastChecked=localStorage.getItem('lastChecked');
        if (lastChecked){

            return <span className="center-text main-text-color Heading large-heading-size">Update found on {lastChecked}.</span>
        }
    }
}
const VersionView=connect(null,mapDispatchToProps)(UnconnectedVersionView);
export default VersionView;