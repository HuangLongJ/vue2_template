import axios from "axios";
axios.defaults.timeout = 30000;

axios.defaults.baseURL = "https://jgit.jingsocial.com:8000";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    config.headers['PRIVATE-TOKEN'] = "_MTYz4GLEUmEMS7Ratz2"; // token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(error.response.data.message);
  }
);

export default axios;
