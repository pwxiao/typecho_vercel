﻿# typecho_demo_vercel

## 使用vercel部署typecho博客



修改config.inc.php文件中的这部分内容

```php
/** 定义数据库参数 */
$db = new Typecho_Db('Pdo_Mysql', 'typecho_');
$db->addServer(array (
  'host' => '数据库host',
  'user' => '数据库用户名',
  'password' => '数据库密码',
  'charset' => 'utf8mb4',
  'port' => '数据库端口',
  'database' => 'railway',
  'engine' => 'MyISAM',
), Typecho_Db::READ | Typecho_Db::WRITE);
Typecho_Db::set($db);
```

填充你自己的远程数据库：

详见[博客](https://www.pwxiao.top/blog/vercel_deploy_typecho.html)
