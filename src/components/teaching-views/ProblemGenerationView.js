import React from 'react';

//for generating a problem for a method
//incomplete
const ProblemGenerationView = (props) => {
  if (props.method == null) {
    return null;
  }
  return (
    <div className='center-text'>
      <h1 className='h1-2'>{props.number+') '+props.method[0]}:</h1>
      <label className='heading' htmlFor={props.method[0]}>
        Quantity:
      </label>
      <input id={props.method[0]} defaultValue={0} min={0} type='number' 
      className='small-left-margin'/>
    </div>
  )
}
export default ProblemGenerationView