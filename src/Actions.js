import curriculum from  './Model/Curriculum';
const _getTopics = (topics) => ({
    type: 'GET_TOPICS',
    topics
});
const _getTeaching = (teaching) => ({
    type: 'GET_TEACHING',
    teaching
});
const _createTeaching = (teaching) => ({
    type: 'CREATE_TEACHING',
    teaching
});
const _clearTeaching = (teaching) => ({
    type: 'CLEAR_TEACHING',
    teaching
});
const _updateURL = (URLpathname) => ({
    type: 'UPDATE_URL',
    URLpathname
});
const _addToInputMap = (keyID, value) => ({
    type: 'ADD_TO_INPUT_MAP',
    key: keyID,
    v: value
});
const _updateActiveKeyAndValue = (activeKey) => ({
    type: 'UPDATE_ACTIVE_KEY_AND_VALUE',
    activeKey
});
const _updateActiveValue = (key) => ({
    type: 'UPDATE_ACTIVE_VALUE',
    key
});
const _addInputPair = (key, value) => ({
    type: 'ADD_INPUT_PAIR',
    key,
    value
});
const _updateActiveKey = (key) => ({
    type: 'UPDATE_ACTIVE_KEY',
    key
});
const _updateCallingStrings= (callingStrings) => ({
    type: 'UPDATE_CALLING_STRINGS',
    callingStrings
});
//gets all topics for now for teaching
export const getTopics = () => {
    return  (dispatch)=>{
        dispatch(_getTopics(curriculum));
    };
};
export const getTeaching = (teachingName) => {
   return (dispatch) => {
    return import(`./Model/math/${teachingName}`).then(teachingObj => {
        dispatch(_getTeaching(teachingObj.default.teaching));
    }).catch(function(error) {
        console.log(error);
        });
    };
};
export const createTeaching = (methodInfo) => {
    return (dispatch) => {
        return dispatch(_createTeaching(methodInfo));
    };
 };
export const clearTeaching = () => {
    return (dispatch) => {
        return dispatch(_clearTeaching({}));
    };
};
export const updateURL = () => {
    return (dispatch) => {
        return dispatch(_updateURL(window.location.pathname));
    };
};
export const addToInputMap = (keyID, value) => {
    return (dispatch) => {
        return dispatch(_addToInputMap(keyID, value));
    };
};
/*
export const addToActiveMap = (keyID, value) => {
    return (dispatch) => {
        return dispatch(_addToActiveMap(keyID, value));
    };
};
*/
export const updateActiveKeyAndValue = (keyID, value) => {
    return (dispatch) => {
        return dispatch(_updateActiveKeyAndValue(keyID, value));
    };
};
export const updateActiveValue = (key) => {
    return (dispatch) => {
        return dispatch(_updateActiveValue(key));
    };
};
export const addInputPair = (key, value) => {
    return (dispatch) => {
        return dispatch(_addInputPair(key, value));
    };
};
export const updateActiveKey = (key) => {
    return (dispatch) => {
        return dispatch(_updateActiveKey(key));
    };
};
export const updateCallingStrings = (callingStrings) => {
    return (dispatch) => {
        return dispatch(_updateCallingStrings(callingStrings));
    };
}