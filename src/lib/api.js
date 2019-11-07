import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://sails-task.herokuapp.com'
});

export default instance;