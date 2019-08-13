import React from 'react';
import { Link } from 'react-router-dom';
import './app.css'
/* for displaying a link to a teaching, that displays its name and loads that teaching when clicked */
class TeachingLink extends React.Component{
    constructor(props) {
        super(props);
        this.state=this.props.codeName
        this.state=this.props.singularLowerCase
      }
      render() {
        return(
          /* will take user to teaching with these names.  Will get teaching from model first. */
          <Link className={"textLink"} to={`/teaching/${this.props.codeName}`}>{this.props.displayName}</Link>
        );
      }
}
export default TeachingLink;