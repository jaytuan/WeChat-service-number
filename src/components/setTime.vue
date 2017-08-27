<template>
  <div class="setTime">
    <div class="header">
	    <router-link to="/" class="back"></router-link>
	    <div class="title">设置时间</div>
	    <div class="set" @click="set">设置</div>
    </div>
    <div class="openClose">
    	<label for="" class="open">开启提醒</label>
    	<div class="setCheck"><input type="checkbox" class="al-toggle-button" @click="toggle"></div>
    </div>
    <div class="readWarn">阅读提醒(<label for="">{{time}}:{{sec}}</label>)</div>
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
    		<div class="hourHalf"></div>
    		<div class="hour"></div>
    	</div>
    </div>
    <div class="readWarn">阅读时长(<label for="">{{duration}}</label>)</div>
    <div class="chooseHour" @touchstart="start2" @touchend="end2" >
    	<div class="tri"></div>
    	<div class="timeline chooseLength" v-bind:style="{transform: translateX2}">
    		<div class="timeRuler"></div>
    		<div class="timeRuler"></div>
    		<div class="timeRuler"></div>
    		<div class="timeRuler"></div>
    		<div class="timeRuler"></div>
    		<div class="timeRuler"></div>
    		<div class="timeRuler"></div>
    		<div class="timeRuler"></div>
    	</div>
    </div>
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
      time:4, // 时间
      isBoundry:false,
      lastTime:0,
      startX2:0,
      endX2:0,
      lastDis2:0,
      disX2:0,
      isBoundry2:true,
      translateX2:"",
      duration:30,
      isOpen:false,
      sec:"00",
    }
  },
  methods:{
  	
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
  		this.endX = e.changedTouches[0].clientX;
		this.disX = this.endX - this.startX + this.lastDis;
		// 第一次触碰左边际
		if(this.disX >= 310 && !this.isBoundry){
			// 指针指到1的时候，往右偏了350px
			this.isBoundry = true;
			this.disX = 310;
			this.lastDis = this.disX;
		}
		else if(this.disX >= 310 && this.isBoundry) {
			this.disX = 310;
			this.lastDis = this.lastDis;
		}
		else if(this.disX <= -1561 && !this.isBoundry){
			this.isBoundry = true;
			this.disX = -1561;
			this.lastDis = this.disX;
		}
		else if(this.disX <= -1561 && this.isBoundry){
			this.disX = -1561;
			this.lastDis = this.lastDis;
		}
		else {
			this.isBoundry = false;
			this.lastDis = this.disX;
		}
		this.time = 4 - Math.ceil(this.disX/78);
		this.sec = this.disX % 78;
		console.log(this.sec);
		if(Math.abs(this.sec) > 39){
			this.sec = "30"; 
		}
		else {
			this.sec = "00";
		}
		this.translateX = "translateX("+this.disX+"px)"
		return this.translateX ;
  	},
  	start2:function(e){
  		this.startX2 = e.targetTouches[0].clientX; // 开始的x位置
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
  	end2:function(e){
  		console.log(e);
  		var disX3 = 0;
  		this.endX2 = e.changedTouches[0].clientX;
		this.disX2 = this.endX2 - this.startX2 + this.lastDis2;
		console.log(this.disX2)
		// 第一次触碰左边际
		if(this.disX2 >= 0 && !this.isBoundry2){
			// 指针指到1的时候，往右偏了310px
			this.isBoundry2 = true;
			this.disX2 = 0;
			this.lastDis2 = this.disX2;
		}
		else if(this.disX2 >= 0 && this.isBoundry2) {
			this.disX2 = 0;
			this.lastDis2 = this.lastDis2;
		}
		else if(this.disX2 <= -448 && !this.isBoundry2){
			this.isBoundry2 = true;
			this.disX2 = -448;
			this.lastDis2 = this.disX2;
		}
		else if(this.disX2 <= -448 && this.isBoundry2){
			this.disX2 = -448;
			this.lastDis2 = this.lastDis2;
		}
		else {
			this.isBoundry2 = false;
			this.lastDis2 = this.disX2;
		}
		
		var duration = Math.ceil((64-this.disX2)*210/448);
		/*if(duration%30 > 15) {*/
		this.duration = (Math.ceil(duration/30))*30;
		console.log(duration+","+this.duration);
		//}
		/*else {
			this.duration = (Math.ceil(duration/30)-1)*30;
		}*/
		if(this.disX2 > -64 && this.disX2 < 0){
			disX3 = -64;
		}
		else if(this.disX2 > -128 && this.disX2 <= -64) {
			disX3 = -128;
		}
		else if(this.disX2 > -192 && this.disX2 <= -128) {
			disX3 = -192;
		}
		else if(this.disX2 > -256 && this.disX2 <= -192) {
			disX3 = -256;
		}
		else if(this.disX2 > -320 && this.disX2 <= -256) {
			disX3 = -320;
		}
		else if(this.disX2 > -384 && this.disX2 <= -320) {
			disX3 = -384;
		}
		else if(this.disX2 > -448 && this.disX2 <= -384) {
			disX3 = -448;
		}
		else if(this.disX2 >= 0){
			disX3 = 0;
		}
		else {
			disX3 = -448;
		}
		this.translateX2 = "translateX("+disX3+"px)"
		/*window.localStorage._startTime = this.duration;*/
		return this.translateX2;
  	},
  	toggle:function(){
  		this.isOpen = !this.isOpen;
  	},
  	set:function(){
  		var url = "http://read.baizitech.cn/read/setReadTime.bz";
  		var data = {
		    "busiInfo": {
		        "userId": "123",
		        "times": this.duration,
		        "remindTime": this.time + ":"+this.sec,
		        "isOpen": this.isOpen
		    },
		    "pubInfo": {
		        "channelId": "wx",
		        "opId": "wxuipowur3875dks"
		    }
		}
  		var request = new XMLHttpRequest();
	    request.open('POST', url, true);

	    request.onload = function() {
	       // console.log(JSON.parse(this.responseText));
	        if (this.status >= 200 && this.status < 400) {
	            var res = JSON.parse(this.responseText);
	            console.log(res);
	        }
	    };
	    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	    request.send("inParam="+JSON.stringify(data));
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
.set {
	position: absolute;
	top: 19px;
	right: 30px;
	width: 100px;
	height: 42px;
	font-size: 34px;
	color: rgba(280,280,280);
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
	padding-left: 45px;
	padding-bottom: 26.4px;
	transition: transform 3s;
}
.timeRuler {
	position: relative;
	float: left;
	width: 63px;
	border-left: 1px solid #979797;
	height: 26.7px;
	margin-top: 7.6px;
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
.timeRuler:after {
	position: absolute;
	bottom: -43px;
	left: -16px;
	font-size: 28px;
	color: #000;
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
.hour:nth-of-type(45):after {
	content: '22';
}
.hour:nth-of-type(47):after {
	content: '23';
}
.hour:nth-of-type(49):after {
	content: '24';
}
.timeRuler:nth-of-type(1):after {
	content: '30';
}
.timeRuler:nth-of-type(2):after {
	content: '60';
}
.timeRuler:nth-of-type(3):after {
	content: '90';
}
.timeRuler:nth-of-type(4):after {
	content: '120';
	left: -25px;
}
.timeRuler:nth-of-type(5):after {
	content: '150';
	left: -25px;
}
.timeRuler:nth-of-type(6):after {
	content: '180';
	left: -25px;
}
.timeRuler:nth-of-type(7):after {
	content: '210';
	left: -25px;
}
.timeRuler:nth-of-type(8):after {
	content: '240';
	left: -25px;
}
.chooseLength {
	padding-left: 355px !important;
}

</style>
