import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import insertCommodity from '@/components/commodity/insertCommodity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: home,
      children: [
        {
          path: "/insertCommodity",
          name: 'insertCommodity',
          component: insertCommodity
        }
      ]
    },
  ]
})
