//导入 http 模块
const http = require('http');

//创建服务对象
const server = http.createServer((request, response) => {
  response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
      table,td{
        border-collapse: collapse;//合并单元格
      }
      table tr:nth-child(odd){
        background: blue; 
      }
      table tr:nth-child(even){
        background: pink; 
      }
      table td{
        border:1px solid red;
      }
      td{
        padding:20px 40px;    
      }
      </style>
    </head>
    <body>
      <table>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
      </table>
    </body>
    <script>
      document.querySelectorAll("td").forEach((item,index)=>{
        item.addEventListener("click",function(){
        item.style.background = "red";
        });});
    </script>
    </html>
  `); //设置响应体
});

//监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
});
