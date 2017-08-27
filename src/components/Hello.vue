<template>
  <div class="hello">
      <div class="top_page">
          <div class="page_head">
              <div class="flex_one head_img">
                   <router-link to="/personalCenter"><img width="60px" v-bind:src="userHeadImg"/></router-link>
              </div>
              <div class="flex_two"><div v-on:click="showFreNotes"><span class="note_title">书友笔记</span><em class="icons down" v-bind:class="{ up:isShow }"></em></div></div>
              <div class="flex_one">
                  <router-link to="/setTime"><em class="icons set_icon""></em></router-link>
              </div>
          </div>
          <div class="start_read">
                <div v-show="showStartBtn" class="start">
                    <div class="start_btn" v-on:click="startRead">
                      <p>{{ isDone ? '完成' : '开始'}}</p>
                      <p class="today">{{ nowDate }}</p>
                    </div>
                </div>
                <div v-show="!showStartBtn"  class="reading"> 
                        <span class="second_pointer">
                            <em class="icons second_hand" v-bind:style="{left:leftValue+'px',top:topValue+'px'}"></em>
                        </span>
                        <div class="dif_time">
                              <span class="dif_minutes">{{ leftTimeStr }}'</span>
                              <span class="today">{{ nowDate }}</span>
                        </div>
                </div>
                <div class="progress_left">
                    <div class="circle_left" v-bind:style="{transform:'rotate('+ leftRot +'deg)'}">
                    </div>
                </div>
                <div class="progress_right">
                    <div class="circle_right" v-bind:style="{transform:'rotate('+ rightRot +'deg)'}">
                    </div>
                </div>
          </div>
      </div>
      <div v-show='isShow' class="gray_back" id="noteList">
          <ul class="friend_note_ul">
              <li class="friend_note" v-for="item in friendNoteByPage">
                  <div class="note_head">
                      <span class="note_head_name">
                        <img width="60px" src="//file.40017.cn/huochepiao/pc/stage/demo/1/head.png" class="note_head_img" ></img>
                        <span class="friend_name">张依依</span>
                      </span>
                      <span class="note_title">《<span class="note_title_cont">{{item.noteTitle}}</span>》</span>
                  </div>
                  <p class="note_content">{{item.noteContent}}</p>
                  <div class="note_foot">
                      <span class="note_date">{{ new Date(item.createDate).getFullYear()+'.'+(new Date(item.createDate).getMonth()+1)+'.'+new Date(item.createDate).getDate() }}</span>
                      <span class="praise" v-bind:class="{ click_praise : item.isPraise }" v-on:click="clickPraise(item.noteId)"></span>
                  </div>
              </li>
              <li class="loading" v-show="isLoading"></li>
              <li class="no_more" v-show="nomore">没有更多内容啦</li>
          </ul>
      </div>
      <div class="content_center">
          <div class="read_hours">阅读时长<span class="digital">{{ readTimes }}</span>小时</div>
          <div class="friend_list">
              <router-link to="/rankingList">好友排行榜<span class="digital">{{ rankingLevel }}</span>名<i class="right_arrow"></i></router-link>
          </div>
      </div>
      <div class="punch_list">
          <div class="top_menu">
              <div class="left_title"><em class="icons note_list"></em><span>打卡统计</span></div>
              <div class="hold_date">已坚持<span class="digital">{{ holdDates }}</span>天</div>
          </div>
          <div class="date_list">
              <ul class="week_day">
                  <li class="flex_one">一</li>
                  <li class="flex_one">二</li>
                  <li class="flex_one">三</li>
                  <li class="flex_one">四</li>
                  <li class="flex_one">五</li>
                  <li class="flex_one">六</li>
                  <li class="flex_one">日</li>
              </ul>
              <ul class="months_day">
                  <li  v-for="it in dates" class="flex_one"><span class="line_height" v-bind:class="{ has_sign : it.hasSign }">{{ it.num }}</span></li>
              </ul>
          </div>
      </div>
      <div class="read_all_pep">
          <span>当前和您一同阅读<span class="digital">{{ readWithYou }}</span>人</span>
      </div>
      <router-link to="/writeNotes">
         <div class="write_note">写笔记</div>
      </router-link>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      isShow:false,
      isDone:false,
      showStartBtn:true,
      topValue:-220,
      leftValue:0,
      leftTime:30,
      leftTimeStr:30,
      leftRot:135,
      rightRot:-45,
      readTimes:0,
      rankingLevel:0,
      holdDates:0,
      readWithYou:0,
      weekSignDate:[],
      friendNoteByPage:[],
      isLoading:false,
      nomore:false,
      pageIndex:2,
      openid:'',
      userHeadImg:'',
    }
  },
  computed: {
    /*userHeadImg: function () {
        var that = this;
        var para = {
           "busiInfo":{
                "openid":that.openid,
            },
            "pubInfo":{
                "channelId":"wx",
                "opId":that.openid
            }
        }
        var url = 'http://read.baizitech.cn/read/getUserInfo.bz';
        this.xhrQuest(para,url,function(){
            if (this.status >= 200 && this.status < 400) {
                var backData = JSON.parse(this.responseText);
                console.log('haha'+JSON.stringify(backData.data));
                var headImgurl = backData.data.avator;
                return '<img width="60px" src= '+ headImgurl +' />';
            }
        });
    },*/
    dates:function(){
        var a = [];
         //计算本周所有时间
       var nowWeekDay = new Date().getDay();
       var diffday = nowWeekDay > 0 ? nowWeekDay-1 : 6;
       var nowTime = new Date().getTime();
       var b = this.weekSignDate;
       for(var i= 0;i<7;i++){
           var date = new Date(nowTime-(diffday-i)*3600*24*1000).getDate();
           a.push({"num":date,"hasSign":b[i]});
       }
       return a;
    },
    nowDate:function(){
        var today = new Date();
        var nowMonth = today.getMonth()+1;
        nowMonth = nowMonth < 10 ? '0' + nowMonth : nowMonth; 
        var nowDate = today.getDate();
        nowDate = nowDate < 10 ? '0' + nowDate : nowDate;
        return today.getFullYear() + '.'+ nowMonth + '.' + nowDate;
    }
  },
  methods:{
      showFreNotes:function(){
          this.isShow = !this.isShow;
      },
      clickPraise:function(id){
          for(var i = 0;i<this.friendNoteByPage.length;i++){
              var note = this.friendNoteByPage[i];
              if(note.noteId == id){
                  note.isPraise = !note.isPraise;
                  //true 点赞了 false 取消点赞了
                  this.praise(note.noteId,note.isPraise);
                  break;
              }
          }
      },
      startRead:function(){
          if(this.isDone){
            return false;
          }
         this.showStartBtn = false;
         var startReadTime = new Date().getTime();
         window.localStorage._startTime = startReadTime;
         //开始阅读接口
         var para = {
              "busiInfo": {
                  "userId": this.openid
              },
              "pubInfo": {
                  "channelId": "wx",
                  "opId": this.openid
              }
          };
          var request = new XMLHttpRequest();
          request.open('POST', 'http://read.baizitech.cn/read/toBegin.bz', true);

          request.onload = function() {
              if (this.status >= 200 && this.status < 400) {
                console.log(JSON.parse(this.responseText));
              }
          };

          request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
          request.send("inParam="+JSON.stringify(para));
          this.drawcanvas();
      },
      //id:操作的笔记id;op: true点赞 false取消点赞
      praise:function(id,op){
            var that = this;
            var para = {
               "busiInfo":{
                    "userId":that.openid,
                    "noteId":id
                },
                "pubInfo":{
                    "channelId":"wx",
                    "opId":that.openid
                }
            }
            var url = 'http://read.baizitech.cn/read/doPraise.bz';
            if(!op){
                url = 'http://read.baizitech.cn/read/cancelPraise.bz';
            }
            this.xhrQuest(para,url,function(){
                if (this.status >= 200 && this.status < 400) {
                    var backData = JSON.parse(this.responseText);
                    console.log(backData.data);
                }
            });
      },
      readEnd : function(){
           var that = this;
           var para = {
               "busiInfo":{
                    "userId":that.openid,
                },
                "pubInfo":{
                    "channelId":"wx",
                    "opId":that.openid
                }
            }
            var url = 'http://read.baizitech.cn/read/toEnd.bz';
            this.xhrQuest(para,url,function(){
                if (this.status >= 200 && this.status < 400) {
                    var backData = JSON.parse(this.responseText);
                }
            });
      },
      drawcanvas : function(secondsPosition){
            var t = 1;
            if(!!secondsPosition){
                t = secondsPosition;
            }
            var that = this;
            var drawpicture = setInterval(function(){
               if(t>=60){
                 t=1;
                 that.leftRot = 135;
                 that.leftTime--;
                 that.leftTimeStr = that.leftTime;
                 if(that.leftTime<=0){
                    that.isDone = true;
                    that.showStartBtn = false;
                    clearInterval(drawpicture);
                    that.readEnd();
                 }
                }
                if(t<30){
                    that.rightRot = -40+6*t;
                }else{
                    that.rightRot = 135;
                    that.leftRot = 140 + 6*(t-30);
                }
                that.leftValue = 220 * Math.sin(Math.PI/30 * t);
                that.topValue = -220 * Math.cos(Math.PI/30 * t);
                t++;
            },1000);
           
       },
      getFriendNote: function(index){
          var that = this;
          var para = {
             "busiInfo":{
                  "qryType":0,
                  "userId":that.openid,
                  "pageSize":20,
                  "pageNum":index
              },
              "pubInfo":{
                  "channelId":"wx",
                  "opId":that.openid
              }
          }
          var url = 'http://read.baizitech.cn/read/getReadNotes.bz';
          this.xhrQuest(para,url,function(){
              if (this.status >= 200 && this.status < 400) {
                  var backData = JSON.parse(this.responseText);
                  console.log(backData.data.length)
                  if(backData.data.length > 0 ){
                    that.friendNoteByPage = that.friendNoteByPage.concat(backData.data);
                    console.log(that.friendNoteByPage);
                  }else{
                    that.isLoading = false;
                    that.nomore = true;
                  }
              }

          });
      },
      xhrQuest: function(params,url,callback){
          var request = new XMLHttpRequest();
          request.open('POST', url, true);
          request.onload = callback;
          request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
          request.send("inParam="+JSON.stringify(params));
      },
      listenScroll:function(){
          if(window.innerHeight + document.body.scrollTop + 10 > document.body.scrollHeight && !this.nomore){
              this.isLoading = true; 
              this.getFriendNote(this.pageIndex++);
          }
      }
  },
  created(){
      var startReadTime = parseInt(window.localStorage._startTime,10);
      if(!startReadTime){
          //缓存没有找到上次阅读时间，则显示开始按钮，未完成阅读
          this.showStartBtn = true;
          this.isDone = false;
      }else{
          var now = new Date().getTime();
          var nowDate = new Date().getFullYear()+''+(new Date().getMonth()+1)+''+new Date().getDate();
          var lastReadDate = new Date(startReadTime).getFullYear()+''+(new Date(startReadTime).getMonth()+1)+''+new Date(startReadTime).getDate();
          if( nowDate == lastReadDate && now-startReadTime >= 1800*1000){
            //同一天且30分钟已过，开始按钮显示 ’完成‘
            this.showStartBtn = true;
            this.isDone = true;
          }else if(nowDate != lastReadDate){
            //第二天，或者以后很多天，可以点击开始
            this.showStartBtn = true;
            this.isDone = false;
          }else{
            //三十分钟内显示动画
            this.showStartBtn = false;
            this.isDone = false;
            var leftMinutes = Math.floor((now - startReadTime)/1000/60);
            this.leftTime = 30-leftMinutes;
            this.leftTimeStr = this.leftTime < 10 ? ('0'+this.leftTime) : this.leftTime;
            var leftSeconds = 60-(now - startReadTime)/1000%60;
            this.drawcanvas(leftSeconds);
          }
      }
      window.onscroll = this.listenScroll;
  },
  beforeCreate(){
      var that = this;
      /*function getUrlKey(name){
        return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
      }
      this.openid = getUrlKey("openid");
      */
      function xhrQuest(params,url,callback){
          var request = new XMLHttpRequest();
          request.open('POST', url, true);
          request.onload = callback;
          request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
          request.send("inParam="+JSON.stringify(params));
      }
      function getReadTime(){
          var para = {
              "busiInfo": {
                  "userId": that.openid,
              },
              "pubInfo": {
                  "channelId": "wx",
                  "opId": that.openid,
              }
          }
          var url = 'http://read.baizitech.cn/read/getTotalTimes.bz';
          xhrQuest(para,url,function(){
              if (this.status >= 200 && this.status < 400) {
                  var backData = JSON.parse(this.responseText);
                  that.readTimes = backData.data.totalTimes;
              }
          });
      }
      function getRankingLevel(){
          var para = {
              "busiInfo": {
                  "userId": that.openid,
              },
              "pubInfo": {
                  "channelId": "wx",
                  "opId": that.openid,
              }
          }
          var url = 'http://read.baizitech.cn/read/getUserRank.bz';
          xhrQuest(para,url,function(){
              if (this.status >= 200 && this.status < 400) {
                  var backData = JSON.parse(this.responseText);
                  that.rankingLevel = backData.data.userRank;
              }
          });
      }
      function getHoldDates(){
          var para = {
              "busiInfo": {
                  "userId": that.openid,
              },
              "pubInfo": {
                  "channelId": "wx",
                  "opId": that.openid,
              }
          }
          var url = 'http://read.baizitech.cn/read/getSignNum.bz';
          xhrQuest(para,url,function(){
              if (this.status >= 200 && this.status < 400) {
                  var backData = JSON.parse(this.responseText);
                  that.holdDates = backData.data.signNum;
              }
          });
      }
      function getNowOnline(){
          var para = {};
          var url = 'http://read.baizitech.cn/read/getOnlineUserNum.bz';
          xhrQuest(para,url,function(){
              if (this.status >= 200 && this.status < 400) {
                  var backData = JSON.parse(this.responseText);
                  that.readWithYou = backData.data.onlineUserNum;
              }
          });
      }
      function getWeekSignUp(){
          var para = {
              "busiInfo": {
                  "userId": that.openid,
              },
              "pubInfo": {
                  "channelId": "wx",
                  "opId": that.openid,
              }
          }
          var url = 'http://read.baizitech.cn/read/getWeekSignDate.bz';
          xhrQuest(para,url,function(){
              if (this.status >= 200 && this.status < 400) {
                  var backData = JSON.parse(this.responseText);
                  that.weekSignDate = backData.data.weekSignDate;
              }
          });
      }
      function getFriendNote(index){
          var para = {
             "busiInfo":{
                  "qryType":0,
                  "userId":that.openid,
                  "pageSize":20,
                  "pageNum":index
              },
              "pubInfo":{
                  "channelId":"wx",
                  "opId":that.openid
              }
          }
          var url = 'http://read.baizitech.cn/read/getReadNotes.bz';
          xhrQuest(para,url,function(){
              if (this.status >= 200 && this.status < 400) {
                  var backData = JSON.parse(this.responseText);
                  that.friendNoteByPage = that.friendNoteByPage.concat(backData.data);
              }
          });
      }
       function getUserInfo(){
        var headImgurl = '//file.40017.cn/huochepiao/pc/stage/demo/1/head.png';
        var para = {
          "busiInfo": {
            //"openid": "osB8TwJRz0GjQKaI6Sxa70HeN5PI"
            "openid": sessionStorage.getItem('openid')
          },
          "pubInfo": {
            "channelId": "wx",
            "opId": "wxuipowur3875dks"
          }
        };
        var url = 'http://read.baizitech.cn/read/getUserInfo.bz';
        xhrQuest(para,url,function(){
          if (this.status >= 200 && this.status < 400) {
            var backData = JSON.parse(this.responseText);
            that.userHeadImg = backData.data.headimgurl;
          }
        });
      }
      function getOpenId(openid) {
        var reg = new RegExp("(^|&)" + openid + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
      }
      var openid= getOpenId('openid');
      sessionStorage.setItem('openid',openid);
      window.localStorage.openid = getOpenId('openid');

      getUserInfo();
      getReadTime();
      getRankingLevel();
      getHoldDates();
      getNowOnline();
      getWeekSignUp();
      getFriendNote(1);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration:none;
}
a:-webkit-any-link {
  color:inherit;
}
ul{
  list-style:none;
}
.icons{
    background:url('../assets/yedu.png?v=2') no-repeat;
}
.hello{
  height:100%;
  background:#f2f2f2;
}
.top_page{
    height:713px;
    width:100%;
    z-index:1;
    background:url('../assets/back.png') no-repeat;
    background-size: 100% 713px;
}
.top_page .start_read{
    width:480px;
    height:480px;
    z-index:20;
    margin:0 auto;
}
.top_page .start_read .start{
    background:url('../assets/yuanhuan.png?v=1') no-repeat;
    width:340px;
    height:340px;
    padding:72px;
    background-size:480px;
}
.top_page .start_read .reading{
    background:url('../assets/yuanhuan.png?v=1') no-repeat;
    width:480px;
    height:480px;
    background-size:480px;
    position:relative;
}
.top_page .start_read .progress_left{
    position:relative;
    width:240px;
    height:480px;
    overflow:hidden;
    z-index:10;
    top:-482px;
    pointer-events:none;
}
.progress_left .circle_left{
    border:solid 40px rgba(0,0,0,0);
    border-left-color:#4090e9;
    border-top-color:#4090e9;
    width:400px;
    height:400px;
    border-radius:50%;
    transform:rotate(135deg);
}
.top_page .start_read .progress_right{
    position:relative;
    width:240px;
    height:480px;
    top:-962px;
    left:240px;
    overflow:hidden;
    z-index:10;
    pointer-events:none;
}
.progress_right .circle_right{
    border:solid 40px rgba(0,0,0,0);
    border-left-color:#4090e9;
    border-top-color:#4090e9;
    width:400px;
    height:400px;
    position:relative;
    left:-240px;
    border-radius:50%;
    transform:rotate(-45deg);
}
.top_page .start_read .reading .second_pointer{
    position:absolute;
    left:220px;
    top:220px;
}
.top_page .start_read .reading .dif_time{
    position:absolute;
    left:155px;
    top:150px;
}
.top_page .start_read .reading .dif_minutes{
    font-size:140px;
    color:#85bbf7;
    font-weight:bold;
}
.top_page .start_read .start .start_btn{
    background:url('../assets/start.png?v=1') no-repeat;
    height:240px;
    width:340px;
    background-size:340px;
    padding-top:100px;
    color:#fff;
    font-size:100px;
    font-family: STHeitiSC-Medium;
    letter-spacing:1.84px;
    border-radius:170px;
}
.top_page .start_read .today{
    font-size:20px;
    display:block;
    padding-right:35px;
    color:#aaa;
    margin-top:26px;
}
.top_page .start_read .reading .second_hand{
   display:inline-block;
   width:41px;
   height:41px;
   background-position:-257px -1px;
   position:absolute;
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
.page_head .down{
  width:28px;
  height:20px;
  display:inline-block;
  background-position:-53px 3px;
}
.page_head .up{
  background-position:-53px -22px;
}
.page_head .set_icon{
  width:60px;
  height:64px;
  display:inline-block;
  background-position:3px 3px;
  position:absolute;
  top:35px;
  right:35px;
}
.page_head .head_img{
    padding-top:30px;
}
.flex_one{
   flex:1;
}
.flex_two{
   flex:3;
   z-index:12;
}
.content_center{
    height:100px;
    width:718px;
    margin:0 auto;
    position:relative;
    background:#FFF;
    border:0 solid #b8b8b8;
    border-radius:10px;
    top:-50px;
    font-family: STHeitiSC-Medium;
    color:#5e626c;
    line-height:100px;
    box-shadow:0px 1px;
}
.content_center .read_hours{
    width:52%;
    height:70px;
    display:inline-block;
    vertical-align:middle;
    font-size:32px;
    line-height:70px;
    border-right:solid 1px #b8b8b8;
}
.content_center .friend_list{
    width:47%;
    height:70px;
    display:inline-block;
    font-size:32px;
    line-height:70px;
    vertical-align:middle;
}
.content_center .friend_list .right_arrow{
  height: 20px;
  width: 20px;
  display:inline-block;
  border-left: 2px solid #c7c7cc;
  border-top: 2px solid #c7c7cc;
  transform:rotate(135deg);
}
.digital{
    color:#67a1e0;
}
/*打卡列表开始*/
.punch_list{
    width:718px;
    height:237px;
    background:#fff;
    border: 0 solid #b8b8b8;
    box-shadow:0 6px 8px 7px #ebebeb;
    border-radius:10px;
    margin:-28px auto 0;
    font-size:30px;
    z-index:20;
}
.punch_list .top_menu{
    padding-top:30px;
    text-align:left;
    font-family: STHeitiSC-Light;
    font-size: 30px;
    color: #5E626C;
    margin-bottom:25px;
}
.punch_list .left_title{
    display:inline-block;
    padding-left:30px;
}
.punch_list .hold_date{
    display:inline-block;
    float:right;
    margin-right:40px;
}
.punch_list .left_title .note_list{
    width:30px;
    height:40px;
    display:inline-block;
    vertical-align:middle;
    background-position:-90px 3px;
}
.punch_list .date_list .week_day{
    display:flex;
    font-family: STHeitiSC-Light;
    font-size: 38px;
    color: #999;
    letter-spacing: 0.7px;
}
.punch_list .date_list .months_day{
    display:flex;
    font-family: STHeitiSC-Light;
    font-size: 38px;
    color: #666;
    letter-spacing: 0.1px;
}
.punch_list .date_list .line_height{
    line-height:58px;
}
.punch_list .date_list .flex_one{
    float:left;
    margin-bottom:18px;
}
.punch_list .months_day .flex_one{
    margin-bottom:0;
}
.punch_list .date_list .has_sign{
    background:#75B1F5;
    border-radius:29px;
    width:58px;
    height:58px;
    line-height:58px;
    display:inline-block;
}
/*打卡列表结束*/
.read_all_pep{
    font-size:32px;
    margin:18px auto;
    font-family: STHeitiSC-Light;
    color: #999;
    letter-spacing: 0.5px;
    line-height: 33px;
}
.write_note{
    width:718px;
    height:88px;
    background:#75b1f5;
    border-radius:10px;
    line-height:88px;
    color:#fff;
    font-size:45px;
    letter-spacing:10px;
    margin:0 auto 30px;
    box-shadow:0px 0px 25px #75b1f5;
}
.gray_back{
    position:absolute;
    top:0;
    left:0;
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
.gray_back .friend_note_ul .loading{
    background:url('../assets/loading.gif?v=1') no-repeat;
    display:inline-block;
    width:40px;
    height:40px;
}
.gray_back .friend_note_ul .no_more{
    font-size:30px;
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
    right:30px;
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
    text-align:left;
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
</style>
