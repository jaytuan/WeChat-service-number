<template>
  <div class="setTime">
    <div class="header">
	    <div class="back"></div>
	    <div class="title">设置时间</div>
    </div>
    <div class="openClose">
    	<label for="" class="open">开启提醒</label>
    </div>
    <div class="readWarn">阅读提醒(<label for=""></label>)</div>
    <div class="chooseHour">
    	<div class="zhishi"></div>
    	<div class="timeline" @touchstart="start" @touchend="end" @click="touch" v-bind:style="{ transform: translateX}">1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24</div>
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
      startX: 0 ,
      endX: 0 ,
      lastDis:0,
      disX:0,
      translateX:"",
    }
  },
  methods:{
  	touch:function(){
  		console.log(this.$refs);
  	},
  	start:function(e){
  		this.startX = e.targetTouches[0].clientX;
  	},
  	end:function(e){
  		this.endX = e.changedTouches[0].clientX;
		this.disX = this.endX - this.startX + this.lastDis;
		if(this.disX > 560){
			this.disX = 560;
		}
		if(this.disX < -560){
			this.disX = -560;
		}
		this.lastDis = this.disX;
		console.log(this.disX);
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
