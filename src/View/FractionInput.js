import React from 'react';
import './app.css';
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill';

addMathquillStyles();


class FractionInput extends React.Component{

  constructor() {
    super();
    this.state = {
      latex: '',
    }
  }


  render() {
    return (
      <MathQuill
        latex={this.state.latex} // Initial latex value for the input field
        onChange={latex => {
          // Called everytime the input changes
          this.setState({ latex });
          this.props.onChange(latex);
        }}
      />
    )
  }
  


}


export default FractionInput;

//<input className='fraction'></input><input className='fraction'></input>