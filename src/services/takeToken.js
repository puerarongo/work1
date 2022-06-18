import BASE_URL from './baseURL';
import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

const takeToken = async () => {
  const request = await axios.get('/token');
  return request.data.token;
};

export default takeToken;
