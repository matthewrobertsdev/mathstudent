import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//can enter a problem
const MethodView = (props) => {

  //initial state for inputs
  let initialText = {}
  for (let index = 2; index < props.method.length; index++) {
    if (index % 2 === 1) {
      initialText[index.toString()] = ""
    }
  }
  const [text, setText] = useState(initialText);
  if (props.method == null) {
    return null;
  }
  return (
    <span>
      {props.method.map((_, index) => {
        if (index < 2) {
          return null
        }
        //labels for the inputs
        else if (index % 2 === 0) {
          return (
            <label htmlFor={props.method[0] + "-" + props.method[index]}
              className='heading medium-line-height small-left-margin label'
              key={props.method[0] + "-" + props.method[index] + 'label'}>
              {props.method[index]}:
            </label>
          )
        } else {
          //the inputs--controlled components
          return (
            <span key={props.method[0] + "-" + props.method[index - 1] + 'input-and-span'}>
              <input id={props.method[0] + "-" + props.method[index - 1]}
                className='fixed-small-left-margin'
                key={props.method[0] + "-" + props.method[index - 1] + 'input'}
                value={text[index.toString()]} onChange={
                  (event) => {
                    setText({
                      ...text,
                      [index.toString()]: event.target.value
                    }); console.log(text[index.toString()])
                  }
                } />
              <span className='small-space medium-line-height'
                key={props.method[0] + "-" + props.method[index - 1] + '-span'}>
              </span>
            </span>
          )
        }
      })}
      {/*solve button links to next page*/}
      <Link to={{pathname: '../solve/' + getURL(), state: {from: "EnterProblemsPage"}}}
        className='create-button'>
        Solve
      </Link>
    </span>
  )
  function getURL() {
    let url=props.teacher.teaching.objectName+"/"
    url +=props.method[1]+"/"
    for (let index = 2; index < props.method.length; index++) {
      if (index % 2 === 0) {
        url += "@" + props.method[index].replace(" ", "-")
      } else {
        url += "@" + text[index.toString()]
      }
    }
    return url
  }
}
export default MethodView