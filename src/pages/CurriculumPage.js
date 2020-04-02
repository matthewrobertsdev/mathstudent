import React from 'react';
import {connect } from 'react-redux';
import TeachingsOverview from '../components/teaching-views/TeachingsOverview'
import '../styles/app.css'
const mapStateToProps = (state) => { return { curriculum: state.teacher.curriculum } };
const CurrciulumPage = (props) => {
        return (
          <div className='subject-view'>
            <br></br>
            {createCourseViews(props)}
          </div>
        );
        function createCourseViews(props) {
          if (props.curriculum==null) {
            return null
          }
          const coursesList = props.curriculum.map( (course, index) => {
            console.log(props.curriculum)
            return (
                <div key={index}>
                  <h2 className="heading heading-text-size">{course.name}</h2>
                  {<TeachingsOverview topics={course.topics}/>}
                <br></br>
                </div>
            );
          });
          return coursesList
        }
}
export default connect(mapStateToProps)(CurrciulumPage);