import React from 'react';
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill';
import { addInputPair, updateActiveKeyAndValue, updateActiveKey} from '../Actions';
import { connect } from 'react-redux';
import isMobile from '../Model/utilities/IsMobile';
import './app.css';
addMathquillStyles();
const mapStateToProps = (state) => { return { inputMap: state.inputMap, teaching: state.teaching, activeKey: state.activeKey} };

const mapDispatchToProps = (dispatch) => { return {

        updateActiveKeyAndValue: (keyID, value) => { dispatch(updateActiveKeyAndValue(keyID, value))},

        addInputPair: (keyID, value) => { dispatch(addInputPair(keyID, value)); },

        updateActiveKey: (key) => {dispatch(updateActiveKey(key)); } } };
        
class UnconnectedNumberInput extends React.Component{
    constructor(props) {
        super(props);
        if( isMobile()) { this.state = {index: this.props.index}
        } else { this.state = { latex: '', text: '', index: this.props.index, classID: this.props.classID }
        } this.mathQuillEl = null
    }
    componentWillMount() { const {addInputPair} = this.props; addInputPair(this.props.keyID, ''); }
    render() {
        if( isMobile() ) {
                    return (<span onKeyDown={(e) => this.onKeyPressed(e)}>
                    <button  className={this.props.keyID===this.props.activeKey 
                    ? "SelectedMathText creator-text-size" : "MathText creator-text-size"} 
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
                        this.props.textHandler(this.state.index, this.state.latex);
                    }} mathquillDidMount={el => { this.mathQuillEl = el; }}/> </span> )
        }
    }
    forClick() { const { updateActiveKey } = this.props; updateActiveKey(this.props.keyID); }
    getMobileValue() { return this.props.inputMap[this.props.keyID];}
    onKeyPressed(e) {
        if (e.metaKey && (e.key==="h"||e.key==="q")){ return; }
        switch (e.key) {
            case 'Tab': case 'Backspace': case ' ': case '1':case '2':case '3':case '4':case '5':
            case '6':case '7':case '8':case '9':case '0': case '/':case '-':
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
const NumberInput=connect(mapStateToProps, mapDispatchToProps)(UnconnectedNumberInput)
export default NumberInput;