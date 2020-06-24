import React from 'react';

//tells latest version that was cached
const TellVersionView = () => {
  //gets date from local storage
  let lastUpdated = localStorage.getItem('lastUpdated');
  //if found, tells latest cached version
  if (lastUpdated) {
    return (
    <h1 className="center-text large-heading-size">
      Latest Cached Version: {lastUpdated}.
    </h1>
    )
  } else {
    //otherwise, tells that no cached version was found
    return (
    <h1 className="center-text large-heading-size">
      No version fully cached yet.
    </h1>
    )
  }
}
export default TellVersionView