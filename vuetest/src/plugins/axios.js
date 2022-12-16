"use strict";

import Vue from 'vue';
import axios from "axios";
import Qs from "qs";
import store from './../store'
import {getToken } from './../utils/util.js'
// const baseConfig = require('../../public/vue.config.js')
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// console.log('%cprocess.env.NODE_ENV: ','color: MidnightBlue; background: Aquamarine; font-size: 20px;',process.env.NODE_ENV);
//console.log('%caseURL: baseConfig.baseUrl: ','color: MidnightBlue; background: Aquamarine; font-size: 20px;', baseConfig.default.baseUrl);
// console.log(window.api)
let config = {
  // baseURL: baseConfig.default.baseUrl,
  baseURL:window.api.SERVER_URL,
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
  headers:{},
};

export function $axios(options){
  return new Promise((resolve,reject)=>{
    let instance = axios.create({
      baseURL:config.baseURL,
      timeout:config.timeout,
      headers:{'Content-Type':'application/x-www-form-urlencoded'}||config.headers,
    }); 
    instance.interceptors.request.use(
      function(config) {
        if(config.method.toLowerCase()=='post'){
          config.data=Qs.stringify(config.data);  
          axios.defaults.withCredentials=true;//让ajax携带cookie
        }

       // console.log('%cstore.getters.cookie: ','color: MidnightBlue; background: Aquamarine; font-size: 20px;',getToken());
      //   if(store.getters.cookie){ 
      //     config.headers['Set-Cookie'] = getToken();
      //     console.log('%cgetCookie(): ','color: MidnightBlue; background: Aquamarine; font-size: 20px;',getCookie());
      // }
        // Do something before request is sent
        return config;
      },
      function(error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    _axios.interceptors.response.use(
      function(response) {
        // Do something with response data
        return response;
      },
      function(error) {
        // Do something with response error
        return Promise.reject(error);
      }
    );
    instance(options).then(response=>{
      resolve(response);
    }).catch(error=>{
      reject(error);
    })
  })   
     
  }
const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    if(config.method.toLowerCase()=='post'){
      config.data=Qs.stringify(config.data);

    }

    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin);

// export default Plugin;
