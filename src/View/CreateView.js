import React from 'react';
import { connect } from 'react-redux';
import { getTeaching, clearTeaching, updateURL, updateActiveValue} from '../Actions';
import CreatorView from './CreatorView';
import isMobile from '../Model/utilities/IsMobile';
import NumberKeyboard from './NumberKeyboard'
import KeyboardSpacer from './KeyboardSpacer';
import TeachingLink from './TeachingLink'
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
  constructor(props) { super(props); this.state={ activeText: null}; } activeInput='';
  componentWillMount() { 
    const { clearTeaching } = this.props;
    clearTeaching();
    const { match: { params } } = this.props;
    const { getTeaching, updateURL } = this.props;
    getTeaching(params.teachingName);
    updateURL();
    this.render();
  }
  render() {
    return (
      <div className='fullWidth'>
        <div className='center-text textMargins'>
        {this.createAD()}
        <h1 className="CreateView">About {this.props.teaching.displayNamePlural}</h1>
        {this.createAboutSection()}
        <br></br>
        <br></br>
        {this.createAD()}
        <h1 className="CreateView">Create {this.props.teaching.displayNamePlural}</h1>
        {this.createInputHeading()}
        </div>
        <br></br>
        <div className='fullWidth center-text'>
        {this.createCreatorViews()}
        </div>
        {this.addKeyboardForMobile()}
        <KeyboardSpacer/>
      </div>
    );
  }
  createAD(){
    return <div>
      <br></br>
      <div className='hide-for-small leaderBoardAd center-text'>There is an ad here when you are online.<br></br><br></br>Ads help Learn Math make money.</div>
      <div className='hide-for-big mobileBanner center-text'>There is an ad here when you are online.<br></br><br></br>Ads help Learn Math make money.</div>
    </div>
  }
  createInputHeading(){
    var heading=<span></span>;
    if(this.props.teaching&&this.props.teaching.anyNumbers){
    heading=<h3 className="Heading">Enter numbers as integers or fractions.  If you want a fraction, type '/' to separate the denominator from the numerator.</h3>;
    }
    else if (this.props.teaching&&this.props.teaching.onlyFractions){
      heading=<h3 className="Heading">To type a fraction, type '/' to separate the denominator from the numerator.</h3>;
    }
    return heading;
  }

  createAboutSection(){
    if(this.props.teaching.about){
    var aboutSection=[]
    for (var i=0; i<this.props.teaching.about.length; i++){
      console.log("abcd");
      if ( typeof this.props.teaching.about[i]==='string'){
        if (this.props.teaching.about[i]==='\n\n'){
          aboutSection.push(<div className='newLineDiv'></div>)
        }
        else{
        aboutSection.push(<span key={i} className="Heading">{this.props.teaching.about[i]}</span>)
        }
      } else {
        aboutSection.push(<TeachingLink key={i} displayName={this.props.teaching.about[i].displayName} 
          codeName={this.props.teaching.about[i].codeName}></TeachingLink>)
        }
  }
  return aboutSection
  }
}
  createCreatorViews() {
    if (this.props.teaching.creationMethodSignatures === undefined) { return; }
    const creatorViews = this.props.teaching.creationMethodSignatures.map((arg, i) => {
      return (
        <div key={i} className='fullWidth'>
          <CreatorView className='CreatorView fullWidth' methodSignature={arg} activateInputHandler={this.activateInputHandler} 
          row={this.createKey(i)}></CreatorView>
          {this.createAdEverySecond(i)}
        </div>
      );
    });
    return creatorViews;
  }
createMediumRectangleEveryFirst(i){
  if (i-2%2===0){
    
  }
}
  createAdEverySecond(i){
      if (i-1%2===0){
        return <div className='fullWidth'>{this.createAD()}</div>
      }
  }
  onKeyPress = key => { const {updateActiveValue}=this.props; updateActiveValue(key); };

  addKeyboardForMobile(){ if( isMobile() ){ return <NumberKeyboard keyPressHandler={this.onKeyPress}/> } }

  createKey(index){ return this.props.teaching.objectName+"-"+index; }

  activateInputHandler(input){ this.activeInput=input; }
}
const CreateView = connect(mapStateToProps, mapDispatchToProps)(UnconnectedCreateView)
export default CreateView;