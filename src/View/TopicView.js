import React from 'react';
import { Link } from 'react-router-dom';
/* for displaying a link to a teaching, that displays its name and loads that teaching when clicked */
class TopicView extends React.Component{
    constructor(props) { super(props); this.state=this.props.topic;}
      render() { return(
          /* will take user to teaching with these names.  Will get teaching from model. */
          <div> <Link className="Link" to={`/create/${this.props.topic.codeName}`}>{this.props.topic.displayName}</Link> </div>
        ); }
}
export default TopicView;