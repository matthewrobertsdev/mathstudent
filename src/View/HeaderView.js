import React from 'react';
import {NavLink} from 'react-router-dom';

const HeaderView=()=>(
    
    <header>
        <div className='NavBar'>
            <NavLink to='/'>Curriculum</NavLink>
        </div>
    </header>
);
export default HeaderView;