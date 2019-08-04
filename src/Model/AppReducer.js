const initialState = {
    loaded: false,
    //all topics for now
    topics: [],
    //the teaching being taught
    teaching: {},
    error: {},
    URL: '',
    map: new Map()
  };
const appReducer=(state=initialState, action) => {
    switch (action.type) {
        //action for getting topics for user choice
        case 'GET_TOPICS':
            return {
                ...state,
                topics: action.topics
              };
        case 'GET_TEACHING':
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
        case 'UPDATE_URL':
            return {
                    ...state,
                    URLpathname: action.URLpathname
                };
        case 'CLEAR_MOBILE_INPUT_TEXT':
                return {
                    ...state,
                    value: action.value
                };
        case 'ADD_TO_MAP':
            return {
                ...state,
                map: state.map.set(action.key, action.value)
            };
        case 'CLEAR_MOBILE_INPUT_TEXT':
            return {
                ...state,
                value: action.value
            };
        default:
            return state;
    }
};
export default appReducer;