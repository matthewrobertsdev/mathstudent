import React from 'react';
import { connect } from 'react-redux';
import { getTeaching, clearTeaching, updateURL, updateActiveValue, setTeachingObjectName, setDisplayTeaching} from '../../manager/Actions';
import CreatorView from './CreatorView';
import isMobile from '../../model/utilities/IsMobile';
import NumberKeyboard from '../keyboard-views/NumberKeyboard';
import KeyboardSpacer from '../keyboard-views/KeyboardSpacer';
import AboutSection from './AboutSection'
import TeachingView from './TeachingView'
import 'react-simple-keyboard/build/css/index.css';
import '../views-general/app.css';
const mapStateToProps = (state) => { return { teaching: state.teaching, displayTeaching: state.displayTeaching, 
  callingStrings: state.callingStrings} };
const mapDispatchToProps = (dispatch) => {
  return { /* gets teaching */ getTeaching: (teachingName) => { dispatch(getTeaching(teachingName)); },
    clearTeaching: () => { dispatch(clearTeaching()); },
    updateURL: () => { dispatch(updateURL()); },
    updateActiveValue: (key) => { dispatch(updateActiveValue(key)); } ,
    setTeachingObjectName: (teachingName) => { dispatch(setTeachingObjectName(teachingName)); }, 
    setDisplayTeaching: (teachingName) => { dispatch(setDisplayTeaching(teachingName)); } }; };
/* This view is for the UI for creating a MathTeachingObject */
class UnconnectedCreateView extends React.Component {
  constructor(props) { super(props); this.state={ activeText: null};
  const { match: { params } } = this.props;
    const { clearTeaching, setTeachingObjectName, getTeaching} = this.props;
    clearTeaching(); setTeachingObjectName(params.teachingName);
    console.log(params.teachingName);
    getTeaching(params.teachingName);
    updateURL();
    document.title="Create a "+params.teachingName;
}
activeInput='';
  componentWillMount() { 
    this.teachingViewRef=React.createRef();
    //this.teachingViewRef = React.createRef();
    //this.scrollToTeaching = () => this.scrollToRef(this.teachingViewRef);
  }
  componentWillUnmount() { 
    const {setDisplayTeaching}=this.props;
    setDisplayTeaching(false);
  }
  render() {
    return (
      <div className='fullWidth'>
        <div className='center-text textMargins'>
        {this.createAD()}
        {/* About section */}
        <h1 className="main-text-color">About {this.props.teaching.displayNamePlural}</h1>
        {this.createAboutSection()}
        {this.createAD()}
        {/* Display TeachingView if an object has been created */}
        {this.displayChosenObject()}
        {this.createInputHeading()}
        </div>
        <br></br>
        <div className='fullWidth center-text'>
          {/* Display CreatorViews to create objects */}
        <h1 className="main-text-color">Create {this.props.teaching.displayNamePlural}</h1>
        {this.createCreatorViews()}
        </div>
        {/* On mobile, display keyboard */}
        {this.addKeyboardForMobile()}
      </div>
    );
  }
  createAboutSection(){
      return (<div>
        <AboutSection/>
        <br></br>
        <br></br>
        </div>)
  }
  displayChosenObject(){
      if (this.props.displayTeaching){
        return (
        <div ref={this.teachingViewRef}>
        {<TeachingView/>}
        <br></br>
        <br></br>
        {this.createAD()}
        </div>
      );
      } else {
        return (<span ref={this.teachingViewRef}></span>);
      }
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
  createCreatorViews() {
    if (this.props.teaching.creationMethodSignatures === undefined) { return; }
    const creatorViews = this.props.teaching.creationMethodSignatures.map((methodSignature, i) => {
      return (
        <div key={i} className='fullWidth'>
          <CreatorView className='CreatorView fullWidth' methodSignature={methodSignature} 
          row={this.createKey(i)} teachingViewRef={this.teachingViewRef}></CreatorView>
          {this.createAdEverySecond(i)}
        </div>
      );
    });
    return creatorViews;
  }
  createAdEverySecond(i){
      if (i-1%2===0){
        return <div className='fullWidth'>{this.createAD()}</div>
      }
  }

  onKeyPress = key => { const {updateActiveValue}=this.props; updateActiveValue(key); };

  addKeyboardForMobile() { if( isMobile() ) { return <div><NumberKeyboard keyPressHandler={this.onKeyPress}/><KeyboardSpacer/></div> } 
  else {return <div><br></br><br></br><br></br><br></br></div>}}

  createKey(index) { return this.props.teaching.objectName+"-"+index; }

}
const CreateView = connect(mapStateToProps, mapDispatchToProps)(UnconnectedCreateView)
export default CreateView;