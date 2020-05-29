import React from 'react';

const ProblemGenerationView = (props) => {
  if (props.method == null) {
    return null;
  }
  return (
    <div className='center-text'>
      <h1 className='h1-2'>{props.method[0]}:</h1>
      <label className='heading' for={props.method[0]}>
        Quantity:
      </label>
      <input id={props.method[0]} defaultValue={0} min={0} type='number' 
      className='small-left-margin'/>
    </div>
  )
}
export default ProblemGenerationView