const initialState = {
    loaded: false,
    /* all topics for now */
    topics: [],
    /* the teaching being taught */
    teaching: {},
    error: {},
    URL: '',
    inputMap: {},
    activeMap: {},
    activeKey: '',
    inputArray: [],
  };
const appReducer=(state=initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_VALUE':
            let newValue=''
            if (action.key==='{space}'){
                newValue=state.inputMap[state.activeKey]+=' '
            } else if (action.key==='{bksp}'){
                if (state.inputMap[state.activeKey].length>=1){   	
                    newValue=state.inputMap[state.activeKey].slice(0, -1);
                }
            } else {
                newValue=state.inputMap[state.activeKey]+=action.key
            }
            return {
                    ...state, inputMap: {...state.inputMap, [state.activeKey]: newValue}
                };
        /* action for getting topics for user choice */
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
            return { ...state, URLpathname: action.URLpathname };
        case 'ADD_INPUT_PAIR':
            return { ...state, inputMap: {...state.inputMap, [action.key]: action.value} };
        case 'UPDATE_ACTIVE_KEY':
                return { ...state, activeKey: action.key };
        case 'UPDATE_ACTIVE_KEY_AND_VALUE':
            return { ...state, activeKey: action.activeKey, activeValue: action.value };
        case 'UPDATE_CALLING_STRINGS':
            return { ...state, callingStrings: action.callingStrings };
        default:
            return state;
    }
};
export default appReducer;