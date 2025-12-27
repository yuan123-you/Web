<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{ count }}</label>
    <br />
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="subCount(10)">值 - 10</button>
    <button @click="changeTitle('前端程序员')">改标题</button>
    <button @click="changeAsyncCount(888)">1秒后变成888</button>
    <hr>
    <div>{{ filterList }}</div>
    <!-- 测试访问模块的store属性 -->
    <hr>
    <div>{{ user.userInfo.name }}</div>
    <div>{{ setting.theme }}</div>
    <div>{{ setting.fontSize }}</div>
    <div>user模块的数据{{ userInfo }}</div>
    <div>setting模块的数据{{ theme }}-{{ fontSize }}</div>
  </div>
</template>
<script>
// mapMutations和mapState很像，它是把位于mutations中的方法提取了出来，映射到组件methods中
// 目标：掌握辅助函数mapActions，映射方法
// mapActions是把位于actions中的方法提取了出来，映射到组件methods中
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Son2Com',
  computed: {
    // mapState和mapGetters都是映射属性
    ...mapState(['count', 'user', 'setting']),
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'fontSize']),
    ...mapGetters(['filterList'])
  },
  methods: {
    // subCount (n) {
    //   this.$store.commit('subCount', n)
    // }
    // mapMutations和mapActions都是映射方法
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapActions(['changeAsyncCount'])
  }

}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
