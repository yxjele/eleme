import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Find from '@/components/Find'
import Order from '@/components/Order'
import Mine from '@/components/Mine'
import Forder from '@/components/Forder'
import List from '@/components/list/List'
import Details from '@/components/list/Details'


Vue.use(Router)

export default new Router({
  mode:"hash",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
<<<<<<< HEAD
      path: '/forder',
      name: 'Forder',
      component: Forder
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/details/:fid',
      name: 'Details',
>>>>>>> 3fd26947dc984c43d9d87376fe32f7dbebf8d46c
      component: Details
    }
  ]
})
