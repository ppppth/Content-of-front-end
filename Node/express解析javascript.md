# express 应用
### 路由处理对 JavaScript 文件的请求并执行代码
```javascript
    const express = require('express')
    const path = require('path')
    const fs = require('fs')
    const app = express()
    const vm = require('vm')
    app.get('/script.js', (req, res) => {
        //在根目录的public文件夹下创建一个script.js文件
        const filePath = path.join(__dirname, '../public', 'script.js')
        fs.readFile(filePath, 'utf8', (err, data) => {
            console.log(`Trying to read file from path: ${filePath}`)
            if (err) {
                console.error(`Error reading file: ${err.message}`)
                res.status(500).send('File not found')
                return
            }

            try {
                // 使用 vm 模块执行 JavaScript 代码
                const script = new vm.Script(data)
                const context = vm.createContext({ console: { log: console.log } })
                const result = script.runInContext(context)

                res.type('application/json')
                res.send({ result })
            } catch (err) {
                console.error(`Error executing script: ${err.message}`)
                res.status(500).send('Error executing script')
            }
        })
    })
    app.listen(8088, () => {
        console.log('running')
    })
```