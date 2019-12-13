import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import insertCommodity from '@/components/commodity/insert/insertCommodity'
import manageCommodity from '@/components/commodity/manageCommodity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: home,
      redirect: '/insertCommodity',
      children: [
        {
          path: "insertCommodity",
          name: 'insertCommodity',
          component: insertCommodity
        },
        {
          path: "manageCommodity",
          name: 'manageCommodity',
          component: manageCommodity
        }
      ]
    },
  ]
})
