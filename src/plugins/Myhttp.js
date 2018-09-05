import axios from 'axios';

const MyHttp = {};
// 公共的install方法

MyHttp.install = function(Vue) {
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
  Vue.prototype.$http = axios;
};

export default MyHttp;
