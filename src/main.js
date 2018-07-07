import Vue from 'vue';
import App from './App.vue';
// 导入路由对象
import router from './routes/router';

// 导入css
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
import MyAxios from './plugins/myaxios';

// 注册MyAxios插件
Vue.use(MyAxios);

// // 导入axios模块
// import axios from 'axios';
// // 将路由中的各个部分提取出来
// axios.defaults.baseURL = 'http://localhost:3000/';
// // 配置axios设置，将axios改为$http
// axios.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  MyAxios
})
