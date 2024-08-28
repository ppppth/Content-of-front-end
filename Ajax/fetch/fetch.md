# Fetch
- 原生的请求方法,不用下载第三方
### 完整
```javascript
    fetch('url',{
        method:'xxx',              //GET,POST,PUT,DELETE
        body:JSON.stringify(data), //解析请求体
        headers:{                  //配置请求头
            "Content-type":"application/json"
        },
        crendentials:'xxx',     /* "same-origin"同域请求才发送cookie
                                   "include"表示跨域请求中需要携带cookie */
        mode:'xxx'   /*  "same-origin"同源才可以进行访问
                         "cors"同源和带有cors响应头的跨域才可以请求成功   
                         "cors-with-forced-preflight"发出请求前, 将执行preflight检查 */              
    }).then((response)=>{
        return response.json()
    },(error)=>{
        //throw error  //这里不能用throw来拦截错误,会返回一个失败的promise对象给下一个.then
        return new Promise(()=>{}) //用这种返回一个新的promise对象来中断.then链
    }).then((response)=>{
        let result = response
        console.log(result)
    },(error)=>{
        throw error
    })
    /* 需要目标服务器可以接受接受跨域发送cookies请求，否则会被浏览器的同源策略阻挡 ,服务器设置Access-Control-Allow-Credentials响应头为"true"*/
```
### 简写
```javascript
    //这里GET请求才可以简写
    fetch('url').then((response)=>{
        //这里返回的response仅仅是成功请求到服务器,并不能像axios一样把数据返回过来
         
        /* fetch发送请求返回的response对象里没有数据,利用response.json()获取到一个promise对象且状态为pending,接着用promise的resolve状态去接收数据 */

        return response.json()  //将这个promise对象返回作为外层.then的返回值,并触发promise链式调用
    }).then((response)=>{
        //这里的.then才可以接收到promise成功状态下所返回的数据
        let result = response
        console.log(result)
    }).catch((error)=>{
        //利用promise的异常穿透就直接可以获取到任意.then的失败原因
        throw error
    })
```
---
### 修改
```javascript
    async function(){
        try{
        //注意: await 只能等到成功的promise
        const response = await fetch('url')
        const result = await response.json()
        }catch(err){
            thorw new Error(err)
        }
    }
```