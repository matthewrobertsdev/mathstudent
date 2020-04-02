import React from 'react';
import {Link} from 'react-router-dom'
const ProblemPicker = () => {
    return (
        <div className='full-width center-text'>
            <Link className='link center-text' to="/">Enter Problem</Link>
            <br></br>
            <br></br>
            <Link className='link center-text' to="/">Generate Problems</Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
       </div>);
}
export default ProblemPicker