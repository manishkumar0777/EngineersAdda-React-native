import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:4000/api/v1'
export const apiClient = axios.create({
    baseURL : BASE_URL,
    timeout: 10000
})