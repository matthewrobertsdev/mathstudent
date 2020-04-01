import React, { useEffect } from 'react';
import {useDispatch } from 'react-redux';
import {updateURL} from '../../../manager/Actions';
const HomePage = (props) => {
    const dispatch=useDispatch()
    useEffect(() => {dispatch(updateURL())})
    return (<div className="text-margins">
        <h1 className="heading large-heading-size center-text">Math Teacher is a website 
        dedicated to helping you learn math, and teaching you math, all for free.</h1>
        <div className="heading">You can enter a problem to solve or let Math Teacher generate problems for you.  
            Then, solve it, check your answer, or even let Math Teacher teach you how to solve 
            the problem you are working on.</div>
        <div className="heading">Math Teacher makes money off advertsing when you are online,
         but, if you do not have internet available, many of our features--those that don't 
         require login--are available while you are offline, provided you have let Math Teacher 
         fully load one time with internet.  To access your past questions and results, you need 
         to login and have internet available as it requires your web browser to communicate with our servers.</div>
         <h1 className="heading large-heading-size center-text">Create an Account</h1>
         <div className="heading">To let Math Teacher save what problems you have completed 
         so that you may refer back to them and view your progress, 
         please create an account here.</div>
         <br></br><br></br><br></br><br></br>
    </div>);
}
export default HomePage