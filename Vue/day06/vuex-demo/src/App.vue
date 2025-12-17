<template>
  <div id="app">
    <h1>根组件-{{ title }}-{{ count }}</h1>
    <input type="text" :value="count" @input="handleInput">
    <Son1></Son1>
    <hr>
    <Son2></Son2>
  </div>
</template>
<!--
  核心概念-state状态
  目标：明确如何给仓库提供数据，如何使用仓库的数据
  2. 使用数据:
  通过store直接访问
  ②通过辅助函数（简化）
  mapState是辅助函数，帮助我们把store中的数据自动映射到组件的计算属性中
  import { mapState } from'vuex'
  导入 mapState
  数组方式 引入state
  展开运算符映射
  mapState(['count'])
-->
<script>
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  created () {
    // console.log(this.$router)
    console.log(this.$store)
  },
  computed: {
    ...mapState(['count', 'title'])
  },
  data: function () {
    return {

    }
  },
  methods: {
    handleInput (e) {
      // 1.实时获取输入框的值
      const num = +e.target.value
      // 2.提交mutation，调用mutation函数
      this.$store.commit('changeCount', num)
    }
  },
  components: {
    Son1,
    Son2
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
