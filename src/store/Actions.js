
const _getTeaching = (creationTeaching) => ({ type: 'GET_TEACHING', creationTeaching });

const _clearCreationTeaching = () => ({ type: 'CLEAR_CREATION_TEACHING' });

const _clearMethodTeaching = () => ({ type: 'CLEAR_METHOD_TEACHING' });

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

const _setFound = () => ({ type: 'SET_FOUND'});


export const getTeaching = (teachingName) => {
	return (dispatch) => {
		return import(`../model/mathteachers/${teachingName}Teacher`).then(teaching => {
																		   console.log(teaching.default)
																		   dispatch(_getTeaching(teaching.default));
																		   }).catch(function(error) { console.log(error); dispatch(_getTeaching(undefined)) }); };
};

export const setFound = () => {return (dispatch) => { return dispatch(_setFound()); }; };


export const clearCreationTeaching = () => {return (dispatch) => { return dispatch(_clearCreationTeaching({})); }; };

export const clearMethodTeaching = () => {return (dispatch) => { return dispatch(_clearMethodTeaching({})); }; };

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
																	   const creationTeaching=teaching.default;
																	   creationTeaching[firstArg](args);
																	   dispatch(_createTeachingObject(creationTeaching));
																	   dispatch(_updateSimplestForm(creationTeaching.simplestForm));
																	   }).catch(function(error) { console.log(error);
																				dispatch(_createTeachingObject(null)) }); }; }
/*
export const createTeachingObjectForMap = (teachingName, args, method) =>
{ return (dispatch) => {
	return import(`../model/mathteachers/${teachingName}Teacher`).then(teaching => {
																	   const firstArg=args.shift();
																	   console.log("firstArg"+JSON.stringify(firstArg))
																	   const creationTeaching=teaching.default;
																	   creationTeaching[firstArg](args);
																	   dispatch(_createTeachingObjectForMap(creationTeaching, method));
																	   }).catch(function(error) { console.log(error);
																				dispatch(_createTeachingObject(null)) }); }; }
*/
export const createMethodTeacher = (teachingName, creationStrings, methodStrings) => 
{ return (dispatch) => {
	return import(`../model/mathteachers/${teachingName}Teacher`).then(teaching => {
																	   const firstArgC=creationStrings.shift();
																	   const creationTeaching=teaching.default;
																	   const firstArgM=methodStrings.shift()
																	   creationTeaching[firstArgC](creationStrings);
																	   creationTeaching[firstArgM](methodStrings);
																	   dispatch(_createMethodTeacher(creationTeaching));
																	   }).catch(function(error) { console.log(error);
																				dispatch(_createTeachingObject(null)) }); }; }

const _createMethodTeacher = (methodTeacher) => ({ type: 'CREATE_METHOD_TEACHER', methodTeacher});

export const updateMethodStrings = (instanceStrings) => {
	return (dispatch) => {return dispatch(_updateMethodStrings(instanceStrings))}
}

const _updateMethodStrings = (instanceStrings) => ({ type: 'UPDATE_INSTANCE_STRINGS', instanceStrings });

export const setParamaterLabels = (labelArray) => 
{ return (dispatch) => { return dispatch(_setParamaterLabels(labelArray)); }; }

const _updateSimplestForm = (simplestForm) => ({ type: 'UPDATE_SIMPLEST_FORM', simplestForm });

export const updateActiveMethod = (activeMethod) => 
{ return (dispatch) => { return dispatch(_updateActiveMethod(activeMethod)); }; }

const _updateActiveMethod = (activeMethod) => ({ type: 'UPDATE_ACTIVE_METHOD', activeMethod });

export const updateURL = () => {
	return {
	   type: "UPDATE_URL",
	   payload: window.location.pathname
	 }
 }