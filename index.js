const express = require('express')
// 导入cors中间件
const cors = require("cors");
// 导入用户路由模块
const userRouter = require("./router/user");
const app = express()
const port = 3000
// 将cors注册为全局中间件
app.use(cors()); //不传参默认允许简单跨域和预检跨域

// 配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 注册用户模块用户路由模块
app.use("/api", userRouter); //每次访问用户模块的接口都要添加/api前缀

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})