import React, { useEffect } from 'react';
//present this page if a page is not found
const PageNotFoundPage = () => {
  //set title on navigation to page
  useEffect(() => { document.title = "Not Found" })
  return (
    <div>
      <br></br>
      {/* heading tells that page cannot be found*/}
      <h1 className="center-text text-margins large-heading-size">
        Sorry, but the page you are looking for cannot be found.
      </h1>
    </div>)
}
export default PageNotFoundPage