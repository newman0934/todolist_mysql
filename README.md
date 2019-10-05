# todo list
todo list with database

## Features
- 列出所有的todo
- 修改todo
- 新增todo
- 刪除todo
- 使用者登入、登出、註冊
- Facebook登入

## Quick view

![login page](https://raw.githubusercontent.com/newman0934/todolist_mysql/master/public/img/login.png)
![register page](https://raw.githubusercontent.com/newman0934/todolist_mysql/master/public/img/register.png)
## Environment set up
```js
"bcryptjs": "^2.4.3",
"body-parser": "^1.19.0",
"connect-flash": "^0.1.1",
"dotenv": "^8.1.0",
"express": "^4.17.1",
"express-handlebars": "^3.1.0",
"express-session": "^1.16.2",
"method-override": "^3.0.0",
"mysql2": "^1.7.0",
"passport": "^0.4.0",
"passport-facebook": "^3.0.0",
"passport-local": "^1.0.0",
"sequelize": "^5.19.2",
"sequelize-cli": "^5.5.1"
```
### Installation
- Download ZIP
- 解壓縮ZIP檔案
- 下載nvm並安裝
- 打開cmd
- cd到檔案位址
- 在cmd輸入nvm install 10.15.0
- 在cmd輸入nvm use 10.15.0
- 安裝mysql
- 安裝sequelize
- 在workbench建立一個todo_mysql資料庫
- 在cmd上下npx sequelize db:migrate指令
- 在根目錄新增一個.env檔案並把以下code輸入到裡面
```js
FACEBOOK_ID=你的facebook_id
FACEBOOK_SECRET=你的facebook密鑰
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
```
- 輸入node app.js
- 在瀏覽器上進入http://localhost:3000

