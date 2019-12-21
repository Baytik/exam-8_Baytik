import axios from 'axios';

const axiosAPI = axios.create({
   baseURL: 'https://quotes-exam-8.firebaseio.com/'
});

export default axiosAPI;