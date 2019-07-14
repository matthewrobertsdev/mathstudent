import home_connect from './HomeConnect';

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

//gets all topics for now for teaching
export const getTopics = () => {
    return (dispatch) => {
        return home_connect.get('curriculum').then(response => {
            console.log(response.data);
            dispatch(_getTopics(response.data));
        }).catch(function(error) {
            //console.log(error.response.data);
         });
    };
};

export const getTeaching = (teachingName) => {
    return (dispatch) => {
        return home_connect.get(`teachings/${teachingName}`).then(response => {
            console.log(response.data);
            dispatch(_getTeaching(response.data));
        }).catch(function(error) {
            console.log(error.response.data);
         });
    };
};

export const clearTeaching = () => {
    return (dispatch) => {
        return dispatch(_clearTeaching({}));
    };
};