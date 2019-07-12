import React from 'react';
import { Link } from 'react-router-dom';

//for displaying a link to a teaching, that displays its name and loads that teaching when clicked
class TopicsView extends React.Component{

    constructor(props) {
        super(props);
        this.state=this.props.topic
      }
//onClick={() => this.props.getTeaching(this.props.topic.teachingName)}>
      render() {
        return(
  
            //will take user to teaching with these names.  Will get teaching from home first.
          <div>
              <Link to={{pathname: `/teachings/${this.props.topic.teachingName}`, query:this.props.topic}}>{this.props.topic.displayName}</Link>
          </div>
  
        );
      }

}

const Topic_View=TopicsView;

export default Topic_View;