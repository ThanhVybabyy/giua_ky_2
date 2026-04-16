import axios from 'axios';
 
const axiosInstance = axios.create({
  baseURL: 'https://69c48f0e8a5b6e2dec2ad345.mockapi.io/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
 
export default axiosInstance;
