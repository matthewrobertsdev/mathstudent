import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {updateURL} from '../../manager/Actions';
const VersionView = (props) => {
    const dispatch=useDispatch()
    useEffect( () => {dispatch(updateURL())})
    return <div className="center-text">
    {tellLastChecked()}
    <br></br><br></br>
    {tellVersion()}
    <br></br><br></br>
    <span 
    className="center-text main-text-color heading large-heading-size">
        Reload the page to see if a new update has been found.</span>
        <br></br><br></br><span 
    className="center-text main-text-color heading large-heading-size">
        Latest cached version only runs if you have closed every single page in your browser that has Math Teacher, 
        so that none were open so that the new version could be launched when you next opened a Math Teacher page.</span>
    </div>
    function tellVersion(){
        let lastUpdated=localStorage.getItem('lastUpdated');
        if (lastUpdated){
            return <span className="center-text main-text-color heading large-heading-size">Latest Cached Version: {lastUpdated}.</span>
        } else {
            return <span className="center-text main-text-color heading large-heading-size">No version fully cached yet.</span>
        }
    }
    function tellLastChecked(){
        let lastChecked=localStorage.getItem('lastChecked');
        if (lastChecked){
            return <span className="center-text main-text-color heading large-heading-size">Update found on {lastChecked}.</span>
        }
    }
}
export default VersionView;