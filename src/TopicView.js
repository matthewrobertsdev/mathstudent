import React from 'react';
import { connect } from 'react-redux';
import {getTopics} from './Actions';
import { Link } from 'react-router-dom';


const mapDispatchToProps = (dispatch) => {
  return {
    //will get teaching from home of teachings once implemented
    getTeaching: () => {

      //dispatch(getTopics());
      console.log("Link clicked")
    }
  }
};

//for displaying a link to a teaching, that displays its name and loads that teaching when clicked
class TopicsView extends React.Component{

    constructor(props) {
        super(props);
        this.state=this.props.topic
      }

      render() {
        return(
  
            //will take user to teaching with these names.  Will get teaching from home first.
          <div>
              <Link to="/teaching" onClick={this.props.getTeaching}>{this.props.topic.displayName}</Link>
          </div>
  
        );
      }

}

const Topic_View=connect(mapDispatchToProps)(TopicsView)

export default Topic_View;