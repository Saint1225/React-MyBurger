import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-73703.firebaseio.com/'
});

export default instance;