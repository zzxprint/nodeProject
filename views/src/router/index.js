import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import shop from '@/components/shop/shop'
import category from '@/components/category/category'
import cart from '@/components/cart/cart'
import order from '@/components/order/order'
import orderDetail from '@/components/order/orderDetail'
import mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/',
          name: 'shop',
          component: shop
        },
        {
          path: '/category',
          name: 'category',
          component: category
        },
        {
          path: '/cart',
          name: 'cart',
          component: cart
        },
        {
          path: '/order',
          name: 'order',
          component: order
        },
        {
          path: '/mine',
          name: 'mine',
          component: mine
        }
      ]
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: orderDetail
    },
  ]
})
