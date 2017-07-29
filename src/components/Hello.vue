<template>
  <div class="hello">
      <div class="top_page">
          <div class="page_head">
              <div class="flex_one head_img">
                   <router-link to="/personalCenter" v-html="userHeadImg"></router-link>
              </div>
              <div class="flex_two"><div v-on:click="showFreNotes"><span class="note_title">书友笔记</span><em class="icons down" v-bind:class="{ up:isShow }"></em></div></div>
              <div class="flex_one">
                  <router-link to="/setTime"><em class="set_icon""></em></router-link>
              </div>
          </div>
          <div class="start_read">

          </div>
      </div>
      <div class="content_center">
          <div class="read_hours">阅读时长<span class="digital">{{ readTimes }}</span>小时</div>
          <div class="friend_list">
              <router-link to="/rankingList">好友排行榜<span class="digital">{{ rankingLevel }}</span>名></router-link>
          </div>
      </div>
      <div class="punch_list">
          <div class="top_menu">
              <div class="left_title"><em class="note_list"></em><span>打卡统计</span></div>
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
                  <li  v-for="it in dates" class="flex_one"><span v-bind:class="{ has_sign : it.hasSign }">{{ it.num }}</span></li>
              </ul>
          </div>
      </div>
      <div class="read_all_pep">
          <span>当前和您一同阅读<span class="digital">{{ readWithYou }}</span>人</span>
      </div>
      <div class="write_note">
             <router-link to="/writeNotes">写笔记</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      isShow:false,
    }
  },
  computed: {
    userHeadImg: function () {
      var headImgurl = '//file.40017.cn/huochepiao/pc/stage/demo/1/head.png';
      return '<img width="64px" src= '+ headImgurl +' />';
    },
    dates:function(){
        var a = [];
         //计算本周所有时间
       var nowWeekDay = new Date().getDay();
       var diffday = nowWeekDay > 0 ? nowWeekDay-1 : 6;
       var nowTime = new Date().getTime();
       var b=[true,false,true,false,false,true,false];
       for(var i= 0;i<7;i++){
           var date = new Date(nowTime-(diffday-i)*3600*24*1000).getDate();
           a.push({"num":date,"hasSign":b[i]});
       }
       return a;
    }
  },
  methods:{
      showFreNotes:function(){
          this.isShow = !this.isShow;
      },
  },
  beforeCreate(){
      //this.$http.get('a.txt').then(function(res){
        //    alert(res.body);    
       //},function(){
        //console.log('请求失败处理');
       //});
       this.rankingLevel = 3;
       this.readTimes = 308;
       this.holdDates = 12; 
       this.readWithYou = 7089;
  }
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
    background:url('../assets/yedu.png?v=1') no-repeat;
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
    background:#ccc;
    z-index:20;
    margin:0 auto;
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
  width:36px;
  height:20px;
  display:inline-block;
  background-position:-114px -11px;
}
.page_head .up{
  background-position:-114px -38px;
}
.page_head .set_icon{
  width:64px;
  height:64px;
  display:inline-block;
  background:url('../assets/setting.png') no-repeat;
  background-position:3px 3px;
  background-size:54px;
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
    margin-bottom:30px;
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
    width:46px;
    height:43px;
    display:inline-block;
    background:url('../assets/notelist.png?v=1') no-repeat;
    background-size:30px;
    vertical-align:middle;
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
    color: #3F3F3F;
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
}
</style>
