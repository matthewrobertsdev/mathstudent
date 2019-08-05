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
const _addToActiveMap = (keyID, value) => ({
    type: 'ADD_TO_ACTIVE_MAP',
    keyID,
    value
});
const _changeSelected = (keyID) => ({
    type: 'CHANGE_SELECTED',
    keyID
});
//gets all topics for now for teaching
export const getTopics = () => {
    return  (dispatch)=>{
        dispatch(_getTopics(curriculum));
    };
};
export const getTeaching = (teachingName) => {
    console.log('please look');
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
export const clearSelectedFields = () => {
    return (dispatch) => {
        return dispatch(_updateURL(window.location.pathname));
    };
};
export const addToInputMap = (keyID, value) => {
    console.log('please look');
    return (dispatch) => {
        return dispatch(_addToInputMap(keyID, value));
    };
};
export const addToActiveMap = (keyID, value) => {
    return (dispatch) => {
        console.log('please look');
        return dispatch(_addToActiveMap(keyID, value));
    };
};
export const changeSelected = (keyID) => {
    return (dispatch) => {
        return dispatch(_changeSelected(keyID));
    };
};