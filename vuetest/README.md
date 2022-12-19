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
# 地图json 阿里云地图数据下载
http://datav.aliyun.com/portal/school/atlas/area_selector#&lat=30.230594564932193&lng=98.316650390625&zoom=6

CSDN 地图
https://blog.csdn.net/m0_67401660/article/details/126081326?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-126081326-blog-126470836.pc_relevant_3mothn_strategy_and_data_recovery&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-126081326-blog-126470836.pc_relevant_3mothn_strategy_and_data_recovery&utm_relevant_index=1

# visualMap
需要结合 series联合使用

# geo 和  echarts.registerMap

# 引入外部js data
// 定义数据
const AREANAME = {}
export {AREANAME}
引用
import {AREANAME} from "@/data/areaName.js";
# 铁路线的画法
画一条白色虚线
再画一条黑色实线

# vue 安装 jQery
错误原因：该错误是未安装JQuery依赖包导致。

解决方案：安装依赖包
1.执行安装jquery依赖包命令

	cnpm install jquery --save

2.webpack配置
（1）.在项目根目录下的build目录下找到webpack.base.conf.js文件，在开头使用以下代码引入webpack，因为该文件默认没有引用

var webpack = require('webpack')
(2)然后在module.exports中添加一段代码，

 plugins: [ 
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery" 
    }) 
  ]

3.在main.js里导入jQuery

import 'jquery'
4.配置完成，启动项目

npm run dev

注：如果项目中引用了.eslintrc.js文件，还需要在文件的module.exports中，为env添加一个键值对 jquery: true

	env: {
	  // 原有
	  browser: true,
	  // 添加
	  jquery: true
	}
然后启动项目即可。 

# vue 引入 easyUI
官网
https://www.jeasyui.cn/document/vue/index.html

npm install vx-easyui --save

# vue 引入layui
官网：
http://layui.winxapp.cn/doc/modules/table.html

https://www.cnblogs.com/CIBud/p/14963219.html
1.把layui对应的包放在static文件夹下，所以就直接放在了static下
2.在index.html中直接引入layui.js和layui.css
3.在vue组件中的created勾子函数中写入如下代码
  created(){
    const _this = this;
    layui.use(['layer'],function(){
      _this.layer = layui.layer,
      this.layer.msg('hello');
    })
  }

  # 总结
  layUI 可以作为弹窗或者表格使用，作为动态操作元素的定制使用