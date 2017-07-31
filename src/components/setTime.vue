<template>
  <div class="setTime">
    <div class="header">
	    <router-link to="/" class="back"></router-link>
	    <div class="title">设置时间</div>
    </div>
    <div class="openClose">
    	<label for="" class="open">开启提醒</label>
    </div>
    <div class="readWarn">阅读提醒(<label for="">{{time}}</label>)</div>
    <div class="chooseHour">
    	<div class="zhishi"></div>
    	<div class="timeline" @touchstart="start" @touchend="end" v-bind:style="{transform: translateX}">

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
		/*if(this.disX > 390){
			this.disX = 390;
		}
		if(this.disX < -390){
			this.disX = -390;
		}*/
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
		else if(this.disX <= -350 && !this.isBoundry){
			this.isBoundry = true;
			this.disX = -350;
			this.lastDis = this.disX;
		}
		else if(this.disX <= -350 && this.isBoundry){
			this.disX = -350;
			this.lastDis = this.lastDis;
		}
		else {
			this.isBoundry = false;
			this.lastDis = this.disX;
		}
		this.time = 13 - Math.round(this.disX/20);
		console.log(this.disX);
		/*if(this.moveX < 0){
			console.log("到边上了");
		}*/
		/*this.time = Math.round(this.disX/20) + this.time;*/
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
}
.open {
	font-family: STHeitiSC-Light;
	font-size: 34px;
	color: #000000;
	display: block;
	height: 88px;
	line-height: 88px;
	text-align: left;
	padding-left: 30px;
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
.zhishi {
	position: absolute;
	top:0;
	height:20px;
	width: 2px;
	left: 358px;
	background-color: #333;
}
.timeline{
	text-align: left;
	width: 960px;
	height: 60px;
	padding-top: 30px;
	font-size: 30px;
}
</style>
