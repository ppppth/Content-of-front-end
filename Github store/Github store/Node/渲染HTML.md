# Node
### render HTML pages
```javascript
    const express = require('express')
    const app = express()
    //一般都是从数据库请求数据,不把数据写到服务器中
    const static =[
        {id:1},
        {id:2},
        {id:3}
    ]

    app.get('/route/:id.html',(req,res)=>{
        const {id} = req.params
        cosnt result = static.find((item)=>{
            return item.id === id 
        })||{}
        //最好就用绝对路径
        if(result.id) res.render(__dirname +'/view/index.ejs',{result})  //render有两个参数,一个是ejs文件路径,一个是想要渲染的数据对象
    })
    //配置一个空路由重定向
    app.get('*',(req,res)=>{
        res.redirect('./index.html')
    })
    app.listen(PORT,err=> {throw err})
```