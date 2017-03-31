//main.js是入口文件
import Vue from 'vue'// 没有加路径，会默认去node_modules找
import App from './App.vue'// 如果没有加后缀会根据对应的名称匹配。
/*顾名思义，这句代码的意思就是引入我们写好的.vue文件。
（.vue文件是vue框架的单文件组件。）*/

// import ES6语法，export、const 均为ES6语法 // 以上代码相当于 var App = require('./App')


//以下对象功能 直接给绑定的节点渲染一个vue组件
new Vue({
  el: '#app',//挂载index.html文件的div id="app"的元素
  render: h => h(App)/*render相当于components  但是更灵活.
  render是一个函数 相当于渲染一个vue组件
h => h(App)是ES6的语法 相当于
render:function(h){
	return h(App);//App即App.vue文件中的组件名称name：app。此处改为h(App.vue)无效
	此处改为h(app)无效
}
  
  */
})
