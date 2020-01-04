

/* new Vue({
  el: '#root',
  components: {
    App
  },
  template: '<App/>'
}) */

/* 
render: 没有问题
  原因: 内部使用vue-template-compliler提前编译好了模板
template: 有问题
  原因: 
      不使用vue-template-compliler, 就不能编译template
      vue默认引入的是不带编译器的打包版本vue.runtime.common.js
  解决: 让webpack打包引入带编译器的版本
      'vue$': 'vue/dist/vue.esm.js'
哪种好: render
    编码简洁
    打包文件小
*/