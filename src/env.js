/**
 * 将环境变量抽取出来。 使用 jsonp跨域、cors跨域方式才用。
 */
let baseURL;
switch (process.env.NODE_ENV) {  //获取当前nodejs进程里面的一些环境变量， 最终会写到package.json文件里面去
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api';
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;
  case 'prev':
    baseURL = 'http://prev-mall-pre.springboot.cn/api';
    break;
  case 'prod':
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
  default:
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
}

export default {
  baseURL
}