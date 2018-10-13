import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import aaa from '@/component/aaa'
import aaa from '../components/aaa'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/name',
      name:'aaa',
      component:aaa
    }
  ]
})
