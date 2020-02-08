/**
 * 使用代理跨域的方式
 * @type {{devServer: {proxy: {"/api": {changeOrigin: boolean, pathRewrite: {"/api": string}, target: string}}, port: number, host: string}}}
 */
module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{   //转发地址
          '/api':''
        }
      }
    }
  }
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
/*  productionSourceMap:true,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }*/
}