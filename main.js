//main.js������ļ�
import Vue from 'vue'// û�м�·������Ĭ��ȥnode_modules��
import App from './App.vue'// ���û�мӺ�׺����ݶ�Ӧ������ƥ�䡣
/*����˼�壬���������˼������������д�õ�.vue�ļ���
��.vue�ļ���vue��ܵĵ��ļ��������*/

// import ES6�﷨��export��const ��ΪES6�﷨ // ���ϴ����൱�� var App = require('./App')


//���¶����� ֱ�Ӹ��󶨵Ľڵ���Ⱦһ��vue���
new Vue({
  el: '#app',//����index.html�ļ���div id="app"��Ԫ��
  render: h => h(App)/*render�൱��components  ���Ǹ����.
  render��һ������ �൱����Ⱦһ��vue���
h => h(App)��ES6���﷨ �൱��
render:function(h){
	return h(App);//App��App.vue�ļ��е��������name��app���˴���Ϊh(App.vue)��Ч
	�˴���Ϊh(app)��Ч
}
  
  */
})
