import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../styles/index.less'

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
// 设置 axios的常态地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
