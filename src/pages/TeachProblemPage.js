import React from 'react';
import TeachProblemView from '../components/teaching-views/TeachProblemView'
import AdView from '../components/AdView'
//Page for solving a problem
const TeachProblemPage = (props) => {
  const { match: { params } } = props;
  //set page title
  document.title=params.teachingName+" Problem"
  return (
    <main>
      {/*a back link or nothing*/}
      {/*createBackLink()*/}
      {/* an ad */}
      {createSpacer()}
      <div className='center-text text-margins'><AdView /></div>
      {/*the view where the actual solving is displayed*/}
      <TeachProblemView params={params}/>
    </main>
  )
  //if there is a valid location to go back to, it will be described in this link
  /*
  function createBackLink(){
    if (props.location.state && props.location.state.from) {
      if (props.location.state.from==="EnterProblemsPage"){
        return (
          <h1 className='large-left-margin'>
            <Link to={`../../../EnterProblems/${params.teachingName}`} className='link-heading'>
              Go to {params.teachingName}'s Enter Problem Page
            </Link>
          </h1>
        )
      } else if (props.location.state.from==="teachings"){
        return (
          <h1 className='large-left-margin'>
            <Link to={`../../../teachings/${params.teachingName}/${params.method}`} className='link-heading'>
              Back to Teaching
            </Link>
          </h1>
        ) 
      } else if (props.location.state.from==="SolvePage"){
        return (
          <h1 className='large-left-margin'>
            <Link to={`../../../../solve/teachings/${params.teachingName}/${params.method}/${params.parameters}`} className='link-heading'>
              Back to Enter Solution Page
            </Link>
          </h1>
        ) 
      }
    }
  }
  */

  //spacer for if no back button is present
  function createSpacer() {
      return (
        <div>
          <br></br>
          <br></br>
        </div>
      )
    }
}
export default TeachProblemPage