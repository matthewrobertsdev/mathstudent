import React from 'react';
import { Link } from 'react-router-dom';

//all method teachings for this topic
const TableOfContentsView = (props) => {
  return (
    //ordered list for methods for table of contents
    <ol className='large-left-margin'>
    {props.methods.map( (method, index) => {
      return (
        <li className='link-heading' key={index}>
          <Link className='link-heading' to={`/teachings/${props.teachingName}/${method[1]}`}>
          {method[0]}
          </Link>
          {/* line breaks */}
          <br/>
          <br/>
        </li>
        )
    })}
    </ol>
  )
  function getLink(method){
    if (props.params.method){
      return `../${method[1]}`
    } else {
      return `/${method[1]}`
    }
  }
}
export default TableOfContentsView