import React from 'react';
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill';
import { updateKeyAndValue, updateActiveKey, updateDisplayKeyboard} from '../../../manager/Actions';
import { connect } from 'react-redux';
import isMobile from '../../../utilities/IsMobile';
import '../../views-general/app.css';
addMathquillStyles();
const mapStateToProps = (state) => { return { inputMap: state.input.inputMap, activeKey: state.input.activeKey, 
    displayKeyboard: state.input.displayKeyboard} };
const mapDispatchToProps = (dispatch) => { return {
        updateKeyAndValue: (key, value) => { dispatch(updateKeyAndValue(key, value)); },
        updateActiveKey: (key) => {dispatch(updateActiveKey(key)); },
        updateDisplayKeyboard: (isDisplayed) => {dispatch(updateDisplayKeyboard(isDisplayed))}} };
class UnconnectedNumberInput extends React.Component{
    constructor(props) {
        super(props);
        if( isMobile()) { this.state = {index: this.props.index}
        } else { this.state = { latex: '', text: '', index: this.props.index, classID: this.props.classID } } 
        this.mathQuillEl = null
        this.props.updateKeyAndValue(this.props.gridID, '')
    }
    render() {
        if( isMobile() ) {
                    return (<span onKeyDown={(e) => this.onKeyPressed(e)}>
                    <button  className={this.props.gridID===this.props.activeKey 
                    ? "selected-math-text mobile-input-size" : "math-text mobile-input-size"} 
                    pattern='^(-?\\d\\/-?\\d)$|^(-?\\d+)$' onClick={() =>this.forClick()}>
                    {this.getMobileValue()}</button>
                    </span>) }
        else { 
                    return (
                    <span onKeyDown={(e) => this.onKeyPressed(e)}>
                    <MathQuill className="mathquill-field" latex={this.state.latex} onChange={mathField => {
                        const latex = mathField.latex();
                        const text = mathField.text();
                        this.setState({latex: latex, text: text, index: this.state.index});
                        this.props.textHandler(this.props.gridID, this.state.latex);
                    }} mathquillDidMount={el => { this.mathQuillEl = el; }}/> </span> );
        }
    }
    forClick() { this.props.updateActiveKey(this.props.gridID); this.props.updateDisplayKeyboard(true); }
    getMobileValue() { return this.props.inputMap[this.props.gridID]; }
    onKeyPressed(e) {
        if (e.metaKey && (e.key==="h"||e.key==="q")){ return; }
            switch (e.key) {
                case 'Tab': case 'Backspace': case ' ': case '1':case '2':case '3':case '4':case '5':
                case '6':case '7':case '8':case '9':case '0': case '/':case '-':
                    break;
                default:
                    e.preventDefault();
        }
        if( isMobile() ) { if (this.state.mobileValue.match("/")&&e.key==='/'){ e.preventDefault(); }
        } else if (this.state.latex.match("frac")&&e.key==='/'){ e.preventDefault(); }
    }
}
const NumberInput=connect(mapStateToProps, mapDispatchToProps)(UnconnectedNumberInput)
export default NumberInput;