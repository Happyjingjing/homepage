import axios from 'axios'

axios.defaults.baseURL = "https://www.easy-mock.com/mock/5d4b77e1df3ead4c90c93ce6/homePage/";
axios.interceptors.request.use(function (config) {
  config.params = {
    // appkey: 'wangjing_1563862174580'
  }
  return config;
}, function (error) {
  return Promise.reject(error);
})

export default axios;