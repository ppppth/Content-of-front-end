# EJS
### EJS 全局配置
```javascript
    const express = require('express')
    const app = express()

    // 配置模板引擎
    app.set('view engine', 'ejs')
    // 配置模板位置
    app.set('views', './view')
```
- 输出转义的数据到模板上
```bash
    <%= code %>
```

- 输出非转义的数据到模板上
```bash
    <%- code %>
```