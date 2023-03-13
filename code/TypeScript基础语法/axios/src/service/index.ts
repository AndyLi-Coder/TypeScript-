import Request from "./request";
import { TIME_OUT, BASE_URL } from "./config";
const fetch = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})


export const fetch2 = new Request({
  baseURL: 'http://codercba.com:1888/airbnb/api',
  timeout: 1000,
  interceptors: {
    requestSuccessFn: (config) => {
      console.log('爱彼迎请求成功拦截')
      return config
    },
    requestFailureFn: (err) => {
      console.log('爱彼迎请求失败拦截')
      return err
    },
    responseSuccessFn: (config) => {
      console.log('爱彼迎响应成功拦截')
      return config
    },
    responseFailureFn: (err) => {
      console.log('爱彼迎响应失败拦截')
      return err
    },
  }
})


export default fetch