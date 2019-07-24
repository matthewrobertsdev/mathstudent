import React from 'react';
import './app.css';
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill';
addMathquillStyles();
class FractionInput extends React.Component{
  constructor() {
    super();
    this.state = {
      latex: '',
      text: ''
    }
  }
  render() {
    return (
      <span onKeyDown={(e) => this.onKeyPressed(e)}>
        <MathQuill className="mathquill-field" latex={this.state.latex} onChange={mathField => {
            const latex = mathField.latex()
            const text = mathField.text()
            console.log('latex changed:', latex)
            console.log('text changed:', text)
            this.setState({ latex, text })
          }}
          mathquillDidMount={el => {
            this.mathQuillEl = el
          }}/>
      </span>
    )
  }
  onKeyPressed(e) {
    switch (e.key) {
      case '1':case '2':case '3':case '4':case '5':
      case '6':case '7':case '8':case '9':case '0':
      case '/':
      break;
      default:
        e.preventDefault();
    }
    if (this.state.latex.match("frac")&&e.key==='/'){
      e.preventDefault();
    }
  }
}
export default FractionInput;