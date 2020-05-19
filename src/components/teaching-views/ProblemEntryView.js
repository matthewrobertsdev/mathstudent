import React from 'react';
//just provides initial links to enter a problem or generate problems
const ProblemEntryView = (props) => {
  if (props.method == null) {
    return null;
  }
  //else return series of TeachingLinks
  return (
    <span>
      <h1 className="heading small-left-margin">{props.method[0]}</h1>
    </span>
  )
}
export default ProblemEntryView