const initialState = { loaded: false, /* all topics for now */ topics: [], /* the teaching being taught */ teaching: {},
    error: {}, URL: '', inputMap: {}, activeMap: {}, activeKey: '', inputArray: [], callingStrings: [],
    creationStrings: [], teachingObject: {}, teachingObjectName: '', displayTeaching: false};
    
const appReducer=(state=initialState, action) => {
        switch (action.type) {
        case 'UPDATE_ACTIVE_VALUE': let newValue=''
            if (action.key==='{space}'){ newValue=state.inputMap[state.activeKey]+=' '
            } else if (action.key==='{bksp}'){
                if (state.inputMap[state.activeKey].length>=1){ newValue=state.inputMap[state.activeKey].slice(0, -1); }
            } else { newValue=state.inputMap[state.activeKey]+=action.key }
             return { ...state, inputMap: {...state.inputMap, [state.activeKey]: newValue} };
        /* action for getting topics for user choice */
        case 'SET_DISPLAY_TEACHING': return { ...state, displayTeaching: action.isDisplayed };

        case 'GET_TOPICS': return { ...state, topics: action.topics };

        case 'GET_TEACHING': return { ...state, teaching: action.teachingObject };
        
        case 'CLEAR_TEACHING': return { ...state, teaching: action.teaching };

        case 'UPDATE_URL': return { ...state, URLpathname: action.URLpathname };

        case 'ADD_INPUT_PAIR': return { ...state, inputMap: {...state.inputMap, [action.key]: action.value} };

        case 'UPDATE_ACTIVE_KEY': return { ...state, activeKey: action.key };

        case 'UPDATE_ACTIVE_KEY_AND_VALUE': return { ...state, activeKey: action.activeKey, activeValue: action.value };

        case 'UPDATE_CALLING_STRINGS': console.log('updated calling strings'); return { ...state, callingStrings: action.callingStrings };

        case 'UPDATE_CREATION_STRINGS': return { ...state, creationStrings: action.creationStrings };

        case 'SET_TEACHING_OBJECT': import(`../math${action.objectName}`).then(teachingObj => {
                console.log('abcd'+JSON.stringify(teachingObj));
                return {...state, teachingObject: teachingObj}; }).catch(function(error) { console.log(error);
                     return state;}); return state;
        case 'SET_TEACHING_OBJECT_NAME':  return {...state, teachingObjectName: action.teachingObjectName};
        default: return state;
        }
};
export default appReducer;