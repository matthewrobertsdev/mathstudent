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
  
            <div>{this.createNavBar()}</div>
  
        );
      }

      createNavBar(){
        var headerView=[];
        if (this.props.URLpathname==='/'){
          headerView.push(this.createDownloadPageLink());
        }
        else if (this.props.URLpathname!=='/'){
          headerView.push(this.createCurriculumLink());
        }
        return headerView;
      }

      createCurriculumLink(){
          return (<NavLink className='float-left' to='/'>Curriculum</NavLink>);
      }

      createDownloadPageLink(){
        return (<NavLink className='float-right' to='/'>Download</NavLink>);
    }

}

const HeaderView=connect(mapStateToProps,null)(UnconnectHeaderView)

export default HeaderView;
