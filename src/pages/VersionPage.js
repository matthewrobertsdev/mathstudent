import React from 'react';
import {mainHeading} from '../styles/Styles'
const VersionPage = () => {
    return <div className="center-text">
    {tellLastChecked()}
    {tellVersion()}
    <h1 
    className={mainHeading}>
        Reload the page to see if a new update has been found.</h1>
        <span 
    className={mainHeading}>
        Latest cached version only runs if you have closed every single page in your browser that has Math Teacher, 
        so that none were open so that the new version could be launched when you next opened a Math Teacher page.</span>
    </div>
    function tellVersion(){
        let lastUpdated=localStorage.getItem('lastUpdated');
        if (lastUpdated){
            return <h1 className="center-text large-heading-size">Latest Cached Version: {lastUpdated}.</h1>
        } else {
            return <h1 className="center-text large-heading-size">No version fully cached yet.</h1>
        }
    }
    function tellLastChecked(){
        let lastChecked=localStorage.getItem('lastChecked');
        if (lastChecked){
            return <h1 className="center-text large-heading-size">Update found on {lastChecked}.</h1>
        }
    }
}
export default VersionPage;