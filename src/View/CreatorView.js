import React from 'react';
import { connect } from 'react-redux';
import DecimalInputView from './DecimalInputView';
import './app.css';



//for displaying a link to a teaching, that displays its name and loads that teaching when clicked
class CreatorView extends React.Component{

    constructor(props) {
        super(props);
        this.state=this.props.methodSignature;
      }


      render() {
        return(
  
            //will take user to teaching with these names.  Will get teaching from home first.
          <div className='CreatorView'>
              {this.createView()}<button>Create a {this.props.methodSignature[0]}</button>
          </div>
  
        );
      }
      createView2(){
        var creatorView=[];
        var displayName="";
        for (var i=0; i<this.props.methodSignature.length; i++){
          if (i<2){
            //do nothing
          }
          else{
            if (i%2==0){
              displayName=this.props.methodSignature[i];
            }
            else{
              console.log(i);
              console.log(displayName);
                creatorView.push(<DecimalInputView displayName={displayName}></DecimalInputView>);
            }
          }
        }
        return creatorView;
      }

      createView(){
        const inputTextBoxes = this.props.methodSignature.map( (arg,  index) => {
          if (index<2){
            return;
          }
          if (index%2==0){
              return  <span className='small-right-margin'>{arg+':'}</span>
          }
          return (
              <span className='medium-right-margin'><input></input></span>
          );
        });
        return inputTextBoxes;
      }

}

const Creator_View=connect(null,null)(CreatorView)

export default Creator_View;