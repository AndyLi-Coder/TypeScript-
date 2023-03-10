import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { AxiosConfig } from './types'


class Request {
  instance: AxiosInstance
  constructor(config: AxiosConfig) {
    this.instance = axios.create(config)

    // 每个实例都添加请求拦截器

    // 1.全局请求拦截
    this.instance.interceptors.request.use(config => {
      // 全局请求成功的拦截器
      // 可以处理header，添加Token，loading
      console.log('全局请求成功的拦截')
      return config
    }, err => {
      // 全局请求失败的拦截
      console.log('全局请求失败的拦截')
      return err
    })

    // 2.全局响应拦截
    this.instance.interceptors.response.use(res => {
      // 全局响应成功的拦截
      console.log('全局响应成功的拦截')
      return res
    }, err => {
      // 全局响应失败的拦截
      console.log('全局响应失败的拦截')
      return err
    })


    // 局部的request请求拦截(例如：只拦截爱彼迎的请求)
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }



  // 封装请求方法
  /* request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  } */
  // 单个的请求拦截
  request(config: AxiosConfig) {
    // 请求成功的拦截
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    // 响应成功的拦截
    return new Promise((resolve, reject) => {
      this.instance.request(config)
        .then(res => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors?.responseSuccessFn(res)
            resolve(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default Request