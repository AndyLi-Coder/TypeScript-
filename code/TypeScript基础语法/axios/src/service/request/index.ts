import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { AxiosConfig } from './types'


class Request {
  instance: AxiosInstance
  constructor(config: AxiosConfig) {
    this.instance = axios.create(config)

    // 每个实例都添加请求拦截器

    /**
     * 
     * 全局拦截
     * 
     *  */
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
      return res.data
    }, err => {
      // 全局响应失败的拦截
      console.log('全局响应失败的拦截')
      return err
    })


    /**
     * 
     * 局部拦截
     * 
     */
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



  /**
   * 
   * 单个拦截处理
   * 
   *  */
  // 封装请求方法
  /* request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  } */
  // 单个的请求拦截
  request<T = any, R = any>(config: AxiosConfig<T>) {
    // 请求成功的拦截

    /*   if (config.interceptors?.requestSuccessFn) {
        config = config.interceptors.requestSuccessFn(config)
      } */

    // 响应成功的拦截
    return new Promise<T>((resolve, reject) => {
      this.instance.request<any, T>(config)
        .then(res => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors?.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  get<T = any>(config: AxiosConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: AxiosConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
}

export default Request