import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
