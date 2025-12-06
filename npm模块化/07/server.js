/**
 * 目标：使用 nodemon 全局软件包，检测文件变化，自动重启程序
 * 语法：
 *  1. 安装 nodemon 全局软件包，命令：npm i nodemon -g
 *  2. 使用 nodemon 来执行目标 js 文件
 * 体验：启动后，修改代码，保存后观察终端效果
 */
/*
Node.js 总结
常用命令：
执行js 文件 node xXxX
初始化 package.json  npm init -y
下载本地软件包 npm i 软件包名
下载全局软件包 npm i 软件包名 -g
删除软件包 npm uni 软件包名
*/
// 格式化日期
const dayjs = require("dayjs");
const nowDateStr = dayjs().format("YYYY-MM-DD");
console.log(nowDateStr);

// 求数组里最大值
const _ = require("lodash");
console.log(_.max([1, 10, 200, 3, 4, 55]));
console.log(_.min([1, 10, 200, 3, 4, 55]));
