import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TeachingsOverview from '../components/teaching-views/TeachingsOverview';
import '../styles/app.css'
//list all teachings on a page in alphabetical order
//for users to look through and access
const TeachingsPage = () => {
  //there is a model for all topics
  const topics = useSelector(state => state.teaching.topics)
  //set title on navigation to page
  useEffect(() => { document.title = "Teachings" })
  return (
    //create TeachingOverview for all topics
    <main>
    <br></br><br></br>
    <div className='subject-view'>
      {/*contains titles with code names*/}
      <TeachingsOverview topics={topics} />
    </div>
    </main>
  );
}
export default TeachingsPage;