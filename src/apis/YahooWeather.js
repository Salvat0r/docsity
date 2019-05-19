import axios from 'axios';
import { API_KEY_DARKSKY } from '../apis/AppID';

export default axios.create({
    baseURL: API_KEY_DARKSKY 
});

