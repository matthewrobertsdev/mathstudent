import React from 'react';

//component to tell that a teaching was not found
const UncreatedTeachingView = () => {
  //change page title
  document.title = "Not Found"
  return (
    <div>
      <br />
      <h1 className='heading-size text-margins'>
        Sorry, but the teaching you are looking for cannot be found.
        </h1>
    </div>
  )
}
export default UncreatedTeachingView;