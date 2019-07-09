

const initialState = {
    loaded: false,
    //all topics for now
    topics: {},
    //the teaching being taught
    teaching: {},
    error: {}
  };

const appReducer=(state=initialState, action) => {
    switch (action.type) {
        //action for getting topics for user choice
        case 'GET_TOPICS':
            console.log('should get topics')
            return {
                ...state,
                topics: action.topics
              };
        default:
            return state;
    }
};

export default appReducer;