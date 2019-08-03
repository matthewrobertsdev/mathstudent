import React from 'react';
import './app.css';
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill';
import isMobile from '../Model/utilities/IsMobile';
addMathquillStyles();
class FractionInput extends React.Component{
    constructor(props) {
        super(props);
        if( isMobile()) {
            this.state = {
            value: '',
            index: this.props.index,
            classID: this.props.classID,
            active: false
            }
        } else {
            this.state = {
            latex: '',
            text: '',
            index: this.props.index,
            classID: this.props.classID,
            }
        }
        if( isMobile() ) {
            window.addEventListener ? window.addEventListener('focus', this.onFoucsChange, true) : window.attachEvent('onfocusout', this.onFoucsChange);  
            window.addEventListener ? window.addEventListener('blur', this.onBlur, true) : window.attachEvent('onblur', this.onBlur);
        }
        this.mathQuillEl = null
    }
    onFoucsChange(){
        //document.activeElement.blur();
        console.log("focused changed");
      }
    
      onBlur(){
        console.log("focus of element lost");
      }

      selectButton(){
          //let element=document.getElementById(this.state.classID);
          //console.log("abcd"+this.state.classID);
          //element.style.backgroundColor='red';
          this.setState(previousState => ({
            ...previousState,
            active: true
          }));
      }
      
    render() {
        if( isMobile() ) {
            return (
                    <span onKeyDown={(e) => this.onKeyPressed(e)}>
                    <button className={this.state.active ? "SelectedMathText creator-text-size" : "MathText creator-text-size"} pattern='^(-?\\d\\/-?\\d)$|^(-?\\d+)$' value={this.state.value} onClick={() => this.selectButton()} onChange={(event) => {
                        window.alert(this.state.value)
                        if (event.key==='/'){
                            console.log("a win");
                        }
                        this.setState({index: this.state.index, value: event.target.value });
                        this.props.textHandler(this.state.index, event.target.value);
                        console.log(event.target.value)
                    }}/>
                    </span>
                    )
        } else {
            return (
                    <span onKeyDown={(e) => this.onKeyPressed(e)}>
                    <MathQuill className="mathquill-field" latex={this.state.latex} onChange={mathField => {
                        const latex = mathField.latex();
                        const text = mathField.text();
                        this.setState({latex: latex, text: text, index: this.state.index});
                        this.props.textHandler(this.state.index, this.state.latex);
                    }}
                    mathquillDidMount={el => {
                    this.mathQuillEl = el;
                    }}/>
                    </span>
                    )
        }
    }
    createSubsittuteTextArea(){
        return (<span tabindex={0}> </span>);
    }

    
    onKeyPressed(e) {
        if (e.metaKey && (e.key==="h"||e.key==="q")){
            return;
        }
        switch (e.key) {
            case 'Tab': case 'Backspace': case ' ':
            case '1':case '2':case '3':case '4':case '5':
            case '6':case '7':case '8':case '9':case '0':
            case '/':case '-':
                break;
            default:
                e.preventDefault();
                
        }
        if( isMobile() ) {
            if (this.state.value.match("/")&&e.key==='/'){
                e.preventDefault();
            }
        } else {
            if (this.state.latex.match("frac")&&e.key==='/'){
                e.preventDefault();
            }
        }
    }
}
export default FractionInput;


/*
<button className="MathText creator-text-size" pattern='^(-?\\d\\/-?\\d)$|^(-?\\d+)$' value={this.state.value} onChange={(event) => {
                        window.alert(this.state.value)
                        if (event.key==='/'){
                            console.log("a win");
                        }
                        this.setState({index: this.state.index, value: event.target.value });
                        this.props.textHandler(this.state.index, event.target.value);
                        console.log(event.target.value)
                    }}/>
<MathQuill className="mathquill-field" latex={this.state.latex} config={{substituteTextarea: this.createSubsittuteTextArea}}onChange={mathField => {
                        const latex = mathField.latex();
                        const text = mathField.text();
                        this.setState({latex: latex, text: text, index: this.state.index});
                        this.props.textHandler(this.state.index, this.state.latex);
                    }}
                    mathquillDidMount={el => {
                    this.mathQuillEl = el
                    }}/>
*/