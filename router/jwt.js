const express = require("express");
const router = express.Router();
// 导入用户路由处理函数模块
const userHandler = require("../router_handler/jwt");
router.get("/regJwt", userHandler.regJwt);
// 将路由对象共享出去
module.exports = router;
