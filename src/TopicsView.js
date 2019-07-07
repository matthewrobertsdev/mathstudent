import React from 'react';
import { connect } from 'react-redux';
import {getTopics} from './Actions';

const mapStateToProps = (state) => {
  return {
    topics: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopics: () => {
      console.log('should dispatch getTopics')
      dispatch(getTopics());
    }
  }
};

class TopicsView extends React.Component{

    constructor(props) {
        super(props);
        
      }

      componentWillMount() {
        console.log('component will mount');
        const { getTopics} = this.props;
        getTopics();
      }

      render() {
        return(
  
          <div>
          Topics Coming Soon!{this.props.topics}
          </div>
  
        );
      }

}

const topics_view=connect(mapStateToProps, mapDispatchToProps)(TopicsView)

export default topics_view;