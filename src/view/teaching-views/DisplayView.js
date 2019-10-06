import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import 'katex/dist/katex.min.css';
import {BlockMath } from 'react-katex';
import '../views-general/app.css';
const mapStateToProps = (state) => {
    return { teacher: state.teacher, paramaterLabels: state.paramaterLabels } };
class UnconnectedDisplayView extends React.Component{
    render() {
        return(
          this.displayMath()
        );
      }
      displayMath(){
          const display=<div className='text-margins'>
          <h1 className="main-text-color center-text">{this.createTitleString()}</h1>
          <h1 className="main-text-color center-text">Here it is:</h1>
          <BlockMath className='block-math'>{this.createBlockLatex()}</BlockMath>
          </div>
          return display
      }
      createTitleString(){
        if(this.props.teacher){
          var titleString='';
          titleString+="We've created a "+this.props.teacher.teaching.singularLowerCase+" with ";
          var c=0; var m=1;
          while (c<this.props.paramaterLabels.length) {
            titleString+=this.props.paramaterLabels[c]+': '+this.props.creationStrings[m]
            c++; m++;
            if (c<this.props.paramaterLabels.length){
              titleString+=', '
            }
          }
          return titleString;
        }
      }
      createBlockLatex(){
        if(this.props.teacher){
          return this.props.teacher.latex();
        }
      }
}
const DisplayView=connect(mapStateToProps, null)(withRouter(UnconnectedDisplayView));
export default DisplayView;