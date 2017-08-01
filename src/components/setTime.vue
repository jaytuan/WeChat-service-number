<template>
  <div class="setTime">
    <div class="header">
	    <router-link to="/" class="back"></router-link>
	    <div class="title">设置时间</div>
    </div>
    <div class="openClose">
    	<label for="" class="open">开启提醒</label>
    	<div class="setCheck"><input type="checkbox" class="al-toggle-button"></div>
    </div>
    <div class="readWarn">阅读提醒(<label for="">{{time}}</label>)</div>
    <div class="chooseHour">
    	<div class="tri"></div>
    	<div class="timeline" @touchstart="start" @touchend="end" v-bind:style="{transform: translateX}">
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    	</div>
    </div>
    <div class="chooseDuration"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      startX: 0 , // 开始滑动的位置
      endX: 0 , // 结束滑动的位置
      lastDis:0,  // 上次滑动的距离
      disX:0, // 当前滑动的距离
      translateX:"", // css
      time:13, // 时间
      isBoundry:false,
      lastTime:0,
    }
  },
  methods:{
  	touch:function(e){
  		console.log(e);
  	},
  	start:function(e){
  		this.startX = e.targetTouches[0].clientX; // 开始的x位置
  	},
  	/*move:function(e){
  		if(this.moveX == 0){
  			return ;
  		}
  		e.preventDefault();
  		this.disX = e.changedTouches[0].clientX - this.startX + this.lastDis;
  		if(this.disX >= 0) {

  		}

  	},*/
  	end:function(e){
  		console.log(e);
  		this.endX = e.changedTouches[0].clientX;
		this.disX = this.endX - this.startX + this.lastDis;
		// 第一次触碰左边际
		if(this.disX >= 350 && !this.isBoundry){
			// 指针指到1的时候，往右偏了350px
			this.isBoundry = true;
			this.disX = 350;
			this.lastDis = this.disX;
		}
		else if(this.disX >= 350 && this.isBoundry) {
			this.disX = 350;
			this.lastDis = this.lastDis;
		}
		else if(this.disX <= -1550 && !this.isBoundry){
			this.isBoundry = true;
			this.disX = -1550;
			this.lastDis = this.disX;
		}
		else if(this.disX <= -1550 && this.isBoundry){
			this.disX = -1550;
			this.lastDis = this.lastDis;
		}
		else {
			this.isBoundry = false;
			this.lastDis = this.disX;
		}
		this.time = 13 - Math.round(this.disX/20);
		this.translateX = "translateX("+this.disX+"px)"
		return this.translateX ;
  	}
  }
  	
}
</script>
<style scoped>
.setTime {
	position: relative;
	background-color: #F2F2F2;
	height: 100%;
}
.header {
	height:88px;
	width:100%;
	position: relative;
	background-color: #fff;
	border-bottom: 1px solid #C8C7CC;
}
.back {
	width: 25px;
	height: 42px;
	position: absolute;
	top: 23px;
	left: 30px;
	background: url("../assets/backto.png");
	background-size: cover;
}
.title {
	height:88px;
	line-height:88px;
	font-size: 34px;

}
.openClose {
	height: 88px;
	width: 100%;
	margin-top: 30px;
	background-color: #fff;
	position: relative;
	overflow: hidden;
}
.open {
	font-family: STHeitiSC-Light;
	font-size: 34px;
	color: #000000;
	height: 88px;
	line-height: 88px;
	text-align: left;
	padding-left: 30px;
	float: left;
}
.setCheck {
	position: absolute;
	right: 60px;
	top:28px;
}
.al-toggle-button{
    appearance: none;
    -webkit-appearance: none;
    position: relative;
    width: 52px;
    height: 32px;
    background: #dfdfdf;
    border-radius: 16px;
    border: 1px solid #dfdfdf;
    outline: 0;
    box-sizing: border-box;
}
.al-toggle-button:checked{
    border-color: #04be02;
    background-color: #04be02;
}
.al-toggle-button:before, .al-toggle-button:after{
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    border-radius: 15px;
    transition: transform 0.3s;
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    -webkit-transition: -webkit-transform 0.3s;
}
.al-toggle-button:before{
    width: 50px;
    background-color: #fdfdfd;
}
.al-toggle-button:after{
    width: 30px;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}
.al-toggle-button:checked:before{
    transform: scale(0);
    -webkit-transform: scale(0);
}
.al-toggle-button:checked:after{
    transform: translateX(20px);
    -webkit-transform: translateX(20px);
}
.readWarn {
	font-family: STHeitiSC-Light;
	font-size: 30px;
	color: #000000;
	margin-top: 30px;
	margin-left: 30px;
	margin-bottom: 16px;
	text-align: left;
}
.chooseHour {
	width: 718px;
	height: 110px;
	background: #FFFFFF;
	border: 1px solid #BCBCBC;
	border-radius: 10px;
	margin: 0 auto;
	position: relative;
	overflow-x: hidden;
}
.tri {
	position: absolute;
	top:0;
	left: 334px;
	width: 0;
	height: 0;
	border-left: 23px solid transparent;
	border-right: 23px solid transparent;
	border-top: 25px solid #74A9E3;
}
.timeline{
	overflow: hidden;
	text-align: left;
	width: 2000px;
	height: 60px;
	padding-top: 23.6px;
	padding-left: 20px;
	padding-bottom: 26.4px;
}
.hour{
	position: relative;
	float: left;
	width: 38px;
	border-left: 1px solid #979797;
	height: 37.3px;
}
.hourHalf {
	float: left;
	width: 38px;
	border-left: 1px solid #979797;
	height: 26.5px;
	margin-top: 5.4px; 
}
.hour:after {
	position: absolute;
	bottom: -43px;
	left: -7px;
	font-size: 28px;
	color: #000;
}
.hour:nth-of-type(1):after {
	content: '0';
}
.hour:nth-of-type(3):after {
	content: '1';
}
.hour:nth-of-type(5):after {
	content: '2';
}
.hour:nth-of-type(7):after {
	content: '3';
}
.hour:nth-of-type(9):after {
	content: '4';
}
.hour:nth-of-type(11):after {
	content: '5';
}
.hour:nth-of-type(13):after {
	content: '6';
}
.hour:nth-of-type(15):after {
	content: '7';
}
.hour:nth-of-type(17):after {
	content: '8';
}
.hour:nth-of-type(19):after {
	content: '9';
}
.hour:nth-of-type(21):after {
	content: '10';
}
.hour:nth-of-type(23):after {
	content: '11';
}
.hour:nth-of-type(25):after {
	content: '12';
}
.hour:nth-of-type(27):after {
	content: '13';
}
.hour:nth-of-type(29):after {
	content: '14';
}
.hour:nth-of-type(31):after {
	content: '15';
}
.hour:nth-of-type(33):after {
	content: '16';
}
.hour:nth-of-type(35):after {
	content: '17';
}
.hour:nth-of-type(37):after {
	content: '18';
}
.hour:nth-of-type(39):after {
	content: '19';
}
.hour:nth-of-type(41):after {
	content: '20';
}
.hour:nth-of-type(43):after {
	content: '21';
}
.hour:nth-of-type(23):after {
	content: '22';
}
.hour:nth-of-type(45):after {
	content: '23';
}
.hour:nth-of-type(47):after {
	content: '24';
}
</style>
