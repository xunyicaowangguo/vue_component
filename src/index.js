// 原本查找:　"main": "dist/vue.runtime.common.js",
// 现在查找: vue/dist/vue.esm.js', 
import Vue from 'vue' 
import App from './App.vue'
import './app.css'

Vue.config.productionTip = false

//给Vue的原型对象添加一个属性
// Vue.prototype.$vm = new Vue()

new Vue({
  el: '#root',
  render: h => h(App),
  beforeCreate () { // 在尽量早时间保存当前vm, 作为全局事件总线对象
    // Vue.prototype.$globalEventBus = this
    this.__proto__.$globalEventBus = this
  }
})
