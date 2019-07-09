import axios from 'axios';
 
//gives axios connection to the home of the teachings
const home_connect=axios.create({
    baseURL: 'http://localhost:5460'
});

export default home_connect;