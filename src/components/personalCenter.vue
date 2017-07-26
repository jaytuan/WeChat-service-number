<template>
  <div class="personalCenter">
    <div class="personalHeader">
    </div>
    <div class="readSome">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'personalCenter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
.personalCenter {
  position: relative;
  background-color: #F2F2F2;
}
.personalHeader {
	height: 289px;
	width: 100%;
	background:  linear-gradient(to right,#8CC2FD,#5190D5)
}
.readSome {
  position: absolute;
  top:245px;
  left: 16px;
  right: 16px;
  height: 88px;
  width: 718px;
  border: 0 solid #cdcdcd;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 8px 8px #e2dfdf;
}
</style>
