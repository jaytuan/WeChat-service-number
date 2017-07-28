<template>
  <div class="hello">
  <div class="top_page">
    <div class="page_head">
        <div class="flex_one head_img" v-html="userHeadImg"></div>
        <div class="flex_two"><div v-on:click="showFreNotes"><span class="note_title">书友笔记</span><em class="icons down" v-bind:class="{ up:isShow }"></em></div></div>
        <div class="flex_one"></div>
    </div>
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
      isShow:false,
    }
  },
  computed: {
    userHeadImg: function () {
      var headImgurl = '//file.40017.cn/huochepiao/pc/stage/demo/1/head.png';
      return '<img src= '+ headImgurl +' />';
    }
  },
  methods:{
      showFreNotes:function(){
          this.isShow = !this.isShow;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icons{
    background:url('../assets/yedu.png?v=1') no-repeat;
}
.top_page{
    height:713px;
    width:100%;
    z-index:1;
    background:url('../assets/back.png') no-repeat;
    background-size: 100% 713px;
}
.page_head{
    height:124px;
    width:100%;
    display:flex;
    line-height:124px;
}
.page_head .note_title{
    font-family:"PingFangHK-Medium";
    font-size:30px;
    color:#fff;
    letter-spacing:2.87px;
}
.page_head .head_img{
    padding-left:35px;
    padding-top:30px;
}

.flex_one{
   flex:1;
}
.flex_two{
   flex:3;
}
</style>
