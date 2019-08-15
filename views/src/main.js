// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'// 引入axios
import Vant from 'vant' //  引入vant
import GlobalComponent from './common/js/globalComponents' // 全局组件
import Util from './common/js/util'
import './common/js/rem.js'
import 'vant/lib/index.css'
import './common/css/base.css'
import Router from 'vue-router'

// 解决路由报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.$axios = axios
Vue.prototype.$util = Util;
axios.defaults.baseURL = 'http://localhost:3000'

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
