<template>
  <div class="wirteNotes">
    <div class="header">
	    <router-link to='/' class="close"></router-link>
	    <div class="title">写笔记</div>
	    <div class="publish" @click="publish">发表</div>
    </div>
    <input type="text" class="notesTitle" placeholder="标题" v-model="notestitle">
    <textarea name="" id="content" cols="30" rows="10" placeholder="输入内容" v-model="content"></textarea>
    <div :class="[{pophide: status},{showbg: !status}]" @click="close">
    	<div class="popshow">
	     标题或内容不能为空！
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
      notestitle:"",
      content:"",
      status: true
    }
  },
  methods:{
  	publish:function() {
  		var data = {
		    "busiInfo": {
		        "userId": sessionStorage.getItem('openid'),
		        "noteTitle": this.notestitle,
		        "noteContent": this.content
		    },
		    "pubInfo": {
		        "channelId": "wx",
		        "opId": sessionStorage.getItem('openid')
		    }
		};
		if(this.notestitle == "" || this.noteContent == ""){
			var that = this;
			this.status = false;
			setTimeout(function(){that.status = true},1000);
		}
		else {
			var request = new XMLHttpRequest();
		    request.open('POST', 'http://read.baizitech.cn/read/saveNote.bz', true);

		    request.onload = function() {
		     // console.log(JSON.parse(this.responseText));
		        if (this.status >= 200 && this.status < 400) {
		          console.log(JSON.parse(this.responseText));
		        }
		    };

		    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	    	request.send("inParam="+JSON.stringify(data));
	    	this.$router.push({path:'/publishSuc'});
		}
  		
  		
  	},
  	close:function(){
  		this.status = true;
  	}
  }
}
</script>
<style scoped>
.wirteNotes {
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
.publish {
	position: absolute;
	right: 30px;
	height: 88px;
	line-height: 88px;
	top:0;
	font-family: STHeitiSC-Light;
	font-size: 34px;
	color: #999;
}
.notesTitle {
	position: absolute;
	top:112px;
	left: 16px;
	z-index: 20;
	background: #FFFFFF;
	border-radius: 10px;
	height: 88px;
	width: 688px;
	border:0;
	outline: 0;
	box-shadow: 0 5px 5px #cecbcb;
	-webkit-box-shadow: 0 5px 5px #cecbcb;
	font-size: 34px;
    -webkit-appearance: none;
    padding-left: 30px;
    -webkit-tap-highlight-color:rgba(255,255,255,0);
}
.notesTitle::-webkit-input-placeholder {
	font-family: STHeitiSC-Light;
	font-size: 34px;
	color: #B3B3B3;
}
#content {
	font-family: STHeitiSC-Light;
	width: 660px;
	height:370px;
	margin-top: 89px;
	border:0;
	outline: 0;
	border-radius: 10px;
	background-color: #fff;
	font-size: 30px;
	padding-top: 51px;
	padding-left: 30px;
	-webkit-tap-highlight-color:rgba(255,255,255,0);
}
textarea::-webkit-input-placeholder {
	font-size: 30px;
	color: #B3B3B3;
	
}
.showbg {
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(244,244,244,0.72);
	z-index: 100;
}
.pophide {
	display: none;
}
.popshow {
	display: block;
	position: absolute;
	top: 400px;
	left: 114px;
	font-size: 40px;
	background-color: #fff;
	border:1px solid #807575;
	border-radius: 8px;
	padding: 60px;
	height: 40px;
	line-height: 40px;

}
</style>
