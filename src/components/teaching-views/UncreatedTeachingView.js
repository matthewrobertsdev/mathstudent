import React from 'react';
import { useSelector } from 'react-redux';
//component to tell that a teaching was not found
const UncreatedTeachingView = () => {
  //get pageNotFound boolean from state
    //change page title
    document.title = "Not Found"
    return (
      <div>
         <br/>
        <h1 className='heading-size text-margins'>
          Sorry, but the teaching you are looking for cannot be found.
        </h1>
      </div>
    )
}
export default UncreatedTeachingView;