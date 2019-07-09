import { bindActionCreators } from "redux";

const initialState = {
    loaded: false,
    topics: {curriculum:[1]},
    teaching: null,
    error: null
  };

const appReducer=(state=initialState, action) => {
    switch (action.type) {
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