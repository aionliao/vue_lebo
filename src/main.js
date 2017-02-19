// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './static/img/icon/icon-cai/jczq.png',
  loading: './static/img/lazy-icon.jpg',
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
