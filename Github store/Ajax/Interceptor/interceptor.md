# Interceptor
### 创建一个自定义的请求模式
```JavaScript
    import axios from 'axios'

    const Axios = axios.create({
        baseUTL:'xxxx'  //配置基础路径
        time:5000       //请求延时,超时就报错
    })
```
1. 请求拦截器
```JavaScript
    //如果需要转换格式
    import qs from 'queryString'

    Axios.interceptor.request.use((config)=>{
        //config是请求时包含所携带的参数一个配置对象
        const {method,data} = config
        if(method.toLowerCase() === 'post'){
            //请求体有两种传参格式:urlencoded、json
            //如果服务器不接收json格式的请求体,要用qs.stringify({params})转成urlencoded格式
            if(data instanceof Object) return config.data = qs.stringify(data)
        }
        return config
    })
```
2. 响应拦截器
```JavaScript
    //提示框
    import {message} from 'antd'

    Axios.interceptor.response.use((response)=>{
        return response.data    //将响应的数据返回,当调用请求接口的时候,返回的值就是data
    },(error)=>{
        message.error(error.message,2)  //提示用户,延时2s
        return new Promise(()=>{})      //用promise实例对象来中断promise链,外层的promise的状态就会变为pending从而不继续走.then和.catch
    })
```