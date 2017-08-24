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
     
     <div v-show="list.length > 0 " class="gray_back" ref="abc">
          <ul class="friend_note_ul">
              <li class="friend_note" v-for="item in list">
                  <div class="note_head">
                    
                      <span class="note_title"><span class="note_title_cont">{{item.noteTitle}}</span></span>
                      <span class="praise"></span>
                      <span class="praiseNum">{{item.praiseNumber}}</span>
                  </div>
                  <p class="note_content">{{item.noteContent}}</p>
                  <div class="note_foot">
                      <span class="note_date">{{ new Date(item.createDate).getFullYear()+'.'+(new Date(item.createDate).getMonth()+1)+'.'+new Date(item.createDate).getDate() }}</span>
                      
                  </div>
              </li>
              <li class="loading" v-show="isLoading"></li>
          </ul>
      </div>
      <div class="nolist" v-show="list.length == 0 || nomore == true">没有更多内容了</div>
  </div>
</template>

<script>
export default {
  name: 'personalCenter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      duration:"",
      days:"",
      list:[],
      pageIndex:1,
      isLoading:false,
      nomore:false,
    }
  },
  created:function() {
    console.log(this);
    var that = this;
    this.http = function(data,url,fn) {
      var request = new XMLHttpRequest();
      request.open('POST', url, true);

      request.onload = function() {
       // console.log(JSON.parse(this.responseText));
          if (this.status >= 200 && this.status < 400) {
            var res = JSON.parse(this.responseText);
            fn(res);
          }
      };
      request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      request.send("inParam="+JSON.stringify(data));
    }
    var data = {
        "busiInfo": {
            "userId": "123"
        },
        "pubInfo": {
            "channelId": "wx",
            "opId": "wxuipowur3875dks"
        }
    };
    var data3 = {
      "busiInfo":{
            "qryType":1,
            "userId":"wxuipowur3875dks",
            "pageSize":20,
            "pageNum":this.pageIndex,
        },
        "pubInfo":{
            "channelId":"wx",
            "opId":"wxuipowur3875dks"
        }
    }
    var url1 = "http://read.baizitech.cn/read/getTotalTimes.bz";
    var url2 = "http://read.baizitech.cn/read/getSignNum.bz";
    var url3 = "http://read.baizitech.cn/read/getReadNotes.bz"; // 查看阅读笔记

    this.http(data,url1,function(res){
      that.duration = res.data.totalTimes;
    });
    this.http(data,url2,function(res){
      that.days = res.data.signNum;
    });
    this.http(data3,url3,function(res) {
      console.log(res);
      if(res.data.length != 0) {
        that.list = res.data;
      }
      else {
        that.nomore = true;
      }
    })
    /// 'http://59.110.143.18:8080/read/getTotalTimes.bz'
   
  },
  methods:{
     listenScroll:function(){
          if(window.innerHeight + document.body.scrollTop + 10 > document.body.scrollHeight && !this.nomore){
              this.isLoading = true; 
             this.pageIndex++;
          }
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
.gray_back{
    
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    z-index:11;
}
.gray_back .friend_note_ul{
    background:#F2F2F2;
    position:relative;
    top:8%;
    left:0;
    width:100%;
    padding:58px 0;
}
.gray_back .friend_note_ul .friend_note{
    width:658px;
    margin:0 auto 58px;
    background:#fff;
    border-radius:10px;
    box-shadow:0px 0px #b8b8b8;
    padding:0 30px;
    color:#333;
    font-size:30px;
    position:relative;
}
.friend_note .note_head{
    height:93px;
    border-bottom:solid 1px #d6d6d6;
    text-align:left;
}
.friend_note .note_head_img{
    position:relative;
    top:-30px;
}
.friend_note .note_head_name{
    font-size:26px;
}
.friend_note .note_content{
    text-align:left;
    padding-top:12px;
    padding-bottom:14px;
}
.friend_note .friend_name{
    position:relative;
    left:-65px;
    top:15px;
}
.friend_note .note_title{
    position:absolute;
    left:30px;
    top:43px;
    font-weight:bold;
}
.friend_note .praise{
    display:inline-block;
    width:28px;
    height:26px;
    background:url('../assets/redheart.png?v=1') no-repeat;
    background-size:28px;
    position:absolute;
    right:70px;
    top:43px;
    font-weight:bold;
}
.friend_note .note_title .note_title_cont{
    max-width:500px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    display:inline-block;
    vertical-align:-8px;
}
.friend_note .note_foot{
    text-align:right;
    font-size:28px;
    color:#999;
    margin-bottom:4px;
}
.friend_note .note_foot .note_date{
  
}
.friend_note .note_foot .praise{
    display:inline-block;
    width:28px;
    height:26px;
    background:url('../assets/greyheart.png?v=1') no-repeat;
    background-size:28px;
    position:absolute;
    right:30px;
    bottom:4px;
}
.friend_note .note_foot .click_praise{
    background:url('../assets/redheart.png?v=1') no-repeat;
    background-size:28px;
}
.nolist {
  font-size: 28px;
  color: #5E626C;
}
.praiseNum {
  position: absolute;
  right: 30px;
  top: 38px;
  font-size: 28px;
  color: #5E626C;
}
</style>
