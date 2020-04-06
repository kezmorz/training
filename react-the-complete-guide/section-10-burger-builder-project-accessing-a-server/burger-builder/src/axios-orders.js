import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5f3db.firebaseio.com/'
});

export default instance;