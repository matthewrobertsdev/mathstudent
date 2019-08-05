const initialState = {
    loaded: false,
    //all topics for now
    topics: [],
    //the teaching being taught
    teaching: {},
    error: {},
    URL: '',
    inputMap: new Map(),
    activeMap: new Map()
  };
const appReducer=(state=initialState, action) => {
    switch (action.type) {
        //action for getting topics for user choice
        case 'GET_TOPICS':
            return {
                ...state, topics: action.topics
              };
        case 'GET_TEACHING':
            if (action.teaching==null){
                return initialState
            }
            return {
                ...state, teaching: action.teaching
              };
        case 'CLEAR_TEACHING':
                return {
                    ...state, teaching: action.teaching
                  };
        case 'UPDATE_URL':
            return {
                    ...state, URLpathname: action.URLpathname
                };
        case 'ADD_TO_INPUT_MAP':
                console.log(state.inputMap);
            return {
                ...state, inputMap: state.inputMap.set(action.keyID, action.value)
            };
        case 'ADD_TO_ACTIVE_MAP':
            console.log(state.activeMap);
            return {
                ...state, activeMap: state.activeMap.set(action.keyID, action.value)
            };
        case 'CHANGE_SELECTED':
            console.log(state.activeMap);
            return {
                ...state, activeMap: state.activeMap.set(action.keyID, true)
            };
        default:
            return state;
    }
};
export default appReducer;