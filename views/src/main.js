// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由文件
import Router from 'vue-router' // 解决路由报错问题
import axios from 'axios' // 引入axios
import util from './common/js/util' //扩展函数
import Vant from 'vant' // 引入vant
import Bus from './common/js/EventBus' //兄弟节点传值Bus
import GlobalComponent from './common/js/globalComponents' // 全局组件
import './common/js/rem.js' // 样式适配
import './icons' // svg
import 'vant/lib/index.css'
import './common/css/base.css'

// 解决路由报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.$axios = axios
Vue.prototype.$util = util
Vue.prototype.$bus = Bus
axios.defaults.baseURL = 'http://localhost:3000/'

Vue.use(Vant)
Vue.use(GlobalComponent)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
