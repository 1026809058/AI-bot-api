const express = require("express");
// 创建用户模块
const router = express.Router();
// 导入用户路由处理函数模块
const userHandler = require("../router_handler/user");
// 注册新用户
router.post("/reguser", userHandler.regUser);

// 登录
router.post("/login", userHandler.login);
// 将路由对象共享出去
module.exports = router;
