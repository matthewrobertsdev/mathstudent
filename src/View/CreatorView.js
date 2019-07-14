import React from 'react';
import { connect } from 'react-redux';
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