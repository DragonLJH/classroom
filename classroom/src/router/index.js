import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import classroom from '@/components/classroom'
import VuexTest from '@/components/VuexTest'
import LoginRegister from '@/components/LoginRegister'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/classroom',
      name: 'classroom',
      component: classroom
    },{
      path: '/VuexTest',
      name: 'VuexTest',
      component: VuexTest
    },{
      path: '/',
      name: 'LoginRegister',
      component: LoginRegister
    }
  ]
})
