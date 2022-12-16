# vuetest

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


npm install --save axios

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# <!-- echarts -->
npm install echarts --save

vue5+ 
import * as echarts from 'echarts';

vue4 
import   echarts from 'echarts';
示例
https://blog.csdn.net/weixin_55181759/category_11824935.html

# 本地json GET 加载问题
主要是在url后添加时间戳
get('/static/xicheng?time='+new Date().getTime()
# 地图json
http://datav.aliyun.com/portal/school/atlas/area_selector#&lat=30.230594564932193&lng=98.316650390625&zoom=6