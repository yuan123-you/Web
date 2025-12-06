//
// 目标1：体验webpack打包过程
// 1.1准备项目和源代码
// 命名导入
import { checkPhone, checkCode } from "../utils/check.js";
console.log(checkPhone("18888888888"));
console.log(checkCode("123456"));
// 1.2准备webpack打包的环境
//     "build":"webpack"
//1.3运行自定义命令打包观察效果（npm run 自定义命令）
// npm run build

/*
目标2：修改webpack打包入口和出口
2.1项目根目录，新建webpack.config·js配置文件
2.2导出配置对象，配置入口，出口文件路径
2.3重新打包观察
*/

/*
目标3：用户登录-长度判断案例
3.1 准备用户登录页面i
3.2编写核心JS逻辑代码
3.3打包并手动复制网页到dist下，引入打包后的js，运行
*/
// 3.2编写核心JS逻辑代码
// document.querySelector(".btn").addEventListener("click", () => {
// const phone = document.querySelector(".login-form [name=mobile]").value;
// const code = document.querySelector(".login-form [name=code]").value;
// if (!checkPhone(phone)) {
// console.log("手机号必须是11位！");
// return;
// }
// if (!checkCode(code)) {
// console.log("验证码必须是6位！");
// return;
// }
// console.log("提交到服务器登录");
// });

/*
目标4：使用html-webpack-plugin插件生成html网页文件，并引入打包后的其他资源
4.1下载html-webpack-plugin本地软件包
4.2配置webpack.config.js让Webpack拥有插件功能
4.3重新打包观察效果
*/

/**
 * 目标5：打包css 代码
5.1准备css代码，并引入到js中
5.2下载css-loader和style-loader本地软件包
5.3配置webpack.config.js让Webpack拥有该加载器功能
5.4打包后观察效果
 */
// 5.1准备css代码，并引入到js中
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
/**
目标6：优化-提取css代码到单独的css文件中
6.1下载mini-css-extract-plugin本地软件包
6.2配置webpack.config.js让Webpack拥有该插件功能
6.3打包后观察效果
 */

/**
 * 目标7:优化-压缩css代码
7.1 下载
css-minimizer-webpack-plugin
本地软件包
7.2配置webpack.config.js让Webpack拥有该插件功能
7.3打包后观察效果
 */

/**
 * 目标8：打包less代码
8.1新建less代码（设置背景图）并引入到src/login/index.js中
8.2下载less和less-loader本地软件包
8.3配置webpack.config.js让Webpack拥有功能
8.4打包后观察效果
 */
// 8.1新建less代码（设置背景图）并引入到src/login/index.js中
import "./index.less";
/**
 * 目标9：打包资源模块（图片处理）
9.1创建img标签并动态添加到页面，配置webpack.config.js
9.2打包后观察效果和区别
 */
// 注意：js中引入本地图片资源要用import方式（如果是网络图片http地址，字符串可以直接写）
import imgObj from "./assets/logo.png";
const theImg = document.createElement("img");
theImg.src = imgObj;
document.querySelector(".login-wrap").appendChild(theImg);
/**
 * 目标10：完成登录功能
10.1使用npm下载axios（体验npm作用在前端项目中）
10.2准备并修改utils工具包源代码导出实现函数
10.3导入并编写逻辑代码，打包后运行观察效果
 */
// 10.3导入并编写逻辑代码，打包后运行观察效果
import myAxios from "../utils/request";
import { myAlert } from "../utils/alert.js";
import { fastFormats } from "ajv-formats/dist/formats.js";
document.querySelector(".btn").addEventListener("click", () => {
  const phone = document.querySelector(".login-form [name=mobile]").value;
  const code = document.querySelector(".login-form [name=code]").value;
  if (!checkPhone(phone)) {
    myAlert(false, "手机号必须是11位！");
    console.log("手机号必须是11位！");
    return;
  }
  if (!checkCode(code)) {
    myAlert(false, "验证码必须是6位！");
    console.log("验证码必须是6位！");
    return;
  }
  console.log("提交到服务器登录");
  myAxios({
    url: "/v1_0/authorizations",
    method: "POST",
    data: {
      mobile: phone,
      code: code,
    },
  })
    .then(() => {
      myAlert(true, "登陆成功");
    })
    .catch((error) => {
      myAlert(false, error.response.data.message);
    });
});
/**
 * 目标11：配置开发服务器环境webpack-dev-server
11.1下载webpack-dev-server软件包到当前项目
11.2设置打包的模式为开发模式，配置自定义命令
11.3使用npmrundev来启动开发服务器，试试热更新效果
 */
//注意1:webpack-dev-server借助http模块创建8080
// 默认 Web 服务
//注意2：默认以public文件夹作为服务器根目录
//注意3：webpack-dev-server根据配置，打包相关代码在内
// 存当中，以output.path的值作为服务器根目录（所以可以直
// 接自己拼接访问dist目录下内容）
console.log("观察页面是否有自动打包更新1111");
/**
 * 目标12；打包模式设置
development：调试代码，实时加载，模块热替换（快）|
production：压缩代码，资源优化，更轻量等（小）
设置方式：
(1）：mode选项设置
（2）：--mode=命令行设置（优先级高）
 */
/**
 * 目标13：webpack环境下区分两种模式
开发模式：style-loader内嵌css代码在js中，让热替换更快
生产模式：提取css代码，让浏览器缓存和并行下载js和css文件
13.1下载cross-env软件包到当前项目中
13.2配置自定义命令，传入参数名和值到process.env对象上（它是Node.js环境变量）
13.3在webpack.config.js调用使用做判断区分
13.4重新打包观察两种模式区别
 */

/**
 * 目标14：前端-注入环境变量
需求：前端项目代码中，开发模式下打印语句生效，
生产模司下打印语句失效
 */
if (process.env.NODE_ENV === "production") {
  console.log = function () {};
}
console.log("开发模式下好用，生产模式下失效");
/**
 * 目标15:source-map调试代码
问题：error和warning代码的位置和源代码对不上，不方便我们调试！
解决：启动webpack的source-map资源地图功能
15.1在webpack.config.js配置devtool选项和值开启功能（注意：只在开发环境下使用）
15.2代码中造成错误，并在开发服务器环境下查看效果
 */
// consolee.log("111");
/**
 * 目标16：路径解析别名设置
作用：让我们前端代码引入路径更简单（而且使用绝度路径）
16.1在webpack.config.js中配置resolve.alias选项
16.2在代码中尝试并在开发环境和生产环境测试效果
 */
import youAxios from "@/utils/request.js";
console.log(youAxios);
/**
 * 目标17：第三方库使用CDN加载引入
17.1在htm1中引入第三方库的CDN地址并用模板语法判断
17.2配置webpack.config.js中externals外部扩展选项(防止某些import的包被打包）
17.3两种模式下打包观察效果
 */
