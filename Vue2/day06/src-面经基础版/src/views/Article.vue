<template>
  <div class="article-page">
    <div class="article-item">
      <div class="head">
        <img
          src="http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png"
          alt=""
        />
        <div class="con">
          <p class="title">百度前端面经</p>
          <p class="other">青春, 那么骚 | 2022-01-20</p>
        </div>
      </div>
      <div class="body">
        虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（
        let 和 var
        的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数
      </div>
      <div class="foot">点赞 44 | 浏览 315</div>
    </div>
  </div>
</template>

<script>
// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get
// 首页请求渲染
// 1. 安装axios
// 2. 看接口文档，确认请求方式，请求地址，请求参数
// 请求地址：https://mock.boxuegu.com/mock/3083/articles
// 请求方式:get
// 3. created中发请求，获取数据，存起来
// 4. 页面动态渲染

// 跳转详情页传参
// 1.查询参数传参（更适合多个参数）
// ？参数=参数值
// =>this.$route.query.参数名
// 2.动态路由传参（单个参数更优雅方便）
// 改造路由=>/路径/参数=>this.$route.params.参数名
// (1）访问/重定向到article
// (redirect)
// (2）返回上一页$router.back()
export default {
  name: "ArticlePage",
  data() {
    return {};
  },
  async created() {
    const res = await axios.get("https://mock.boxuegu.com/mock/3083/articles");
    this.articles = res.data.result.rows;
    console.log(this.articles);
  },
};
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}
.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
