import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'
import writeNotes from '@/components/writeNotes' // 写笔记
import publishSuc from '@/components/publishSuc' // 笔记发表成功
import personalCenter from '@/components/personalCenter' // 笔记发表成功
import rankingList from '@/components/rankingList' // 排行榜
import setTime from '@/components/setTime'


Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/writeNotes',
      name: 'writeNotes',
      component: writeNotes
    },
    {
      path: '/publishSuc',
      name: 'publishSuc',
      component: publishSuc
    },
     {
      path: '/personalCenter',
      name: 'personalCenter',
      component: personalCenter
    },
    {
      path: '/rankingList',
      name: 'rankingList',
      component: rankingList
    },
     {
      path: '/setTime',
      name: 'setTime',
      component: setTime
    },
  ]
})
