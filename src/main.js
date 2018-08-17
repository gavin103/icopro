// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入socket.io
import VueSocketio from 'vue-socket.io';

//引用elment-ui
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import 'element-theme-chalk/lib/index.css'
Vue.use(ElementUI);

Vue.use(VueSocketio, 'http://localhost:8888');
//引入store
import store from './store'

//在应用启动时，可以通过设置 Vue.config.productionTip = false 来关闭生产模式下给出的提示
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
