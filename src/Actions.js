import curriculum from  './Model/Curriculum';

const _getTopics = (topics) => ({
    type: 'GET_TOPICS',
    topics
});

const _getTeaching = (teaching) => ({
    type: 'GET_TEACHING',
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

//gets all topics for now for teaching
export const getTopics = () => {
    return  (dispatch)=>{
        dispatch(_getTopics(curriculum));
    };
    /*
    return (dispatch) => {
        return home_connect.get('curriculum').then(response => {
            console.log(response.data);
            dispatch(_getTopics(response.data));
        }).catch(function(error) {
            console.log(error.response.data);
         });
    };
    */
};

export const getTeaching = (teachingName) => {
    /*
    return  (dispatch)=>{
        console.log('abcd')
        console.log(teachingName)
        dispatch(_getTeaching(math_teacher_instance.giveTeaching(teachingName)));
    };
    */
   return (dispatch) => {
    return import(`./Model/math/${teachingName}`).then(teachingObj => {
        console.log(teachingObj);
        dispatch(_getTeaching(teachingObj.default.teaching));
    }).catch(function(error) {
        console.log(error);
     });
};
    /*
    return (dispatch) => {
        return home_connect.get(`create/${teachingName}`).then(response => {
            console.log(response.data);
            dispatch(_getTeaching(response.data));
        }).catch(function(error) {
            console.log(error.response.data);
         });
    };
    */
};

export const clearTeaching = () => {
    return (dispatch) => {
        return dispatch(_clearTeaching({}));
    };
};

export const updateURL = () => {
    return (dispatch) => {
        console.log();
        return dispatch(_updateURL(window.location.pathname));
    };
};