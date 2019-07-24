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
          className="mathquill-example-field"
          latex={this.state.latex}
          onChange={mathField => {
            const latex = mathField.latex()
            const text = mathField.text()
            console.log('latex changed:', latex)
            console.log('text changed:', text)
            this.setState({ latex, text })
            this.props.onChange(latex);
          }}
          mathquillDidMount={el => {
            this.mathQuillEl = el
          }}
        />
    )
  }
  


}


export default FractionInput;

//<input className='fraction'></input><input className='fraction'></input>

/*




*/