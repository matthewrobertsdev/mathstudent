import isMobile from '../../utilities/IsMobile'

const initialState = { topics: [], inputMap: {}, activeMap: {}, activeKey: '', 
    inputArray: [], textStrings: [], callingStrings: [], creationStrings: [], teachingObject: {}, teachingObjectName: '', 
    displayTeaching: false, displayKeyboard: false, paramaterLabels: [], pageNotFound: false, techingMap: {}};
    
const appReducer=(state=initialState, action) => {
        switch (action.type) {
        case 'UPDATE_ACTIVE_VALUE': let newValue=''
            if (action.key==='{enter}'){return {...state, displayKeyboard: false}}
            else if (action.key==='{space}'){ newValue=state.inputMap[state.activeKey]+=' '
            } else if (action.key==='{bksp}'){
                if (state.inputMap[state.activeKey].length>=1){ newValue=state.inputMap[state.activeKey].slice(0, -1); }
            } else { newValue=state.inputMap[state.activeKey]+=action.key }
             return { ...state, inputMap: {...state.inputMap, [state.activeKey]: newValue} };
        case 'SET_DISPLAY_TEACHING': return { ...state, displayTeaching: action.isDisplayed };

        case 'CREATE_TEACHING_OBJECT':
            const newTeaching={};
            Object.assign(newTeaching, action.teaching)
            return {...state, teacher: newTeaching}; 

        case 'GET_TOPICS': return { ...state, topics: action.topics };

        case 'GET_TEACHING': {if (action.teachingObject===undefined) {console.log('teaching was null'); 
            return {...state, pageNotFound: true};}
            return { ...state, teacher: action.teachingObject, pageNotFound: false };}
        
        case 'CLEAR_TEACHING': return { ...state, teacher: action.teaching, pageNotFound: false};

        case 'CLEAR_TEACHING_OBJECT': return { ...state, teachingObject: {}, pageNotFound: false};

        case 'UPDATE_URL': return { ...state, URLpathname: action.URLpathname };

        case 'UPDATE_KEY_AND_VALUE': return { ...state, inputMap: {...state.inputMap, [action.key]: action.value} };

        case 'UPDATE_ACTIVE_KEY': return { ...state, activeKey: action.key };

        case 'UPDATE_CALLING_STRINGS': return { ...state, callingStrings: action.callingStrings };

        case 'UPDATE_DISPLAY_KEYBOARD': return { ...state, displayKeyboard: action.displayKeyboard };

        case 'UPDATE_CREATION_STRINGS': return { ...state, creationStrings: action.creationStrings.slice() };

        case 'SET_TEACHING_OBJECT': import(`../math${action.objectName}`).then(teachingObj => {
                return {...state, teachingObject: teachingObj}; }).catch(function(error) { console.log(error);
                    return state;}); return state;

        case 'SET_TEACHING_MAP_OBJECT': import(`../math${action.objectName}`).then(teachingObj => {
                return {...state, teachingMap: {...state.teachingMap, [action.method]: teachingObj}}; }).catch(function(error) { console.log(error);
                    return state;}); return state;

        case 'SET_TEACHING_OBJECT_NAME':  return {...state, teachingObjectName: action.objectName};

        case 'SET_IS_MOBILE':  return {...state, isMobile: isMobile()};

        case 'SET_PARAMETER_LABELS': return {...state, paramaterLabels: action.paramaterLabels};

        case 'UPDATE_SIMPLEST_FORM': return {...state, simplestForm: action.simplestForm};

        default: return state;
        }
};
export default appReducer;