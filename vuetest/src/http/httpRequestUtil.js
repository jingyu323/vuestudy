import axios from 'axios'
// 全局引入

var axiosIns = axios.create({
  baseURL: 'https://easy-mock.com/vuetest',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

// 目的只是为了能够输出初始化的 axios 的实例
function initAxiosIns () {
  return axiosIns
}
export default {initAxiosIns}
