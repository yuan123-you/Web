// 这里面存放的就是vuex相关的核心代码
// npm run lint -- --fix 这会自动修复所有可以自动修复的ESLint错误。
import Vue from 'vue'
import Vuex from 'vuex'
import setting from './modules/setting.js'
import user from './modules/user.js'
// 插件安装
Vue.use(Vuex)

// 创建仓库（空仓库）
const store = new Vuex.Store({
  // 1.通过state可以提供数据 (所有组件共享的数据)
  state: {
    title: '大标题',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  // 2.通过mutations可以提供修改数据的方法
  // 说明：mutations必须是同步的（便于监测数据变化，记录调试）
  mutations: {
    // 所有mutation函数，第一个参数，都是state
    // 注意点：mutation参数有且只能有一个，如果需要多个参数，包装成一个对象
    addCount (state, n) {
      // 修改数据
      state.count += n
    },
    subCount (state, n) {
      state.count -= n
    },
    changeCount (state, newCount) {
      state.count = newCount || 0
    },
    changeTitle (state, newTitle) {
      state.title = newTitle || '新大标题'
    }
  },
  // 3.通过actions可以提供异步修改数据的方法
  // 说明：不能直接操作state，操作state，还是需要commit mutation，actions中可以书写异步代码，异步操作完成之后，调用mutations中的方法，去修改数据
  actions: {
    // 所有action函数，第一个参数，都是context（上下文对象）
    // 说明：context对象中包含了state、commit等属性
    changeAsyncCount (context, num) {
      // 这里是setTimeout模拟异步操作,以后大部分场景都是发请求
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },
  // 4.核心概念-getters
  // 说明：除了state之外，有时我们还需要从state中派生出一些状态，这些状态是依赖state的，此时会用到getters
  // 例如：state中定义了list，为1-10的数组，组件中，需要显示所有大于5的数据
  // state:{
  // list:[1,2,3,4，5,6,7,8,9,10]
  // }
  // 1. 定义 getters
  // getters:{
  //   filterList (state){
  //   return state.list.filter(item => item > 5)
  //   }
  // }
  // 注意：
  // （1）getters函数的第一个参数是state
  // （2）getters函数必须要有返回值
  getters: {
    filterList (state) {
      return state.list.filter((item) => item > 5)
    }
  },
  // 5.modules模块
  // 5.modules模块
  /**
   * 核心概念-模块module（进阶语法）
  目标：掌握模块中state的访问语法
  尽管已经分模块了，但其实子模块的状态，还是会挂到根级别的state中，属性名就是模块名
  使用模块中的数据：
  ①直接通过模块名访问$store.state.模块名.xxx
  ②通过mapState 映射
  默认根级别的映射mapState(['xxx'])
  子模块的映射mapState（'模块名’，[‘xxx’]
  -需要开启命名空间
   */
  modules: {
    user,
    setting
  }
})
// 导出给main.js使用
export default store
