/* eslint-disable */ 
<template>
  <div style="height:900px;">
    <h2>China Map </h2>
    <button @click="goback()">返回</button>
    <div id="container" style="height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import beijing from "@/assets/mapJson/beijing.json";
import shanxi from "@/assets/mapJson/shanxi.json";
import xian from "@/assets/mapJson/xian.json";
import xianyang from "@/assets/mapJson/xianyang.json";
import china from "@/assets/mapJson/china.json";
import binzhoushi from "@/assets/mapJson/binzhoushi.json";
export default {
  name: 'echartdot',
  data() {
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
      this.axiosIns.get('/static/china.json?time=' + new Date().getTime(),).then(function (geoJson) {
        console.log("geoJson=" + geoJson);
        echarts.registerMap('china', geoJson.data, {});
        var option = {
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (p / km2)'
          },
          backgroundColor: "#404a59",
          visualMap: {
            min: 500,
            max: 50000,
            text: ['High', 'Low'],
            left: 'right',
            realtime: false, // 实时请求，需要关闭
            calculable: true,
            inRange: {
              color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8']
            }
          },
          series: [
            {
              name: '西城',
              type: 'map',
              mapType: 'china',
              aspectScale: 0.85,  //地图长度比
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: 'green'
                  },
                  itemStyle: {
                    opacity: 1,
                    borderColor: "#f18355",
                    borderWidth: "3",
                    areaColor: "red"
                  }
                }
              },
              itemStyle: {
                normal: {
                  areaColor: "#040c3c", //地图本身的颜色
                  borderColor: "#00feda", //省份边框颜色
                  borderWidth: 1, // 省份边框宽度
                  opacity: 1, //图形透明度
                },
                emphasis: {
                  areaColor: "#040c3c", // 高亮时候地图显示的颜色 这个是划过地图是颜色剩下
                  borderWidth: 3, // 高亮时的边框宽度
                  itemStyle: {
                    opacity: 1,
                    borderColor: "#f18355",
                    borderWidth: "3",
                    areaColor: "green"
                  }
                },
              },
              data: [
                { name: '青海省', value: 1000 },
                { name: '陕西省', value: 40000 },
                { name: '河北省', value: 40000 },

              ]
            }
          ]
        };

        myChart.off("click");
        myChart.on("click", ({ name }) => {
          console.log("ssddsdsd...." + JSON.stringify(name));
          if (name === "北京市") {
            // 修改option的配置，可以继续自定义
            // option.geo.zoom = 0.8;
            // 就像上面提到的，这里必须要和注册地图时的名字一致
            // option.geo.map = "beijing";

            // echarts.registerMap('china',"beijing",{});

            // 注册地图
            echarts.registerMap("beijing", beijing);
            // 重新渲染
            myChart.setOption(option, true);
          }
          if (name === "陕西省") {
            // 修改option的配置，可以继续自定义

            // 就像上面提到的，这里必须要和注册地图时的名字一致
            // option.geo.map = "shanxi";
            option.series[0].data = [
              { name: '西安市', value: 5700 },
              { name: '榆林市', value: 1000 },
              { name: '咸阳市', value: 4300 },
            ];
            option.series[0].mapType = "shanxi";
            console.log("option=" + option);
            // 注册地图
            echarts.registerMap("shanxi", shanxi);
            // 重新渲染
            myChart.setOption(option, true);
          }
          if (name === "西安市") {
            // 修改option的配置，可以继续自定义
            // option.geo.zoom = 0.8;
            // 就像上面提到的，这里必须要和注册地图时的名字一致
            option.series[0].mapType = "xian";
            option.series[0].data = [
              { name: '雁塔区', value: 5500 },
              { name: '莲湖区', value: 1000 },
              { name: '新城区', value: 4000 },
              { name: '周至县', value: 4700 },
              { name: '临潼区', value: 2000 },
            ];
            // 注册地图
            echarts.registerMap("xian", xian);
            // 重新渲染
            myChart.setOption(option, true);
          }
          if (name === "咸阳市") {
            // 修改option的配置，可以继续自定义
            // option.geo.zoom = 0.8;
            // 就像上面提到的，这里必须要和注册地图时的名字一致
            // option.geo.map = "xianyang";
            option.series[0].mapType = "xianyang";
            option.series[0].data = [
              { name: '秦都区', value: 5500 },
              { name: '渭城区', value: 1000 },
              { name: '礼泉县', value: 4000 },
              { name: '彬州市', value: 52000 },
            ];
            // 注册地图
            echarts.registerMap("xianyang", xianyang);
            // 重新渲染
            myChart.setOption(option, true);
          }
          if (name === "彬州市") {
            // 修改option的配置，可以继续自定义
            // option.geo.zoom = 0.8;
            // 就像上面提到的，这里必须要和注册地图时的名字一致
            // option.geo.map = "binzhoushi";
            option.series[0].mapType = "binzhoushi";
            option.series[0].data = [
              { name: '秦都区', value: 5500 },
              { name: '渭城区', value: 1000 },
              { name: '礼泉县', value: 4000 },
              { name: '彬州市', value: 52000 },
            ];// 注册地图
            echarts.registerMap("binzhoushi", binzhoushi);
            // 重新渲染
            myChart.setOption(option, true);
          }
        });

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
h1,
h2 {
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
