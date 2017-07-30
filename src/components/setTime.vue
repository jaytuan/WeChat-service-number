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
    	
    </div>
    <div class="chooseDuration"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>
