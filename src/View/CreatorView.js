import React from 'react';
import { connect } from 'react-redux';
import './app.css';

const mapStateToProps = (state) => {
  return {
    teaching: state.teaching
  }
};

//for displaying a link to a teaching, that displays its name and loads that teaching when clicked
class UnconnectedCreatorView extends React.Component{

    constructor(props) {
        super(props);
        this.state=this.props.methodSignature;
      }


      render() {
        return(
  
            //will take user to teaching with these names.  Will get teaching from home first.
          <div className='CreatorView'>
              <h3>{this.props.methodSignature[0]}</h3>
              {this.createView()}<button>Create a {this.props.teaching.displayNameSingular}</button>
          </div>
  
        );
      }

      createView(){
        var creatorView=[];
        for (var i=0; i<this.props.methodSignature.length; i++){
          if (i<2){
          }
          else if (i%2===0){
            creatorView.push(<span className='small-right-margin'>{this.props.methodSignature[i]+':'}</span>);
          }else{
            creatorView.push(<span className='medium-right-margin'><input></input></span>);
            creatorView.push(<br className='hide-for-not-small'></br>);
          }
        }
        return creatorView;
      }

}

const CreatorView=connect(mapStateToProps, null)(UnconnectedCreatorView)

export default CreatorView;