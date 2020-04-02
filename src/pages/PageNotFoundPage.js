import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {updateURL} from '../manager/Actions'
const PageNotFoundPage = () => {
    const dispatch=useDispatch()
    useEffect(()=>{dispatch(updateURL())})
    return (<div><br></br><span className="center-text text-margins heading large-heading-size">
        Sorry, but the page you are looking for cannot be found.</span></div>)
}
export default PageNotFoundPage