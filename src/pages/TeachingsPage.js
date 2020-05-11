import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TeachingsOverview from '../components/teaching-views/TeachingsOverview';
import '../styles/app.css'
//list all teachings on a page in alphabetical order
//for users to look through and access
const TeachingsPage = () => {
  //there is a model for all topics
  const topics = useSelector(state => state.teaching.topics)
  useEffect(() => { document.title = "Teachings" })
  return (
    <div className='subject-view'>
      <br></br><br></br>
      {/*contains title and code name*/}
      <TeachingsOverview topics={topics} />
    </div>
  );
}
export default (TeachingsPage);