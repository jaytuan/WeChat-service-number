<template>
  <div class="rankingList">
  	<div class="header">
    <div class="headerTitle">
      <div class="back"></div>
      <div class="title">排行榜</div>
    </div>
    <div class="rankingMid">
      <div class="left">
        <div class="crown"></div>
        <div class="crownImg"></div>
        <div class="userInfo">
          <div class="userName">极限挑</div>
          <div class="readTime">200小时</div>
        </div>
      </div>
      <div class="mid">
        <div class="crownMid"></div>
        <div class="crownImgMid"></div>
        <div class="userInfo">
          <div class="userNameMid">极限挑</div>
          <div class="readTimeMid">200小时</div>
        </div>
      </div>
      <div class="right">
        <div class="crownRight"></div>
        <div class="crownImgRight"></div>
        <div class="userInfo">
          <div class="userNameRight">极限挑</div>
          <div class="readTimeRight">200小时</div>
        </div>
      </div>
    </div>
    <div class="rankingBot">
      您的阅读时间为268小时，当前第一名
    </div>
  	</div>
  	<div class="ranking">
  		<ul class="rankingUl">
  			<li v-for="item in lists">
  				<label class="rankingRace">{{item.id}}</label>
          <img :src="item.imgurl" alt="" class="rangkingImg">
          <label for="" class="rankingName">{{item.name}}</label>
          <label for="" class="rankingTime">{{item.time}}</label>
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
      lists:[
      {"id":1,
      "name":"wudi",
      "imgurl":"//file.40017.cn/huochepiao/pc/stage/demo/1/head.png",
      "time":"200小时"
  	  },
  	  {"id":1,
      "name":"极限挑战最好看",
       "imgurl":"//file.40017.cn/huochepiao/pc/stage/demo/1/head.png",
      "time":"200小时"
  	  }
      ]
    }
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
.crownImg {
  width: 99.7px;
  height: 100.7px;
  position: absolute;
  top:82.5px;
  left: 116px;
  background: url("../assets/head.png");
  background-size: cover;
  z-index: 20;
}
.crownImgMid {
  width: 126.6px;
  height: 127.8px;
  position: absolute;
  top: 77.9px;
  left: 48px;
  background: url("../assets/head.png");
  background-size: cover;
  z-index: 20;
}
.crownImgRight {
  width: 99.7px;
  height: 100.7px;
  position: absolute;
  top:82.5px;
  right: 116.5px;
  background: url("../assets/head.png");
  background-size: cover;
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
