import axios from 'axios';

// this way we can have the best of both worlds where we have our own instance but also the default axios object
// this gives us the ability to control in detail in which part of the app we want to use particular settings
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;