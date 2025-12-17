<template>
  <div class="h5-wrapper">
    <!-- 
      组件缓存keep-alive
      1.keep-alive是什么
      keep-alive是Vue的内置组件，当它包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
      keep-alive是一个抽象组件：它自身不会渲染成一个DOM元素，也不会出现在父组件链中。
      2. keep-alive的优点
      在组件切换过程中把切换出去的组件保留在内存中，防止重复渲染DOM，
      减少加载时间及性能消耗，提高用户体验性。
      3. keep-alive的三个属性
      ①include：组件名数组，只有匹配的组件会被缓存
      ②exclude：组件名数组，任何匹配的组件都不会被缓存
      ③ max：最多可以缓存多少组件实例
      4.keep-alive的使用会触发两个生命周期函数（了解）
      activated当组件被激活（使用）的时候触发→进入页面触发
      deactivated当组件不被使用的时候触发离开页面触发
    -->
    <!-- 
        1.项目案例实现的基本步骤分哪两大步？
        ①配路由②实现页面功能
        2.嵌套路由的关键配置项是什么？
        children
        3.路由传参两种方式?
        ①查询参数传参，$route.query.参数名（适合多个参数)
        ②动态路由传参，$route.params.参数名（更简洁直观）
        4.缓存组件可以用哪个内置组件？
        keep-alive
        三个属性：  include  exclude  max
        两个钩子：  activated deactivated
      -->
    <keep-alive :include="keepArr">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "h5-wrapper",
  data() {
    return {
      // 缓存的组件名数组
      keepArr: ["LayoutPage"],
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
<style lang="less" scoped>
.h5-wrapper {
  .content {
    margin-bottom: 51px;
  }
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
      &.router-link-active {
        color: #fa0;
      }
    }
  }
}
</style>
