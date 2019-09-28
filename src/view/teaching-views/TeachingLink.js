import React from 'react';
import { Link } from 'react-router-dom';
import '../views-general/app.css';
class TeachingLink extends React.Component{
      render() {
        return(
          <Link className={"textLink"} to={`/teaching/${this.props.codeName}`}>{this.props.displayName}</Link>
        );
      }
}
export default TeachingLink;