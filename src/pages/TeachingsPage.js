import React, { useEffect } from 'react';
import {useDispatch, connect } from 'react-redux';
import {getTopics, updateURL} from '../manager/Actions'
import TeachingView from '../view/teaching-views/small-views/TeachingView'
import '../styles/app.css'
const mapStateToProps = (state) => { return { topics: state.teacher.topics } };
const TeachingsPage = (props) => {
  const dispatch=useDispatch();
  useEffect( () => {dispatch(updateURL())})
        return (
          <div className='subject-view'>
            <br></br><br></br>
          <TeachingView topics={props.topics}/>
          </div>
        );
}
export default connect(mapStateToProps)(TeachingsPage);