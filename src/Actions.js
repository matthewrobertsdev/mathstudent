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
const _addToMap = (key, value) => ({
    type: 'ADD_TO_MAP',
    key,
    value
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
export const clearSelectedFields = () => {
    return (dispatch) => {
        return dispatch(_updateURL(window.location.pathname));
    };
};
export const addToMap = (key, value) => {
    return (dispatch) => {
        return dispatch(_addToMap(key, value));
    };
};