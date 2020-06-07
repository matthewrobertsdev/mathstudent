import React from 'react';
import { Link } from 'react-router-dom';
const SolvePage = (props) => {
  const { match: { params } } = props;
  document.title=params.teachingName+" Problem"
  return (
    <div>
      {createBackButton()}
    </div>
  )
  function createBackButton(){
    if (props.location.state && props.location.state.from) {
      if (props.location.state.from==="EnterProblemsPage"){
        return (
          <h1 className='large-left-margin'>
            <Link to={`../../../EnterProblems/${params.teachingName}`} className='link-heading'>
              Back to {params.teachingName}'s Enter Problem Page
            </Link>
          </h1>
        )
      }
    }
  }
}
export default SolvePage