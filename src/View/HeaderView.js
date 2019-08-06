import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { URLpathname: state.URLpathname } };
class UnconnectHeaderView extends React.Component{
      render() {
        return(
            <div>{this.createNavBar()}</div>
        );
      }
      createNavBar() { var headerView=[];

        if (this.props.URLpathname==='/'){ headerView.push(this.createDownloadPageLink()); }

        else if (this.props.URLpathname!=='/'){ headerView.push(this.createCurriculumLink()); }

        return headerView; }

      createCurriculumLink(){ return (<NavLink className='NavLink float-left' to='/' key={1}>Curriculum</NavLink>); }
      
      createDownloadPageLink(){ return (<NavLink className='NavLink float-right' to='/' key={2}>Download</NavLink>); }
}
const HeaderView=connect(mapStateToProps,null)(UnconnectHeaderView)
export default HeaderView;
