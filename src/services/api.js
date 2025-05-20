import axios from 'axios';
import {BASE_URL} from '@env';

export const apiClient = axios.create({
    baseURL : "https://backend-engineering.onrender.com/api/v1",
    timeout: 10000
})