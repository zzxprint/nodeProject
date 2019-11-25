// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App'
import router from './router'
import axios from 'axios' // 引入axios
import './icons' // svg
import 'element-ui/lib/theme-chalk/index.css';
import './common/css/base.css'

Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'http://localhost:3000/'

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
