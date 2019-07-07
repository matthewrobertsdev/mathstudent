import axios from 'axios';
 
const axiosConnect=axios.create({
    baseURL: 'http://localhost:5460'
});

export default axiosConnect;