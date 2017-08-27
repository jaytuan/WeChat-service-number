<template>
  <div class="rankingList">
  	<div class="header">
    <div class="headerTitle">
      <router-link to="/" class="back"></router-link to="/">
      <div class="title">排行榜</div>
    </div>
    <div class="rankingMid">
      <div class="left">
        <div class="crown"></div>
        <div class="crownImg"><img :src="listThree[1].avator" alt=""></div>
        <div class="userInfo">
          <div class="userName">{{listThree[1].nickName}}</div>
          <div class="readTime">{{listThree[1].totalTimes}}小时</div>
        </div>
      </div>
      <div class="mid">
        <div class="crownMid"></div>
        <div class="crownImgMid"><img :src="listThree[0].avator" alt=""></div>
        <div class="userInfo">
          <div class="userNameMid">{{listThree[0].nickName}}</div>
          <div class="readTimeMid">{{listThree[0].totalTimes}}小时</div>
        </div>
      </div>
      <div class="right">
        <div class="crownRight"></div>
        <div class="crownImgRight"><img :src="listThree[2].avator" alt=""></div>
        <div class="userInfo">
          <div class="userNameRight">{{listThree[2].nickName}}</div>
          <div class="readTimeRight">{{listThree[2].totalTimes}}小时</div>
        </div>
      </div>
    </div>
    <div class="rankingBot">
      您的阅读时间为{{time}}小时，当前第{{race}}名
    </div>
  	</div>
  	<div class="ranking">
  		<ul class="rankingUl">
  			<li v-for="(item,index) in listThreeOther">
  				<label class="rankingRace">{{index+1}}</label>
          <img :src="item.avator" alt="" class="rangkingImg">
          <label for="" class="rankingName">{{item.nickName}}</label>
          <label for="" class="rankingTime">{{item.totalTimes}}小时</label>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'rankingList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      time:"",
      race:"",
      lists:[],
      listThree:[],
      listThreeOther:[],
    }
  },
  created:function(){
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
    var url1 = 'http://read.baizitech.cn/read/getTopTen.bz'; // 排行榜
    var url2 = "http://read.baizitech.cn/read/getTotalTimes.bz"; // 总阅读时长
    var url3 = "http://read.baizitech.cn/read/getUserRank.bz";// 获取排行榜排名

    var data2 = {
        "busiInfo": {
            "userId": "123"
        },
        "pubInfo": {
            "channelId": "wx",
            "opId": "wxuipowur3875dks"
        }
    }
    var data3 = {
      "busiInfo": {
          "userId": "123"
      },
      "pubInfo": {
          "channelId": "wx",
          "opId": "wxuipowur3875dks"
      }
    }
    this.http("",url1,function(res) {
      if(res && res.data.length > 0) {
        that.lists = res.data;
        console.log(that.lists);
        that.listThree = res.data.slice(0,3);
        that.listThreeOther = res.data.slice(3);
      }
      
      console.log(that.listThree);
    })
    this.http(data2,url2,function(res) {
      that.time = res.data.totalTimes;
      console.log(res);
    })
    this.http(data3,url3,function(res){
      that.race = res.data.userRank;
      console.log(res)
    })
  }
}
</script>
<style scoped>
.rankingList {
	position: relative;
	background-color: #F2F2F2;
	height: 100%;
}
.header {
	height: 462px;
	width: 750px;
	background: linear-gradient(to right,#8CC2FD,#5190D5);
}
.headerTitle {
  position: relative;
  height: 88px;
  width: 100%;
}
.back {
  position: absolute;
  top:30px;
  left: 30px;
  height: 26px;
  width: 26px;
  border-top:5px solid #fff;
  border-left: 5px solid #fff;
  transform: rotate(-45deg);
}
.title {
  margin:0 auto;
  font-family: STHeitiSC-Light;
  font-size: 34px;
  color: #FFFFFF;
  height: 88px;
  line-height: 88px;
}
.rankingMid {
  height: 314px;
  width: 100%;
  overflow: hidden;
}
.left {
  height: 314px;
  width: 264px;
  float: left;
  position: relative;
}
.mid {
  height: 314px;
  width: 222px;
  float: left;
  position: relative;
}
.right {
  height: 314px;
  width: 264px;
  float: left;
  position: relative;
}
.crown {
  display: block;
  width: 88px;
  height: 70px;
  position: absolute;
  top:25px;
  left: 126.5px;
  background: url("../assets/ranking2.png");
  background-size: cover;
  z-index: 25;
}
.crownRight {
  width: 88px;
  height: 70px;
  position: absolute;
  top:25px;
  right: 121.5px;
  background: url("../assets/ranking3.png");
  background-size: cover;
  z-index: 25;
}
.crownMid {
  width: 105px;
  height: 82px;
  position: absolute;
  top:8px;
  left: 61.3px;
  background: url("../assets/ranking1.png");
  background-size: cover;
  z-index: 25;
}
.crownImg img{
  width: 99.7px;
  height: 100.7px;
  border-radius: 50%;
  position: absolute;
  top:82.5px;
  left: 116px;
  z-index: 20;
}
.crownImgMid img{
  width: 126.6px;
  height: 127.8px;
  position: absolute;
  border-radius: 50%;
  top: 77.9px;
  left: 48px;
  z-index: 20;
}
.crownImgRight img{
  width: 99.7px;
  height: 100.7px;
  border-radius: 50%;
  position: absolute;
  top:82.5px;
  right: 116.5px;
  z-index: 20;
}
.userInfo {
  position: absolute;
  top:218px;
  left: 0;
}
.userName {
  text-align: center;
  width: 198px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 34px;
  padding-left: 68px;
  font-family: PingFangSC-Regular;
  color: #FFFFFF;
  height: 48px;
  line-height: 48px;
}
.userNameRight {
  text-align: center;
  width: 198px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 34px;
  padding-right: 68px;
  font-family: PingFangSC-Regular;
  color: #FFFFFF;
  height: 48px;
  line-height: 48px;
}
.userNameMid {
  text-align: center;
  width: 222px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 34px;
  font-family: PingFangSC-Regular;
  color: #FFFFFF;
  height: 48px;
  line-height: 48px;
}
.readTime {
font-family: PingFangSC-Regular;
font-size: 26px;
color: #FFFFFF;
height: 37px;
text-align: center;
width: 204px;
padding-left: 68px;
}
.readTimeRight {
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #FFFFFF;
  height: 37px;
  text-align: center;
  width: 204px;
  padding-right: 68px;
}
.readTimeMid {
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #FFFFFF;
  height: 37px;
  text-align: center;
  width: 222px;
}
.mid {
  height: 314px;
  width: 222px;
  float: left;
  position: relative;
}
.right {
  height: 314px;
  width: 264px;
  float: left;
  position: relative;
}
.rankingBot {
  font-family: STHeitiSC-Light;
  font-size: 28px;
  color: #FFFFFF;
  height: 60px;
  line-height: 60px;
}
.ranking {
	margin: 20px 16px;
	background-color: #fff;
}
.rankingUl li {
  position: relative;
	margin-left: 30px;
	margin-right: 30px;
	height: 88px;
	font-family: STHeitiSC-Light;
	font-size: 34px;
	color:#666;
	line-height: 88px;
	list-style: none;
	border-bottom:1px solid #C8C7CC;
}
.rankingRace {
  font-family: STHeitiSC-Light;
  color: #666666;
  position: absolute;
  left: 0;
  font-size: 34px;
}
.rangkingImg {
  position: absolute;
  left:49px;
  top:19.2px;
  bottom: 18.8px;
  display: block;
  height: 50px;
  width: 50px;
}
.rankingName {
  position: absolute;
  font-family: STHeitiSC-Light;
  color: #000;
  left: 115px;
  font-size: 34px;
  max-width: 204px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.rankingTime {
  position: absolute;
  font-family: STHeitiSC-Light;
  color: #000;
  font-size: 34px;
  right: 0;
}
</style>
