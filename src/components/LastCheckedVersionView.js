import React from 'react';
//tells when last update was found
const LastCheckedVersionView = () => {
  //stored in local storage
  let lastChecked = localStorage.getItem('lastChecked');
  //if found
  if (lastChecked) {
    return (
    //tells date last update was found
    <h1 className="center-text large-heading-size">
      Update found on {lastChecked}.
    </h1>
    )
  } else {
    return null
  }
}
export default LastCheckedVersionView