import React from 'react';
import {useSelector } from 'react-redux';
//component to tell that a teaching was not found
const UncreatedTeachingView = () => {
  //get pageNotFound boolean from state
  const pageNotFound=useSelector(state => state.teaching.pageNotFound )
  if (pageNotFound) {
    //change page title
    document.title = "Not Found"
    return (
      /*Tell that the teaching could not be found */
      <div className='heading heading-size text-margins'>
        Sorry, but the teaching you are looking for cannot be found
      </div>
    )
  } else {
    return null
  }
}
export default UncreatedTeachingView;