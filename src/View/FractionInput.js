import React from 'react';
import './app.css';
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill';
addMathquillStyles();
class FractionInput extends React.Component{
    constructor(props) {
        super(props);
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.state = {
            value: '',
            index: this.props.index
            }
        } else {
            this.state = {
            latex: '',
            text: '',
            index: this.props.index
            }
        }
        this.state.index=this.props.index;
        window.addEventListener ? window.addEventListener('focus', this.onFoucsChange, true) : window.attachEvent('onfocusout', this.onFoucsChange);
        window.addEventListener ? window.addEventListener('blur', this.onBlur, true) : window.attachEvent('onblur', this.onBlur);
    }
    render() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return (
                    <span onKeyDown={(e) => this.onKeyPressed(e)}>
                    <input value={this.state.value} onChange={(event) => {
                        this.setState({index: this.state.index, value: event.target.value });
                        this.props.textHandler(this.state.index, this.state.value);
                    }}/>
                    </span>
                    )
        } else {
            return (
                    <span onKeyDown={(e) => this.onKeyPressed(e)}>
                    <MathQuill className="mathquill-field" onKeyPress={console.log("a")}latex={this.state.latex} onChange={mathField => {
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
    }
    onKeyPressed(e) {
        if (e.metaKey && (e.key==="h"||e.key==="q")){
            return;
        }
        switch (e.key) {
            case 'Tab': case ' ':
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
