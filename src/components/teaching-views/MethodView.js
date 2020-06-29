import React, { useState, useEffect } from 'react';
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
  //setText from useState hook
  const [text, setText] = useState(initialText);

  const [paramsState, setParamsState]=useState(null)
  
  useEffect( () => {
    if (props.params!==paramsState){
      setParamsState(props.params)
      setText(initialText)
    }
  }, [props.params, paramsState, initialText] )

  if (props.method == null) {
    return null;
  }
  return (
    <div className='large-margins'>
      {props.method.map((_, index) => {
        if (index < 2) {
          return null
        }
        //labels for the inputs
        else if (index % 2 === 0) {
          return (
            <label htmlFor={props.method[0] + "-" + props.method[index]}
              className='heading medium-line-height label small-right-margin'
              key={props.method[0] + "-" + props.method[index] + 'label'}>
              {props.method[index]}:
            </label>
          )
        } else {
          //the inputs--controlled components
          return (
            <span key={props.method[0] + "-" + props.method[index - 1] + 'input-and-span'}
            className='large-right-margin'>
              <input id={props.method[0] + "-" + props.method[index - 1]}
                key={props.method[0] + "-" + props.method[index - 1] + 'input'}
                 value={text[index.toString()]} onChange={
                  (event) => {
                    setText({
                      ...text,
                      [index.toString()]: event.target.value
                    });
                  }
                } />
            </span>
          )
        }
      })}
      {/*solve button links to next page*/}
      <Link to={{pathname: getURL(), state: {from: props.from}}}
        className='create-button' tabIndex={0}>
        Solve
      </Link>
    </div>
  )
  function getURL() {
    let url=''
    if (props.from==='teachings'){
      url+='../../teachings/'
    } else if (props.from==='EnterProblemsPage') {
      url+='../solve/'
    }
    url+=props.teacher.teaching.objectName+"/"
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