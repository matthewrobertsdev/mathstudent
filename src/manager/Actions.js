import curriculum from  '../model/Curriculum';

const _getTopics = (topics) => ({ type: 'GET_TOPICS', topics });

const _getTeaching = (teachingObject) => ({ type: 'GET_TEACHING', teachingObject });

const _clearTeaching = () => ({ type: 'CLEAR_TEACHING_OBJECT' });

const _updateURL = (URLpathname) => ({ type: 'UPDATE_URL', URLpathname });

const _addToInputMap = (keyID, value) => ({ type: 'ADD_TO_INPUT_MAP', keyID, value });

const _updateKeyAndValue = (key, value) => ({ type: 'UPDATE_KEY_AND_VALUE', key, value });

const _updateActiveValue = (key) => ({ type: 'UPDATE_ACTIVE_VALUE', key });

const _updateActiveKey = (key) => ({ type: 'UPDATE_ACTIVE_KEY', key });

const _updateCreationStrings= (creationStrings) => ({ type: 'UPDATE_CREATION_STRINGS', creationStrings });

const _setTeachingObject=(objectName)=>({ type: 'SET_TEACHING_OBJECT', objectName });

const _setTeachingObjectName=(objectName)=>({ type: 'SET_TEACHING_OBJECT_NAME', objectName });

const _setDisplayTeaching=(isDisplayed)=>({ type: 'SET_DISPLAY_TEACHING', isDisplayed });

const _updateDisplayKeyboard = (displayKeyboard) => ({ type: 'UPDATE_DISPLAY_KEYBOARD', displayKeyboard});

const _createTeachingObject = (teaching) => ({ type: 'CREATE_TEACHING_OBJECT', teaching});

const _setParamaterLabels = (paramaterLabels) => ({ type: 'SET_PARAMETER_LABELS', paramaterLabels});

const _createTeachingObjectForMap = (teachingName, args, method) => ({ type: 'CREATE_TEACHING_OBJECT_FOR_MAP', teachingName, args, method});

export const getTopics = () => { return  (dispatch)=>{ dispatch(_getTopics(curriculum)); }; };

export const getTeaching = (teachingName) => {
	return (dispatch) => {
		return import(`../model/mathteachers/${teachingName}Teacher`).then(teaching => {
																		   console.log(teaching.default)
																		   dispatch(_getTeaching(teaching.default));
																		   }).catch(function(error) { console.log(error); dispatch(_getTeaching(undefined)) }); };
};

export const clearTeaching = () => {return (dispatch) => { return dispatch(_clearTeaching({})); }; };

export const updateURL = () => { return (dispatch) => { return dispatch(_updateURL(window.location.pathname)); }; };

export const addToInputMap = (keyID, value) => { return (dispatch) => { return dispatch(_addToInputMap(keyID, value)); }; };

export const updateKeyAndValue = (key, value) => { return (dispatch) => {
	return dispatch(_updateKeyAndValue(key, value)); }; };

export const updateActiveValue = (value) => { return (dispatch) => { return dispatch(_updateActiveValue(value)); }; };

export const updateActiveKey = (key) => { return (dispatch) => { return dispatch(_updateActiveKey(key)); }; };

export const updateCreationStrings = (creationStrings) => { return (dispatch) => { 
	return dispatch(_updateCreationStrings(creationStrings)); }; }

export const setTeachingObject = (objectName) => { 
	return (dispatch) => { return dispatch(_setTeachingObject(objectName)); }; }

export const setTeachingObjectName = (objectName) => 
{ return (dispatch) => { return dispatch(_setTeachingObjectName(objectName)); }; }

export const setDisplayTeaching = (boolean) => 
{ return (dispatch) => { return dispatch(_setDisplayTeaching(boolean)); }; }

export const updateDisplayKeyboard = (isDisplayed) => 
{ return (dispatch) => { return dispatch(_updateDisplayKeyboard(isDisplayed)); }; }

export const createTeachingObject = (teachingName, args) => 
{ return (dispatch) => {
	return import(`../model/mathteachers/${teachingName}Teacher`).then(teaching => {
																	   const firstArg=args.shift();
																	   const teachingObject=teaching.default;
																	   teachingObject[firstArg](args);
																	   dispatch(_createTeachingObject(teachingObject));
																	   dispatch(_updateSimplestForm(teachingObject.simplestForm));
																	   }).catch(function(error) { console.log(error);
																				dispatch(_createTeachingObject(null)) }); }; }

export const createTeachingObjectForMap = (teachingName, args, method) =>
{ return (dispatch) => {
	return import(`../model/mathteachers/${teachingName}Teacher`).then(teaching => {
																	   const firstArg=args.shift();
																	   console.log("firstArg"+JSON.stringify(firstArg))
																	   const teachingObject=teaching.default;
																	   teachingObject[firstArg](args);
																	   dispatch(_createTeachingObjectForMap(teachingObject, method));
																	   }).catch(function(error) { console.log(error);
																				dispatch(_createTeachingObject(null)) }); }; }

export const useTeachingObject = (args) => {
	return (dispatch) => {}
}


export const setParamaterLabels = (labelArray) => 
{ return (dispatch) => { return dispatch(_setParamaterLabels(labelArray)); }; }

const _updateSimplestForm = (simplestForm) => ({ type: 'UPDATE_SIMPLEST_FORM', simplestForm });
