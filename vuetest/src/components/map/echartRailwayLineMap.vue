/* eslint-disable */
<template>
  <div style="height:900px;">
    <h2>China Railway Line Map</h2>
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
import { AREANAME } from "@/data/areaName.js";
import $ from "jquery";
export default {
  name: "echartdot",
  data() {
    return {
      msg: "this is  echartdot  file ",
      tableData: [],
      data: [
        {
          code: "FI-SW-01",
          name: "Koi",
          unitcost: 10.0,
          status: "P",
          listprice: 36.5,
          attr: "Large",
          itemid: "EST-1"
        }
      ]
    };
  },
  methods: {
    goback: function() {
      window.history.back();
    },
    dotChart: function() {
      console.log(AREANAME);
      var trainLines = [
        [113.229991509, 39.9740137595],
        [113.2440222746, 40.0112798938],
        [113.3205599644, 39.9793044406],
        [113.5897397104, 39.9935195891],
        [113.6323071328, 40.0198128677],
        [113.8410727439, 40.0150987625],
        [114.4927191451, 40.209942887],
        [114.6972954652, 40.284852833],
        [114.7763247358, 40.2492769771],
        [115.1237282065, 40.3351402443],
        [115.3980349329, 40.3365057085],
        [115.528809725, 40.3541452998],
        [115.6386383872, 40.3554242305],
        [115.7347770152, 40.3962330991],
        [115.8220218461, 40.4553254384],
        [115.9331074866, 40.5098818055],
        [115.9976856501, 40.4771481623],
        [116.0787930898, 40.4188610923],
        [116.180569926, 40.3966647294],
        [116.3496784, 40.3334798038],
        [116.4363997773, 40.2848511711],
        [116.4632992051, 40.2979563489],
        [116.5608981005, 40.280774209],
        [116.6353132497, 40.2810950813],
        [116.7438012799, 40.251031001],
        [116.8890266543, 40.1809692086],
        [117.043677292, 40.1081611627],
        [117.0881500867, 40.0402227345],
        [117.1534061331, 39.9808125645],
        [117.3257262736, 40.0097217651],
        [117.4160471025, 40.0073872152],
        [117.4984682179, 39.9753135523],
        [117.5904577438, 39.977402205],
        [117.6783250968, 39.958440886],
        [117.8170650554, 40.0899211878],
        [117.9955507123, 40.2273765912],
        [118.389707973, 40.1634100519],
        [118.5737399463, 40.1844054101],
        [118.8497693728, 40.0457762723],
        [119.0337606296, 40.0068410146],
        [119.2590000686, 40.0363047577],
        [119.4159339421, 39.942949975],
        [119.5889017503, 39.9665806839],
        [119.6953706089, 39.9866073744],
        [119.7109338177, 39.9490638606],
        [119.684148218, 39.9455054281]
      ];

      //  var echarts = require('echarts');
      var myChart = echarts.init(document.getElementById("container"));

      var trainPath =
        "path://M807.4 938.5c-139.5-8-250.2-31.7-250.2-173.2v-95.5c0-35.5 72.5-64.3 108-64.3h0.3l0.9-152.4c0-8.5-6.9-15.4-15.4-15.4H373.2c-8.5 0-15.4 6.9-15.4 15.4l0.6 148.7c33.6 2.1 103.8 30 103.8 64.1v95.5c0 142.2-111.8 168.4-252.3 175.3l-0.1 0.3 0.9 71.5c0 8.5 6.9 15.4 15.4 15.4h568.1c8.5 0 15.4-6.9 15.4-15.4l-0.8-69.8-1.4-0.2zM598.2 64.5V18.6c0-8.5-6.9-15.4-15.4-15.4H428.6c-8.5 0-15.4 6.9-15.4 15.4V67C212.1 111.8 61.7 291.3 61.7 506c0 153.6 77 289.2 194.4 370.3l42.7-136.7C236 681 196.7 597.4 196.7 504.7c0-177.4 143.8-321.3 321.3-321.3s321.3 143.8 321.3 321.3c0 97.9-43.8 185.5-112.8 244.5l40.1 127.4C884.2 795.4 961.4 659.7 961.4 506c0-218.8-156.2-401.1-363.2-441.5z";

      echarts.registerMap("china", china, {});
      var option = {
        geo: {
          map: "china",
          roam: false,
          zoom: 1.23,
          label: {
            emphasis: {
              show: false,
              color: "#fff"
            }
          },
          itemStyle: {
            normal: {
              borderColor: "#DCDFE1", //省边界颜色
              areaColor: "#8FCAF1" //地图颜色
            },

            emphasis: {
              // 这块不生效
              itemStyle: {
                color: "red" //悬浮背景
              }
            }
          },
          itemStyle: {
            //  覆盖了之前的 item style
            color: "#1A3F57", //地图背景色
            borderColor: "#516a89", //省市边界线00fcff 516a89
            borderWidth: 1
          },
          // backgroundColor:"#013954",
          center: [116.4632992051, 40.2979563489], // 设置 自动缩放的图形中心位置
          label: {
            show: true,
            // offset: [1, 1000], // 这个影响 地图上身份的显示
            color: "#fff"
          },

          emphasis: {
            //  这个生效但是我还是喜欢黄色背景
            itemStyle: {
              color: "#87CEEB" //悬浮背景
            }
          }
        },
        series: [
          {
            type: "lines", //第一条实线
            coordinateSystem: "geo", // 这句的意思是连线是基于地理坐标的,geo组件将在下面给出
            polyline: true, // 这表示连线是否为多端点的连线
            data: [
              {
                coords: trainLines
              }
            ],
            lineStyle: {
              color: "black",
              width: 4
            },
            effect: {
              //线特效，小火车
              constantSpeed: 10,
              show: true,
              color: "#00EAFF",
              symbolSize: 15,
              symbol: trainPath
            },
            progressiveThreshold: 500,
            progressive: 200
          },
          {
            type: "lines", //第二条虚线
            coordinateSystem: "geo", // 这句的意思是连线是基于地理坐标的,geo组件将在下面给出
            polyline: true, // 这表示连线是否为多端点的连线
            data: [
              {
                coords: trainLines
              }
            ],
            lineStyle: {
              color: "#fff",
              width: 4,
              type: "dashed"
            },
            progressiveThreshold: 500,
            progressive: 200
          }
        ]
      };
      myChart.setOption(option, true);
    }
  },
  mounted() {
    this.dotChart();
  },
  created() {}
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
