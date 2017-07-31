<template>
  <div class="personalCenter">
    <div class="personalHeader">
      <router-link to="/" class="back"></router-link>
      <div class="imgHead"></div>
      <div class="userNicks">abcdsafsdngfakijrh</div>
    </div>
    <div class="readSome">
      <div class="duration">阅读时长<label>{{duration}}</label>小时</div>
      <div class="line"></div>
      <div class="days">已签到<label>{{days}}</label>天</div>
    </div>
     <div class="notesTitle">阅读笔记</div>
     <div class="notesList" v-for="item in list">
       <div class="contentHeader">
         <div class="contentTitle">
           {{item.notetitle}}
         </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'personalCenter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      duration:"128",
      days:"3",
      list:[{
        "id":"0",
        "notetitle":"Hello",
        "goodcounts":'9',
        "notecontent":"hello world",
        "time": "2017.10.11",
      },{
         "id":"1",
        "notetitle":"Hello",
        "goodcounts":'9',
        "notecontent":"hello world",
        "time": "2017.10.11",
      },{
         "id":"2",
        "notetitle":"Hello",
        "goodcounts":'9',
        "notecontent":"hello world",
        "time": "2017.10.11",
      },{
         "id":"3",
        "notetitle":"Hello",
        "goodcounts":'9',
        "notecontent":"hello world",
        "time": "2017.10.11",
      }]
    }
  }
}
</script>
<style scoped>
.personalCenter {
  position: relative;
  background-color: #F2F2F2;
}
.personalHeader {
	height: 245px;
	width: 100%;
	background:  linear-gradient(to right,#8CC2FD,#5190D5);
  position: relative;
  padding-top: 44px;
}
.back{
  height: 30px;
  width: 30px;
  position: absolute;
  top:44px;
  left:51px;
  border-left: 5px solid #fff;
  border-top: 5px solid #fff;
  transform:rotate(315deg);
}
.imgHead {
  background: url("../assets/head.png");
  height: 118px;
  width: 118px;
  margin-left: 316px;
  background-size: cover;
}
.userNicks {
  font-size: 34px;
  color: #fff;
  margin: 0 auto;
  margin-top: 16px;
}
.readSome {
  position: absolute;
  top:245px;
  left: 16px;
  right: 16px;
  height: 88px;
  width: 718px;
  border: 0 solid #cdcdcd;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 8px 8px #e2dfdf;
  overflow: hidden;
}
.readSome div {
  float: left;
  
  font-family: STHeitiSC-Medium;
  font-size: 32px;
  color: #5E626C;
  line-height: 88px;
}
.duration {
  width: 359px;
  height: 88px;
}
.line {
  height: 69.4px;
  width: 1px;
  border:0;
  background-color: #B8B8B8;
  margin-top: 9px;
  margin-bottom: 9.6px;
}
.days {
  width: 358px;
  height: 88px;
}
.readSome div label {
  color: #8CC2FD;
}
.notesTitle {
  font-family: STHeitiSC-Medium;
  font-size: 30px;
  color: #333;
  letter-spacing: 0.55px;
  padding-left: 30px;
  text-align: left;
  margin-top: 74px;
  padding-bottom: 16px;
}
.notesList {
  margin-bottom: 20px;
  background-color: #fff;
}
</style>
