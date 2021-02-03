import axios from 'axios';
import * as Config from './baseURL';
const instance = axios.create({
  baseURL:Config.BaseURL+"/api",
});

export default instance;