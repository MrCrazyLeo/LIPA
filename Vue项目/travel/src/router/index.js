import Vue from 'vue'
import Router from 'vue-router'
// 使用异步组件
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
    // 使用异步组件
    // component: () => '@/pages/home/Home'
  }, {
    path: '/city',
    name: 'City',
    component: City
    // 使用异步组件
    // component: () => '@/pages/city/City'
  }, {
    // 动态路由
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
    // 使用异步组件
    // component: () => '@/pages/detail/Detail'
  }],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
