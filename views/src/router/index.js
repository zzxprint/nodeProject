import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import shop from '@/components/shop/shop'
import category from '@/components/category/category'
import cart from '@/components/cart/cart'
import mine from '@/components/mine/mine'
import order from '@/components/order/order'
import checkout from '@/components/order/checkout/checkout'
import orderDetail from '@/components/order/orderDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 不需要登录的页面
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
          path: '/mine',
          name: 'mine',
          component: mine
        }
      ]
    },
    // 需要登陆的页面
    {
      path: '/order',
      name: 'order',
      component: order,
      redirect: '/order/checkout',
      children: [
        {
          path: 'checkout',
          name: 'checkout',
          component: checkout
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
