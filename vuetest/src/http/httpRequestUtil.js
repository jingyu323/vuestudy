import axios from 'axios'
// 全局引入

var axiosIns = axios.create({
  baseURL: 'https://easy-mock.com/mock/5c67cb3fadf6a5499fb8d31e/vuetest',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

function initAxiosIns () {
  return axiosIns
}
export default {initAxiosIns}
