import React from 'react';
//just provides initial links to enter a problem or generate problems
const ProblemEntryView = (props) => {
  if (props.method == null) {
    return null;
  }
  //else return series of TeachingLinks
  return <h1 className="heading">{props.method[0]}</h1>
}
export default ProblemEntryView