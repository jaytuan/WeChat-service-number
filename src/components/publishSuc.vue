<template>
  <div class="publishSuc">
  	<div class="header">
	    <div class="close"></div>
	    <div class="title">发表成功</div>
    </div>
    <div class="imgsucc">
    	
    </div>
    <div class="wordsucc">
    	恭喜您！发表成功
    </div>
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
.publishSuc {
	position: relative;
}
.header {
	height:88px;
	width:100%;
	position: relative;
	border-bottom: 1px solid #C8C7CC;
}
.close {
	/* font-size:31.5px;
	height:31.5px;
	width:31.5px; */
	height:31.5px;
	width:31.5px;
	position: absolute;
	top: 29.2px;
	left: 29.9px;
}
.close::before {
    transform: rotate(45deg);
    content: '';
    position: absolute;
    height: 4px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #969696;
}
.close::after {
    transform: rotate(-45deg);
    content: '';
    position: absolute;
    height: 4px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #969696;
}
.title {
	height:88px;
	line-height:88px;
	font-size: 34px;
}
.imgsucc {
	position: absolute;
	top:268px;
	height: 118px;
	width: 118px;
	left: 316px;
	background: url("/assets/logo.png")
}
.wordsucc {
	font-size: 36px;
	position: absolute;
	top:438px;
	left: 231px;
	color: #649FE0;
}

</style>
