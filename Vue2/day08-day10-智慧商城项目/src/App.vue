<template>
  <div id="app">
    <div class="box"></div>
    <van-button type="primary">primary</van-button>
    <van-button type="info">info</van-button>
    <van-button type="default">default</van-button>
    <van-switch v-model="checked"></van-switch>
    <van-rate v-model="value" />
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true,
      value: 3
    }
  }
}
</script>

<style lang="less">
.box{
  width: 300px;
  height: 300px;
  background-color: pink;
}
</style>
