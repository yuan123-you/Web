<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ $store.state.count }}</label>
    <br>
    <button @click="handlerAdd(1)">值 + 1</button>
    <button @click="handlerAdd(5)">值 + 5</button>
    <button @click="handlerAdd(10)">值 + 10</button>
    <button @click="changeTitle">改标题</button>
    <button @click="handleChange">1秒后变成666</button>
    <hr>
    <div>{{ $store.state.list }}</div>
    <div>{{ $store.getters.filterList }}</div>
    <!-- 测试访问模块的store属性 -->
    <hr>
    <div>{{ $store.state.user.userInfo.name }}</div>
    <div>{{ $store.state.setting.theme }}</div>
    <div>{{ $store.state.setting.fontSize }}</div>
  </div>
</template>

<script>
export default {
  name: 'Son1Com',
  methods: {
    handlerAdd (n) {
    /**
     * 错误代码（vue默认不会监测，监测需要成本）
        this.$store.state.count++
        console.log(this.$store.state.count)
        应该通过mutation核心概念，进行修改数据
        需要提交调用mutation
     */
      // 2.组件中提交调用mutations
      // this.$store.commit('addCount')
      // 调用带参数的mutation函数
      this.$store.commit('addCount', n)
    },
    changeTitle () {
      this.$store.commit('changeTitle', '我是新标题')
    },
    handleChange () {
      // 调用action
      // this.$store.dispatch('action名字'，额外参数）
      this.$store.dispatch('changeAsyncCount', 666)
    }
  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
