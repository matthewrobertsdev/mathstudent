import curriculum from  '../model/Curriculum';

const _getTopics = (topics) => ({ type: 'GET_TOPICS', topics });

const _getTeaching = (teachingObject) => ({ type: 'GET_TEACHING', teachingObject });

const _createTeaching = (teaching) => ({ type: 'CREATE_TEACHING', teaching });

const _clearTeaching = (teaching) => ({ type: 'CLEAR_TEACHING', teaching });

const _updateURL = (URLpathname) => ({ type: 'UPDATE_URL', URLpathname });

const _addToInputMap = (keyID, value) => ({ type: 'ADD_TO_INPUT_MAP', key: keyID, v: value });

const _updateKeyAndValue = (key, value) => ({ type: 'UPDATE_KEY_AND_VALUE', key, value });

const _updateActiveValue = (key) => ({ type: 'UPDATE_ACTIVE_VALUE', key });

const _addInputPair = (key, value) => ({ type: 'ADD_INPUT_PAIR', key, value });

const _updateActiveKey = (key) => ({ type: 'UPDATE_ACTIVE_KEY', key });

const _updateCallingStrings= (callingStrings) => ({ type: 'UPDATE_CALLING_STRINGS', callingStrings });

const _updateCreationStrings= (creationStrings) => ({ type: 'UPDATE_CREATION_STRINGS', creationStrings });

const _setTeachingObject=(objectName)=>({ type: 'SET_TEACHING_OBJECT', objectName });

const _setTeachingObjectName=(objectName)=>({ type: 'SET_TEACHING_OBJECT_NAME', objectName });

const _setDisplayTeaching=(isDisplayed)=>({ type: 'SET_DISPLAY_TEACHING', isDisplayed });

const _updateTextStrings=(textStrings)=>({ type: 'UPDATE_TEXT_STRINGS', textStrings });

const _updateDisplayKeyboard = (displayKeyboard) => ({ type: 'UPDATE_DISPLAY_KEYBOARD', displayKeyboard});

const _setIsMobile = (isMobile) => ({ type: 'SET_IS_MOBILE', isMobile});

const _createTeachingObject = (teachingObject) => ({ type: 'CREATE_TEACHING_OBJECT', teachingObject});

const _setParamaterLabels = (paramaterLabels) => ({ type: 'SET_PARAMETER_LABELS', paramaterLabels});


/* gets all topics for now for teaching */
export const getTopics = () => { return  (dispatch)=>{ dispatch(_getTopics(curriculum)); }; };

export const getTeaching = (teachingName) => {
   return (dispatch) => {
    return import(`../model/math/${teachingName}`).then(teachingObj => {
        dispatch(_getTeaching(teachingObj.default.teaching));
    }).catch(function(error) { console.log(error); }); };
};
export const createTeaching = (methodInfo) => { return (dispatch) => { return dispatch(_createTeaching(methodInfo)); }; };

export const clearTeaching = () => {return (dispatch) => { return dispatch(_clearTeaching({})); }; };

export const updateURL = () => { return (dispatch) => { return dispatch(_updateURL(window.location.pathname)); }; };

export const addToInputMap = (keyID, value) => { return (dispatch) => { return dispatch(_addToInputMap(keyID, value)); }; };

export const updateKeyAndValue = (key, value) => { return (dispatch) => {
    return dispatch(_updateKeyAndValue(key, value)); }; };

export const updateActiveValue = (key) => { return (dispatch) => { return dispatch(_updateActiveValue(key)); }; };

export const addInputPair = (key, value) => { return (dispatch) => { return dispatch(_addInputPair(key, value)); }; };

export const updateActiveKey = (key) => { return (dispatch) => { return dispatch(_updateActiveKey(key)); }; };

export const updateCallingStrings = (callingStrings) => { return (dispatch) => {
    return dispatch(_updateCallingStrings(callingStrings)); }; }

export const updateCreationStrings = (creationStrings) => { return (dispatch) => { 
    return dispatch(_updateCreationStrings(creationStrings)); }; }

export const setTeachingObject = (objectName) => { 
    return (dispatch) => { return dispatch(_setTeachingObject(objectName)); }; }

export const setTeachingObjectName = (objectName) => 
{ return (dispatch) => { return dispatch(_setTeachingObjectName(objectName)); }; }

export const setDisplayTeaching = (boolean) => 
{ return (dispatch) => { return dispatch(_setDisplayTeaching(boolean)); }; }

export const updateTextStrings = (textStrings) => 
{ return (dispatch) => { return dispatch(_updateTextStrings(textStrings)); }; }

export const updateDisplayKeyboard = (isDisplayed) => 
{ return (dispatch) => { return dispatch(_updateDisplayKeyboard(isDisplayed)); }; }

export const setIsMobile = (isMobile) => 
{ return (dispatch) => { return dispatch(_setIsMobile(isMobile)); }; }

export const createTeachingObject = (teachingName, args) => 
{ return (dispatch) => {
    return import(`../model/math/${teachingName}`).then(teachingObject => {
        const firstArg=args.shift();
        teachingObject.default.teaching[firstArg](args);
        dispatch(_createTeachingObject(teachingObject));
         }).catch(function(error) { console.log(error);
            dispatch(_createTeachingObject(null)) }); }; }

export const setParamaterLabels = (labelArray) => 
{ return (dispatch) => { return dispatch(_setParamaterLabels(labelArray)); }; }
