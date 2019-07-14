

const initialState = {
    loaded: false,
    //all topics for now
    topics: [],
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
        case 'GET_TEACHING':
            console.log('should get teaching')
            console.log('hello teaching')
            console.log(action.teaching)
            console.log('hello teaching')
            if (action.teaching==null){
                return initialState
            }
            return {
                ...state,
                teaching: action.teaching
              };
        case 'CLEAR_TEACHING':
                return {
                    ...state,
                    teaching: action.teaching
                  };
        default:
            return state;
    }
};

export default appReducer;