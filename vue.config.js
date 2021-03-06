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
        target:'http://xuesenli.top:8081',
        changeOrigin:true,
        pathRewrite:{   //转发地址
          '/api':''
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  //打包的时候，是否下载源码
  productionSourceMap:false,
  //删除预加载
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}