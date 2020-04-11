import React, { useEffect } from 'react';
const PageNotFoundPage = () => {
    useEffect(()=>{document.title = "Not Found"})
    return (<div><br></br><h1 className="center-text text-margins large-heading-size">
        Sorry, but the page you are looking for cannot be found.</h1></div>)
}
export default PageNotFoundPage