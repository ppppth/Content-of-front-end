# proxy
---
### proxy基本配置

## 脚手架环境
```bash
npm install http-proxy-middleware --save
```
## React: 在 src 目录下创建一个 setupProxy.js 文件,配置代理
```javascript
    const { createProxyMiddleware } = require('http-proxy-middleware')
    //允许多个URL跨域
    module.exports = function(app) {
        app.use(
            '/api',
            createProxyMiddleware({
            target: 'http://localhost:xxxx',
            changeOrigin: true
            })
        )
        app.use(
            '/auth',
            createProxyMiddleware({
            target: 'http://localhost:xxxx',
            changeOrigin: true
            })
        )
        ...
    }
```
## Vue: 在vue.config.js文件里配置代理
```javascript
    module.exports = {
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://localhost:xxxx',
                    changeOrigin: true,
                    pathRewrite: { '^/api': '' }
                },
                '/auth': {
                    target: 'http://localhost:xxxx',
                    changeOrigin: true,
                    pathRewrite: { '^/auth': '' }
                }
            }
        }
    }
```
## 环境变量配置代理
- 在项目根目录下创建 .env.development 文件(开发环境)
```env
VUE_APP_API_BASE_URL=http://localhost:xxxx
```
- 在vue.config.js或者vite.config.js文件里配置
```javascript
    module.exports = {
        devServer: {
            proxy: {
                '/api': {
                    target: process.env.VUE_APP_API_BASE_URL,
                    changeOrigin: true,
                    pathRewrite: { '^/api': '' }
                }
            }
        }
    }
```