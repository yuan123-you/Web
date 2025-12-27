import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index.js'

/**
 * 代码规范错误
目标：学会解决代码规范错误
两种解决方案：
①手动修正
根据错误提示来一项一项手动修改纠正。
如果你不认识命令行中的语法报错是什么意思，根据错误代码去[ESLint规则表]中查找其具体含义。
②自动修正
基于vscode插件ESLint高亮错误，并通过配置自动帮助我们修复错误。
 */
/**
 * vuex概述
目标：明确vuex是什么，应用场景，优势
1.是什么：
vuex是一个vue的状态管理工具，状态就是数据。
大白话：vuex是一个插件，可以帮我们管理vue通用的数据（多组件共享的数据）
2. 场景：
①某个状态在很多个组件来使用（个人信息）
②多个组件共同维护一份数据（购物车）
3. 优势：
①共同维护一份数据，数据集中化管理
②响应式变化
③操作简洁（vuex提供了一些辅助函数）
 */
Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
  store
}).$mount('#app')
