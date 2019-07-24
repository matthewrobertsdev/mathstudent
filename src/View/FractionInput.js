import React from 'react';
import './app.css';
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill';
addMathquillStyles();
class FractionInput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      latex: '',
      text: '',
      index: this.props.index
    }
    this.state.index=this.props.index;
  }
  render() {
    return (
      <span onKeyDown={(e) => this.onKeyPressed(e)}>
        <MathQuill className="mathquill-field" latex={this.state.latex} onChange={mathField => {
            const latex = mathField.latex();
            const text = mathField.text();
            this.setState({ latex, text });
            this.props.latexHandler(this.state.index, this.state.latex);
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
      case '/':case '-':
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