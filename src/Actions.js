import home_connect from './HomeConnect';

const _getTopics = (topics) => ({
    type: 'GET_TOPICS',
    topics
});
 
export const getTopics = () => {
    return (dispatch) => {
        return home_connect.get('curriculum').then(response => {

            
            console.log('axios connect result');
            console.log(response.data)
            for(var k in response){
                console.log(k)
                for(var k2 in k)
                    console.log(k2);{
                        for(var k3 in k2){
                            console.log(k3);
                    }
                }
            }
            
            //topics=result
 
            dispatch(_getTopics(response.data));
        }).catch(function(error) {
            //console.log(error.response.data);
         });
    };
};