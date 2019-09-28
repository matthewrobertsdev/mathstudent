import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { URLpathname: state.URLpathname } };
class UnconnectHeaderView extends React.Component{
      render() { return( <div className="navBar">{this.createNavBar()}</div> ); }

      createNavBar() { var headerView=[];
        headerView.push(this.createCurriculumLink());
        headerView.push(this.createVersionPageLink());
        return headerView; }

      createBackButton(){ return (<span className='NavLink float-left' key={0} onClick={()=>this.goBack()}>Back</span>)};
      createForwardButton(){ return (<span className='NavLink float-left' key={1} onClick={()=>this.goForward()}>Forward</span>)};
      createCurriculumLink(){ return (<NavLink className={this.getClassName('/')}to='/' key={3}>Curriculum</NavLink>); }
      createVersionPageLink(){ return (<NavLink className={this.getClassName('/version')} to='/version' key={4}>Version</NavLink>); }
      goBack(){ this.props.history.goBack(); }
      goForward(){ this.props.history.goForward(); }
      getClassName(url){
        if (url===this.props.URLpathname){
            return 'selected-nav-link float-left';
        } else {
          return 'NavLink float-left';
        }
      }
}
const HeaderView=withRouter(connect(mapStateToProps,null)(UnconnectHeaderView));
export default HeaderView;
