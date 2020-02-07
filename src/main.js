import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'Vue-axios'
import App from './App.vue'
//import env from './env'

//根据前端的跨域方式做调整
// axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;  //8s
//根据环境变量获取不同的的请求地址
//axios.defaults.baseURL = env.baseURL;

//接口错误拦截 做错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if(res.status == 0){
    //0 表示成功
    return res.data;
  }else if(res.status == 10){
    //10 表示未登录  要看后台返回的状态码
    window.location.href = '/#/login' //有#号的路由 ： 哈希路由
  }else{
    //表示报错信息
    alert(res.msg);
  }
});


Vue.use(VueAxios,axios);
//生产环境
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
