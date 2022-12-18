/* eslint-disable */
<template>
  <div style="height:900px;">
    <h2>China Railway Map</h2>
    <button @click="goback()">返回</button>
    <div id="container" style="height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import beijing from "@/assets/mapJson/beijing.json";
import shanxi from "@/assets/mapJson/shanxi.json";
import xian from "@/assets/mapJson/xian.json";
import xianyang from "@/assets/mapJson/xianyang.json";
import china from "@/assets/mapJson/china.json";
import binzhoushi from "@/assets/mapJson/binzhoushi.json";
export default {
  name: "echartdot",
  data() {
    return {
      msg: "this is  echartdot  file "
    };
  },
  methods: {
    goback: function () {
      window.history.back();
    },
    // getMap:function (mapName) {
    // 	let cityName = mapDict[mapName]
    // 	if(cityName){
    // 		return [cityName,mapData[cityName]]
    // 	}
    // 	return ['china',china]
    // },
    randomData: function () {
      return Math.round(Math.random() * 500);
    },
    dotChart: function () {
      // json及registerMap的方式
      var mydata = [
        { name: '北京', value: '100' }, { name: '天津', value: this.randomData() },
      ];
      console.log("ssss" + beijing);
      //  var echarts = require('echarts');
      var myChart = echarts.init(document.getElementById("container"));



      echarts.registerMap('china', china, {});
      var option = {
        geo: {
          map: 'china',
          roam: false,
          zoom: 1.23,
          label: {
            emphasis: {
              show: false,
              color: '#fff'
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#DCDFE1',//省边界颜色
              areaColor: '#8FCAF1'//地图颜色
            },
            emphasis: {
              areaColor: '#F3B329'//懸浮顏色 
            }
          }
        },

        series: [
          //圆圈
          {
            name: '城市',
            type: 'effectScatter',//圆圈涟漪
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
                color: '#fff'
              }
            },
            symbolSize: 8,//圆圈大小
            itemStyle: {
              normal: {
                color: 'yellow'//圆圈颜色
              }
            },

            data: [
                  { name: "西藏", value: [91.23, 29.5, 2333] },
                  { name:  "新疆",value: [87.61773, 43.792816,4332] },
                  { name: "黑龙江", value: [128.03, 47.01, 1007] },
                  { name: "山东", value: [117.00092, 36.675808,5000] },
                ],
          },
        ],

      }
      myChart.setOption(option);

    }
  },
  mounted() {
    this.dotChart();
  }
};
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
