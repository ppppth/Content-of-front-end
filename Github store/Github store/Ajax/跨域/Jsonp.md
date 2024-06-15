# JSONP
### JSONP 是利用了 <script> 标签的可跨域能力
- 请求方
```javascript
// 对应的回调函数（后期由服务端返回调用代码）
  function handleResponse(data){
    console.log(data)
    const temp = document.getElementById('temp')
    document.body.removeChild(temp)
  }

  function getData(){
    // 创建一个script标签
    let script = document.createElement('script')
    // 设置好script标签的src属性（注意服务器需要支持JSONP）
    script.src = 'http://localhost:8099/test-get?callback=handleResponse'
    // 给script标签追加id
    script.id = 'tmp'
    // 将script标签添加到文档中
    document.body.appendChild(script)
  }
```
- 服务器
```javascript
app.get('/test-get',(request,response)=>{
  // 获取前端对应回到函数的名称
  const {callback} = request.query
  // 要返回的数据
  const data = {key:value}
  // 拼接响应为函数调用字符串
  response.send(`${callback}(${JSON.stringify(data)})`)
})
```