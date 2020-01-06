import '@babel/polyfill'
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

new Vue({
  el: '#root',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$eventBus = this;
  }
})
