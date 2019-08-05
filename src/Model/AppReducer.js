const initialState = {
    loaded: false,
    //all topics for now
    topics: [],
    //the teaching being taught
    teaching: {},
    error: {},
    URL: '',
    inputMap: [],
    activeMap: {}
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
                console.log('please look'+action.keyID);
                return Object.assign({}, state.inputMap.concat({[action.key]: action.value}));
                    case 'ADD_TO_ACTIVE_MAP':
                        return {...state, [action.keyID]: action.value};
                    case 'CHANGE_SELECTED':
                        console.log(state.activeMap);
                        return {...state, [action.keyID]: true};
        default:
            return state;
    }
};
export default appReducer;

/*

case 'ADD_TO_INPUT_MAP':
            return Object.assign({}, state, {inputMap: [...state.inputMap, {[action.keyID]: action.value}]});
        case 'ADD_TO_ACTIVE_MAP':
            console.log(state.activeMap);
            return Object.assign({}, state, {activeMap: [...state.activeMap, {[action.keyID]: action.value}]});
        case 'CHANGE_SELECTED':
            console.log(state.activeMap);
            return Object.assign({}, state, {activeMap: [...state.activeMap, {[action.keyID]: true}]});




case 'ADD_TO_INPUT_MAP':
            return {...state, inputMap: {...state.inputMap, [action.keyID]: action.value}};
        case 'ADD_TO_ACTIVE_MAP':
            console.log(state.activeMap);
            return {...state, activeMap: {...state.activeMap, [action.keyID]: action.value}};
        case 'CHANGE_SELECTED':
            console.log(state.activeMap);
            return {...state, activeMap: {...state.activeMap, [action.keyID]: true}};
        default:
            return state;

*/