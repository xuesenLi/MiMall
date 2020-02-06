module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'https://www.imooc.com',
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