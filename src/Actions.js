import axiosConnect from './AxiosConnect';

const _getTopics = (topics) => ({
    type: 'GET_TOPICS',
    topics
});
 
export const getTopics = () => {
    return (dispatch) => {
        return axiosConnect.get('curriculum').then(response => {

            
            console.log('axios connect result')
            const topics=response.data;
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
 
            dispatch(_getTopics(topics));
        }).catch(function(error) {
            //console.log(error.response.data);
         });
    };
};