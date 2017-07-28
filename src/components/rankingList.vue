<template>
  <div class="rankingList">
  	<div class="header">
  	</div>
  	<div class="ranking">
  		<ul class="rankingUl">
  			<li v-for="item in lists">
  				{{item.name}}
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
  	  },
  	  {"id":1,
      "name":"wudi",
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
.ranking {
	margin: 20px 16px;
	background-color: #fff;
}
.rankingUl li {
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

</style>
