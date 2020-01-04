// 原本查找:　"main": "dist/vue.runtime.common.js",
// 现在查找: vue/dist/vue.esm.js', 
import Vue from 'vue' 
import App from './App.vue'
import './app.css'

Vue.config.productionTip = false

new Vue({
  el: '#root',
  render: h => h(App)
})
