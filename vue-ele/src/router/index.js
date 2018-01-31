import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Find from '@/components/Find'
import Order from '@/components/Order'
import Mine from '@/components/Mine'


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
    }
  ]
})
