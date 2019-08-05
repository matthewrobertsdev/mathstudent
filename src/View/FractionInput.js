import React from 'react';
import './app.css';
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill';
import { addToInputMap, addToActiveMap, changeSelected, updateActiveKey} from '../Actions';
import { connect } from 'react-redux';
import isMobile from '../Model/utilities/IsMobile';
addMathquillStyles();
const mapStateToProps = (state) => {
    console.log(state)
    return { inputMap: state.inputMap, activeMap: state.activeMap, teaching: state.teaching, activeKey: state.activeKey} };
const mapDispatchToProps = (dispatch) => {
    return {
                updateActiveKey: (keyID) => { dispatch(updateActiveKey(keyID)); } } 
    };
class UnconnectedFractionInput extends React.Component{
    constructor(props) {
        super(props);
        if( isMobile()) {
            this.state = { mobileValue: '', mobileState: false, index: this.props.index}
        } else {
            this.state = { latex: '', text: '', index: this.props.index, classID: this.props.classID }
        }
        this.mathQuillEl = null
    }
    componentWillMount() {
        updateActiveKey(this.props.keyID);
      }
    render() {
        if( isMobile() ) {
            return (
                // className={this.state.active ? "SelectedMathText creator-text-size" : "MathText creator-text-size"}
                    <span onKeyDown={(e) => this.onKeyPressed(e)}>
                    <button  className={this.props.keyID===this.props.activeKey ? "SelectedMathText creator-text-size" : "MathText creator-text-size"} pattern='^(-?\\d\\/-?\\d)$|^(-?\\d+)$' 
                    onClick={() =>this.forClick()}/>
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
    forClick(){
        const { updateActiveKey } = this.props;
        updateActiveKey(this.props.keyID); console.log("please hello again")
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
            if (this.state.mobileValue.match("/")&&e.key==='/'){
                e.preventDefault();
            }
        } else {
            if (this.state.latex.match("frac")&&e.key==='/'){
                e.preventDefault();
            }
        }
    }
}
const FractionInput=connect(mapStateToProps, mapDispatchToProps)(UnconnectedFractionInput)
export default FractionInput;


/*
<button className="MathText creator-text-size" pattern='^(-?\\d\\/-?\\d)$|^(-?\\d+)$' mobileValue={this.state.mobileValue} onChange={(event) => {
                        window.alert(this.state.mobileValue)
                        if (event.key==='/'){
                            console.log("a win");
                        }
                        this.setState({index: this.state.index, mobileValue: event.target.mobileValue });
                        this.props.textHandler(this.state.index, event.target.mobileValue);
                        console.log(event.target.mobileValue)
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
                    if( isMobile() ) {
            window.addEventListener ? window.addEventListener('focus', this.onFoucsChange, true) : window.attachEvent('onfocusout', this.onFoucsChange);  
            window.addEventListener ? window.addEventListener('blur', this.onBlur, true) : window.attachEvent('onblur', this.onBlur);


            onChange={(event) => {
                        window.alert(this.state.mobileValue)
                        if (event.key==='/'){
                            console.log("a win");
                        }
                        this.setState({index: this.state.index, mobileValue: event.target.mobileValue });
                        this.props.textHandler(this.state.index, event.target.mobileValue);
                        console.log(event.target.mobileValue);
                    }}
        }

        selectButton(){
        let selectedElements=document.getElementsByClassName("SelectedMathText");
        if (selectedElements) {
        for (var i=0; i<selectedElements.length; i++){
            selectedElements[i].className="MathText creator-text-size";
        }
    }
        document.getElementById(this.props.classID).className="SelectedMathText creator-text-size";
      }

      addToInputMap: (keyID, value) => { dispatch(addToInputMap(keyID, value)); },
                addToActiveMap: (keyID, value) => { dispatch(addToActiveMap(keyID, value)); },
                changeSelected: (keyID) => { dispatch(changeSelected(keyID)); },
*/