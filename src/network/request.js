import Axios from "axios";

export function request(config) {
  //1创建axios实列
  const instance = Axios.create({
    baseURL: 'http://152.136.185.210:8000',
    timeout: 8000
  })

  //2.axios的拦截器
  //2.1请求拦截
  instance.interceptors.request.use(
    config => {  //请求成功  进行拦截
      //1.拦截config中一些信息不符合服务器的要求
      //2.拦截每次发送网络请求时，都希望在界面中显示一个请求的图标
      //3.某些网络请求（登录token），必须携带一些特殊的信息
     return config
    },error => {//请求失败 进行拦截

    }
  )

  //2.2响应拦截
  instance.interceptors.response.use(
    result => {  //响应成功 进行拦截
       return result.data
    },
    error => {  //响应失败 进行拦截

    }
  )


  return instance(config)
}
