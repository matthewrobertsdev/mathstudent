
const appReducer=(state, action) => {
    switch (action.type) {
        case 'GET_TOPICS':
            console.log('should get topics')
            return action.topics.result;
        default:
            return state;
    }
};

export default appReducer;