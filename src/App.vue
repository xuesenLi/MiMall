<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import jsonp from 'jsonp'
//import storage from './storage/index'
export default {
  name: 'app',
  components: {

  },
  data(){
    return{
      res:{}
    }
  },
  mounted(){

    //通过加载静态json文件
      this.axios.get('/mock/user/login.json').then((res) =>{
        this.res = res;
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
