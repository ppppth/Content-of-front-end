# API
### 项目中通常将请求函数和接口放到api文件夹统一管理
```JavaScript
import axios from 'axios'


export const request =(params)=>{
    axios({
        method:'xxxx',
        url:`${URL}/path`,  //这里的url要是动态的,开发环境下的路径和生产环境下的路径不一样,所以不能固定url

        body?:{params}
    })
}
```
1. 但是往往请求登录的接口没有这么简单,要用到请求拦截器(interceptor)