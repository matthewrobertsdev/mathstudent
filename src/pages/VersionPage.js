import React, { useEffect } from 'react';
import { mainHeading } from '../styles/Styles'
import LastCheckedVersionView from '../components/LastCheckedVersionView'
import TellVersionView from '../components/TellVersionView'
//tells status of cached version (It's a Progressive Web App)
const VersionPage = () => {
  //update page title on navigation to page
  useEffect(() => { document.title = "Version" })
  return (
    <div className="center-text">
      {/*Tells if updates have been found*/}
      <LastCheckedVersionView />
      {/*Tells what, if any, update has been cached*/}
      <TellVersionView />
      {/*Explanation of how to check for an update*/}
      <h1 className={mainHeading}>
        Reload the page to see if a new update has been found.</h1>
      {/*Explanation of how to use the latest cached update*/}
      <h1 className={mainHeading}>
        Latest cached version only runs if you have closed every single page in your browser that has Math Teacher,
        so that none were open so that the new version could be launched when you next opened a Math Teacher page.
      </h1>
    </div>
  )
}
export default VersionPage;