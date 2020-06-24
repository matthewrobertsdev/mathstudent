import React from 'react';
import { Link } from 'react-router-dom';
const TopicView = (props) => {
  return (
    <div>
      <Link className="link" to={`/${props.type}/${props.topic.codeName}`}>
        {props.topic.displayName}
      </Link>
    </div>
  );
}
export default TopicView;