# Axios
### HTTP 四种请求方式
### HTTP 三种参数:query/params/body
2. POST请求
---
- 不携带参数
```javascript
    //简写
    axios.post('url address').then(
        response =>{
            console.log(response.data)
        },
        error=>{
            console.log(error)
        }
    )
    //完整
    axios({
        method:'POST',
        url:'url address'
    }).then(
        response =>{
            console.log(response.data)
        },
        error=>{
            console.log(error)
        }
    )
```
- 携带参数---query
```javascript
    //简写      注意,这里的简写形式必须要用空对象给请求体占位
    axios.post('url address',{},{params:{key:value}}).then(
        response =>{
            console.log(response.data)
        },
        error=>{
            console.log(error)
        }
    )
    //完整
    axios({
        method:'POST',
        url:'url address',
        params:{
            key:value
        }
    }).then(
        response =>{
            console.log(response.data)
        },
        error=>{
            console.log(error)
        }
    )
```
- 携带参数---params
```javascript
    const express = require('express')
    const app = express()
    const cors = require('cors')
    //允许跨域
    app.use(cors())     // 允许所有的跨域请求
    //利用/:a的形式占位
    app.post('/path/:a/:b',(req,res)=>{
        //可以用req.params接收到请求方传递过来的params参数
        req.params
        res.send('返回的数据')
    })
    app.listen(port,(err)=>{
        throw err
    })
    
    //请求方
    //简写
    axios.post('url address/value1/value2').then(
        response =>{
            console.log(response.data)
        },
        error =>{
            console.log(error)
        }
    )
    //完整
    axios({
        method:'POST',
        url:'url address/value1/value2'
    }).then(
        response =>{
            console.log(response.data)
        },
        error =>{
            console.log(error)
        }
    )
```
- 携带参数---body
```javascript
    const express = require('express')
    const app = express()
    const cors = require('cors')
    //允许跨域
    app.use(cors())     // 允许所有的跨域请求
    //发送请求体配置      必须要有
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())

    app.post('/path',(req,res)=>{
        const requestBody = req.body;
            // 可以在这里处理请求体的数据
            // 例如，将处理后的数据返回给客户端
        res.send('返回的数据: ' + JSON.stringify(requestBody))
    })
    app.listen(port,(err)=>{
        throw err
    })

    //请求方
    //完整
    axios({
        method:'POST',
        url:'url address',
        data:{
            key:value   //注:如果body参数以对象形式发送,会被转成json编码格式
        },
        data:'key1=value1&key2=value2&key3=value3'  //注:如果body参数以字符串形式发送,会被转成urlencoded编码格式
    }).then(
        response =>{
            console.log(response.data)
        },
        error =>{
            console.log(error)
        }
    )