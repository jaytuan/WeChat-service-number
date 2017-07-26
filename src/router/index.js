import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import writeNotes from '@/components/writeNotes' // 写笔记

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
    }
  ]
})
