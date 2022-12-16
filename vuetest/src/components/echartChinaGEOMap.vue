/* eslint-disable */ 
<template>
  <div  style="height:900px;">
    <h2>China GEO  Map </h2>
    <button @click = "goback()">返回</button> 
    <div id="container" style="height: 100%"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
export default {
  name: 'echartdot',
  data () {
    return {
      msg: 'this is  echartdot  file '
    }
  },
  methods: {
    goback: function () {
      window.history.back()
    },
    dotChart: function () {
     console.log("ssss");
    //  var echarts = require('echarts');
      	var myChart = echarts.init(document.getElementById('container'));
        this.axiosIns.get('/static/china.json?time='+new Date().getTime(),).then(function (geoJson) {
	     const option = {
        // 背景颜色
        backgroundColor: "#404a59",
        // 提示浮窗样式
        tooltip: {
          show: true,
          trigger: "item",
          alwaysShowContent: false,
          backgroundColor: "#0C121C",
          borderColor: "rgba(0, 0, 0, 0.16);",
          hideDelay: 100,
          triggerOn: "mousemove",
          enterable: true,
          textStyle: {
            color: "#DADADA",
            fontSize: "12",
            width: 20,
            height: 30,
            overflow: "break",
          },
          showDelay: 100
        },
		graphic:{
			type: "group",
          rotation: Math.PI / 4,
          bounding: "raw",
          left: 110,
          top: 110,
          z: 100,
          children: [
            {
              type: "rect",
              left: "center",
              top: "center",
              z: 100,
              shape: {
                width: 400,
                height: 50,
              },
              style: {
                fill: "rgba(0,0,0,0.3)",
              },
            },
            {
              type: "text",
              left: "center",
              top: "center",
              z: 100,
              style: {
                fill: "#ddd",
                text: "Create By Rain",
                font: 'bolder 1.5rem "Microsoft YaHei", sans-serif',
              },
            },
          ],
			
       
    },
		series: [
    // {
    //     type: "scatter",
    //     coordinateSystem: "geo",
    //     symbol: "pin",
    //     legendHoverLink: true,
    //     symbolSize: [60, 60],
    //     // 这里渲染标志里的内容以及样式
    //     label: {
    //         show: true,
    //         formatter(value) {
    //             return value.data.value[2];
    //         },
    //         color: "#fff",
    //     },
    //     // 标志的样式
    //     itemStyle: {
    //         normal: {
    //             color: "rgba(255,0,0,.7)",
    //             shadowBlur: 2,
    //             shadowColor: "D8BC37",
    //         },
    //     },
    //     // 数据格式，其中name,value是必要的，value的前两个值是数据点的经纬度，其他的数据格式可以自定义
    //     // 至于如何展示，完全是靠上面的formatter来自己定义的
    //     data: [
    //         { name: "西藏", value: [91.23, 29.5, 2333] },
    //         { name: "黑龙江", value: [128.03, 47.01, 1007] },
    //     ],
    //     showEffectOn: "render",
    //     rippleEffect: {
    //         brushType: "stroke",
    //     },
    //     hoverAnimation: true,
    //     zlevel: 1,
    // },
    {
      type: "effectScatter",
      coordinateSystem: "geo",
      effectType: "ripple",
      showEffectOn: "render",
      rippleEffect: {
        period: 10,
        scale: 10,
        brushType: "fill",
      },

      hoverAnimation: true,
      itemStyle: {
        normal: {
          color: "rgba(255, 235, 59, .7)",
          shadowBlur: 10,
          shadowColor: "#333",
        },
      },
      zlevel: 1,
      data: [
        { name: "西藏", value: [91.23, 29.5, 2333] },
        { name: "黑龙江", value: [128.03, 47.01, 1007] },
      ],
    },
],

        // 地图配置
        geo: {
          map: "china",
          label: {
            // 通常状态下的样式
            normal: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
            // 鼠标放上去的样式
            emphasis: {
              textStyle: {
                color: "#fff",
              },
            },
          },
          // 地图区域的样式设置
          itemStyle: {
            normal: {
              borderColor: "rgba(147, 235, 248, 1)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
              shadowColor: "rgba(128, 217, 248, 1)",
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10,
            },
            // 鼠标放上去高亮的样式
            emphasis: {
              areaColor: "#389BB7",
              borderWidth: 0,
            },
          },
        },
      };
			// 地图注册，第一个参数的名字必须和option.geo.map一致
			echarts.registerMap("china",geoJson.data)
			myChart.setOption(option);
		});
      
 

    },

    },
    mounted() {
      this.dotChart();
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
