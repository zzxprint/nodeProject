import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: home,
      children: [
        {
          path: "/home/test",
          name: "test",
          component: test,
        }
      ]
    },
  ]
})
