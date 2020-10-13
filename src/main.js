import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponent from './utils/globalComponent'
import { Timeline } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Timeline)
Vue.config.productionTip = false
Vue.use(globalComponent)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
