// 导入mysql模块
const mysql = require("mysql");

// 创建数据库连接对象
const db = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "admin",
  password: "admin123",
  database: "my_db_01",
});

// 向外共享出db数据库连接对象
module.exports = db;
