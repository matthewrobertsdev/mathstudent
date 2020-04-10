import React from 'react';
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { pageNotFound: state.teacher.pageNotFound } };
const UncreatedTeachingView = (props) => {
    return createView(props)
    function createView(props) {
        if (props.pageNotFound) {
            return <div className='heading heading-size text-margins'>Sorry, but the teaching you are looking for cannot be found</div>
        } else {
            return null
        }
    }
}
export default  connect(mapStateToProps)(UncreatedTeachingView);