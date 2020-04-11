import React, { useEffect } from 'react';
import {connect } from 'react-redux';
import TeachingsOverview from '../components/teaching-views/TeachingsOverview';
import '../styles/app.css'
const mapStateToProps = (state) => { return { topics: state.teacher.topics } };
const TeachingsPage = (props) => {
  useEffect(()=>{document.title = "Teachings"})
        return (
          <div className='subject-view'>
            <br></br><br></br>
          <TeachingsOverview topics={props.topics}/>
          </div>
        );
}
export default connect(mapStateToProps)(TeachingsPage);