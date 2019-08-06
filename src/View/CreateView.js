import React from 'react';
import { connect } from 'react-redux';
import { getTeaching, clearTeaching, updateURL, updateActiveValue} from '../Actions';
import CreatorView from './CreatorView';
import isMobile from '../Model/utilities/IsMobile';
import NumberKeyboard from './NumberKeyboard'
import KeyboardSpacer from './KeyboardSpacer';
import 'react-simple-keyboard/build/css/index.css';
import './app.css';
const mapStateToProps = (state) => {
  return { teaching: state.teaching}
};
const mapDispatchToProps = (dispatch) => {
  return { /* gets teaching */ getTeaching: (teachingName) => { dispatch(getTeaching(teachingName)); },
    clearTeaching: () => { dispatch(clearTeaching()); },
    updateURL: () => { dispatch(updateURL()); },
    updateActiveValue: (key) => { dispatch(updateActiveValue(key)); } }
};
/* This view is for the UI for creating a MathTeachingObject */
class UnconnectedCreateView extends React.Component {
  constructor(props) { super(props); this.state={ activeText: null }; } activeInput='';
  componentWillMount() { 
    const { match: { params } } = this.props;
    const { getTeaching, updateURL } = this.props;
    getTeaching(params.teachingName);
    updateURL();
  }
  componentWillUnmount() {
    const { clearTeaching } = this.props;
    clearTeaching();
  }
  render() {
    return (
      <div>
        <br></br>
        <div className='center-text'>
        <h1 className="CreateView">Create {this.props.teaching.displayNamePlural}</h1>
        <h3 className="Heading">Enter numbers as integers or fractions.  If you want a fraction, type '/' to separate the denominator from the numerator.</h3>
        </div>
        <br></br>
        {this.createCreatorViews()}
        {this.addKeyboardForMobile()}
        <KeyboardSpacer/>
      </div>
    );
  }
  createCreatorViews() {
    if (this.props.teaching.creationMethodSignatures === undefined) { return; }
    const creatorViews = this.props.teaching.creationMethodSignatures.map((arg, i) => {
      return (
        <div key={i}>
          <CreatorView className='CreatorView' methodSignature={arg} activateInputHandler={this.activateInputHandler} 
          row={this.createKey(i)}></CreatorView>
          <br></br>
        </div>
      );
    });
    return creatorViews;
  }
  onKeyPress = key => { const {updateActiveValue}=this.props; updateActiveValue(key); };

  addKeyboardForMobile(){ if( isMobile() ){ return <NumberKeyboard keyPressHandler={this.onKeyPress}/> } }

  createKey(index){ return this.props.teaching.objectName+"-"+index; }

  activateInputHandler(input){ this.activeInput=input; }
}
const CreateView = connect(mapStateToProps, mapDispatchToProps)(UnconnectedCreateView)
export default CreateView;