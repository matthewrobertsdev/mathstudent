import React from 'react';
import { Link } from 'react-router-dom';

//can enter a problem
const TableOfContentsView = (props) => {
  return (
    <ol>
    {props.methods.map( (method, _) => {
      return (
        <li className='link-heading'>
          <Link className='link-heading'>
          {method[0]}
          </Link>
          <br/>
          <br/>
        </li>
        )
    })}
    </ol>
  )
}
export default TableOfContentsView