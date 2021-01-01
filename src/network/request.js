import axios from 'axios'

export function request(config) {

  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })

  // 2. 配置请求和响应拦截
  instance.interceptors.request.use(config => {
    // 当发送网络请求时, 在页面中添加一个loading组件, 作为动画

    // 某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

    // 对请求的参数进行序列化(看服务器是否需要序列化)
    return config 
  }, err => {

  })
  instance.interceptors.response.use(response => {
    // 本次项目返回的json嵌套过深 {data:{data:...}}, 此处作了下处理
    return response.data 
  }, err => {
			console.log('来到了response拦截failure中')
      console.log(err)
      if (err && err.response) {
				switch (err.response.status) {
					case 400:
						err.message = '请求错误'
						break
					case 401:
						err.message = '未授权的访问'
						break
				}
      }
      return err
  })
  // 3. 发送请求
  return instance(config)
}