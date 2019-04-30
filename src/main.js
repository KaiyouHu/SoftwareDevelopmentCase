import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Element
import ElementUI from 'element-ui'

// vx-easyui
import 'vx-easyui/dist/themes/default/easyui.css'
import 'vx-easyui/dist/themes/icon.css'
import 'vx-easyui/dist/themes/vue.css'
import EasyUI from 'vx-easyui'

// Element
Vue.use(ElementUI)

// vx-easyui
Vue.use(EasyUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
