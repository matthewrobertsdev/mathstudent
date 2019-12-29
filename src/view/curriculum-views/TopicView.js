import React from 'react';
import { Link } from 'react-router-dom';
class TopicView extends React.Component{
    constructor(props) { super(props); this.state=this.props.topic;}
      render() { 
        return (
          <div> <Link className="link" to={`/teaching/${this.props.topic.codeName}`}>{this.props.topic.displayName}</Link> </div>
        ); }
}
export default TopicView;