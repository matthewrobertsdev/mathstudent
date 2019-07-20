import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      URLpathname: state.URLpathname
    }
  };

class UnconnectHeaderView extends React.Component{

      render() {
        return(
  
            <div>{this.createHeaderView()}</div>
  
        );
      }

      createHeaderView(){
        if (this.props.URLpathname==='/'){
            return (
            <div></div>
            );
        }
        else{
            return (
            <div className='NavBar'>
            <NavLink to='/'>Curriculum</NavLink>
            </div>
        );
        }
      }
}

const HeaderView=connect(mapStateToProps,null)(UnconnectHeaderView)

export default HeaderView;
