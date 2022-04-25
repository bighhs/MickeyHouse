import Vue from 'vue'
import App from './App.vue'
// markdown渲染库和样式库
import Showdown from 'showdown'
import 'github-markdown-css'
// ui库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './css/reset.css'
// 功能组件
import service from './service/index'
import store from './store/index'
import router from './route/index'

Vue.prototype.Showdown = new Showdown.Converter();
Vue.prototype.service = service;

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
