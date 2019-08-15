import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { URLpathname: state.URLpathname } };
class UnconnectHeaderView extends React.Component{
      render() {
        return(
            <div className="navBar">{this.createNavBar()}</div>
        );
      }
      createNavBar() { var headerView=[];

        headerView.push(this.createBackButton()); 
        headerView.push(this.createForwardButton()); 
        if (this.props.URLpathname!=='/'){ headerView.push(this.createCurriculumLink()); }
        if (this.props.URLpathname==='/'){ headerView.push(this.createDownloadPageLink()); }

        return headerView; }
        createBackButton(){ return (<span className='NavLink float-left' key={0} onClick={()=>this.goBack()}>Back</span>)};

        createForwardButton(){ return (<span className='NavLink float-left' key={1} onClick={()=>this.goForward()}>Forward</span>)};

      createCurriculumLink(){ return (<NavLink className='NavLink float-left' to='/' key={3}>Curriculum</NavLink>); }
        
      createDownloadPageLink(){ return (<NavLink className='NavLink float-right' to='/' key={4}>Download</NavLink>); }

      goBack(){
        this.props.history.goBack();
      }
      goForward(){
        this.props.history.goForward();
      }
}
const HeaderView=withRouter(connect(mapStateToProps,null)(UnconnectHeaderView));
export default HeaderView;
