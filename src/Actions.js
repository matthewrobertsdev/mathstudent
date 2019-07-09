import home_connect from './HomeConnect';

const _getTopics = (topics) => ({
    type: 'GET_TOPICS',
    topics
});

//gets all topics for now for teaching
export const getTopics = () => {
    return (dispatch) => {
        return home_connect.get('curriculum').then(response => {
            console.log(response.data);
            dispatch(_getTopics(response.data));
        }).catch(function(error) {
            console.log(error.response.data);
         });
    };
};