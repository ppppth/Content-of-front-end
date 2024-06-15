# Axios
### HTTP 四种请求方式
### HTTP 三种参数:query/params/body
1. GET请求(不可以携带body参数)
---
- 不携带参数
```javascript
    //简写
    axios.get('url address').then(
        response =>{
            console.log(response.data)
        },
        error=>{
            console.log(error)
        }
    )
    //完整
    axios({
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
    //简写
    axios.get('url address',{params:{key:value}}).then(
        response =>{
            console.log(response.data)
        },
        error=>{
            console.log(error)
        }
    )
    //完整
    axios({
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
    //node环境搭建的服务器
    const express = require('express')
    const app = express()
    const cors = require('cors')
    //允许跨域
    app.use(cors())     // 允许所有的跨域请求
    //利用/:a的形式占位
    app.get('/path/:a/:b',(req,res)=>{
        //可以用req.params接收到请求方传递过来的params参数
        req.params
        res.send('返回的数据')
    })
    app.listen(port,(err)=>{
        throw err
    })

    //请求方
    //简写
    axios.get('url address/value1/value2').then(
        response =>{
            console.log(response.data)
        },
        error=>{
            console.log(error)
        }
    )
    //完整
    axios({
        url:'url address/value1/value2'
    }).then(
        response =>{
            console.log(response.data)
        },
        error=>{
            console.log(error)
        }
    )
```