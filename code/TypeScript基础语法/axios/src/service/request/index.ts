import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'


class Request {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  // 封装请求方法
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
}

export default Request