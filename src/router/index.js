import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import writeNotes from '@/components/writeNotes' // 写笔记
import publishSuc from '@/components/publishSuc' // 笔记发表成功
import personalCenter from '@/components/personalCenter' // 笔记发表成功


Vue.use(Router)

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

  ]
})
