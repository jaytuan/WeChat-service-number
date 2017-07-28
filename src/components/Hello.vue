<template>
  <div class="hello">
    <div class="page_head">
        <div class="flex_one" v-html="userHeadImg"></div>
        <div class="flex_two"></div>
        <div class="flex_one"></div>
    </div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: {
    userHeadImg: function () {
      var headImgurl = 'E:/my project/A项目任务/GitHub/yedu/WeChat-service-number/src/assets/head.png';
      return '<img src= '+ headImgurl +'/>';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.page_head{
  height:124px;
  width:100%;
  display:flex;
}
.flex_one{
  flex:1;
  background:#ccc;
}
.flex_two{
  flex:2;
}
.user_head_img{
   background: url("E:/my project/A项目任务/GitHub/yedu/WeChat-service-number/src/assets/head.png") no-repeat;
}
</style>
