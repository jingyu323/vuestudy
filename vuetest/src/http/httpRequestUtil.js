import axios from 'axios'
import store from './store'

function initAxios () { // 初始化配置
  axios.defaults.baseURL = 'http://121.11.2012iot.com/'
}
