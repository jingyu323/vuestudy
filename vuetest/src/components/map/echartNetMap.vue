/* eslint-disable */
<template>
  <div class="govRightdiv">
    <h2>China Map </h2>
    <button @click="goback()">返回</button>
    <div class="charts" style="position:relative">
      <div class="height" id="map"></div>
      <div class="mapTip">
        <div><span>11.3Tb</span><br />xxxxx</div>
        <div><span>1Tb</span><br />xxxxx</div>
        <div><span>8.5Tb</span><br />xxxxx</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.govRightdiv{
  height: 900px;
}

.height{
  height: 900px; 
}
.mapTip{ 
  height: 300px; 
  position: absolute;
  top: 50px;
  color:#fff;
  right: 100px;
}


</style>

<script>
import * as echarts from "echarts";
import beijing from "@/assets/mapJson/beijing.json";
import shanxi from "@/assets/mapJson/shanxi.json";
import xian from "@/assets/mapJson/xian.json";
import xianyang from "@/assets/mapJson/xianyang.json";
import china from "@/assets/mapJson/china.json";
import binzhoushi from "@/assets/mapJson/binzhoushi.json";
import henan from "@/assets/mapJson/henan.json";
import { AREANAME } from "@/data/areaName.js";
import $ from "jquery";
export default {
  name: "echartdot",
  data() {
    return {
      msg: "this is  echartdot  file ",
      maptimer :"", 
      huhebeihai: [
        [113.086666666666, 35.1733333333333],
        [113.243333333333, 35.2191666666666],
        [113.0725, 34.9411111111111],
        [112.783888888888, 34.9044444444444],
        [112.597222222222, 34.8980555555555],
        [112.436666666666, 34.8261111111111],
        [112.439722222222, 34.6755555555555],
        [112.423611111111, 34.4197222222222],
        [112.840833333333, 34.1730555555555],
        [113.055277777777, 33.8691666666666],
        [113.203736111111, 33.7709166666666],
        [113.297222222222, 33.7263888888888],
        [113.356388888888, 33.6205555555555],
        [113.0086583, 33.25493056],
        [112.56, 33.03],
        [112.37, 32.52]
      ],
      xianhefei: [
        [111.09, 33.45],
        [111.48, 33.31],
        [111.84, 33.05],
        [112.24, 33.04],
        [112.55, 33.03],
        [112.83, 32.7],
        [113.4, 32.37],
        [113.92, 32.25],
        [114.05, 32.19],
        [114.53, 32.21],
        [115.03, 32.13],
        [115.67, 32.2]
      ],
      jingjiu: [
        [115.02, 35.76],
        [114.51, 35.57],
        [114.67, 35.21],
        [114.41, 35.03],
        [114.37, 34.78],
        [114.77, 34.54],
        [114.83, 34.06],
        [114.86, 33.73],
        [114.65, 33.61],
        [114.89, 33.44],
        [114.63, 32.96],
        [114.97, 32.75],
        [115.03, 32.13],
        [114.9, 32.01],
        [114.87, 31.63]
      ],
      jizheng: [
        [114.89, 34.83],
        [114.3, 34.79],
        [114.46, 34.48],
        [114.19, 34.41],
        [113.63, 34.75]
      ],
      zhengxi: [
        [113.63, 34.74],
        [113.38, 34.53],
        [113.04, 34.45],
        [112.43, 34.67],
        [112.17, 34.51],
        [111.76, 34.76],
        [111.2, 34.78],
        [110.86, 34.52]
      ],
      xuzheng: [
        [116.38, 33.93],
        [116.19, 34.23],
        [115.86, 34.4],
        [115.63, 34.42],
        [115.7, 34.41],
        [115.32, 34.46],
        [115.14, 34.64],
        [114.82, 34.92],
        [114.38, 34.79],
        [114.02, 34.73],
        [113.63, 34.75],
        [113.38, 34.76],
        [113.27, 34.8],
        [112.97, 34.71],
        [112.73, 34.72],
        [112.44, 34.68],
        [112.1, 34.72],
        [112.01, 34.69],
        [111.76, 34.76],
        [111.33, 34.72],
        [111.2, 34.78],
        [111.19, 34.79],
        [110.87, 34.52]
      ],
      jinghan: [
        [114.35, 36.11],
        [114.29, 35.75],
        [113.88, 35.31],
        [113.68, 34.97],
        [113.63, 34.75],
        [113.73, 34.4],
        [113.85, 34.03],
        [114.01, 33.59],
        [114, 33.15],
        [114.01, 33],
        [114.03, 32.47],
        [114.05, 32.19]
      ],
      zhengzhou: [
        [113.75, 34.76],
        [114.25, 34.78],
        [114.82, 34.92],
        [115.1, 34.59],
        [115.69, 34.4],
        [116.16, 34.19]
      ],
      beijing: [
        [115.01, 35.8],
        [114.69, 35.5],
        [114.67, 35.2],
        [114.25, 34.78],
        [114.45, 34.48],
        [114.6, 34.04],
        [114.72, 33.64],
        [114.8, 33.21],
        [114.99, 32.82],
        [114.84, 32.37],
        [114.89, 32.01],
        [114.93, 31.62]
      ],
      
    };
  },
  methods: {
    goback: function() {
      window.history.back();
    },
    
    mapinit: function(mapindex, myChart1, legend, color, option) {
      let _this = this;

      var maplinedata = [
        this.huhebeihai,
        this.xianhefei,
        this. jingjiu,
        this.jizheng,
        this.zhengxi,
        this.xuzheng,
        this.jinghan,
        this. zhengzhou,
        this.beijing
      ];
      var obj = {
        name: legend[mapindex],
        color: color[mapindex],
        coorData:  maplinedata[mapindex]
      };
      option.series = option.series.concat(this.mapdataobj(obj));
      myChart1.setOption(option, true);
    },
     
    
    dotChart: function() {
      this.maptimer = ""; //定时器
      this.map("map"); //地图
    },
    //地图
    map: function(id) {
      //var color=['#1DE9B6',"#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
      var color = [
        "#1DE9B6",
        "#0090ff",
        "#73DDFF",
        "#ffbc32",
        "#2ccc44",
        "#ff3976",
        "#6173d6",
        "#914ce5",
        "#0090ff",
        "#42b1cc",
        "#ff55ac",
        "#06d3c4",
        "#ffbc32",
        "#2ccc44",
        "#ff3976",
        "#6173d6",
        "#914ce5",
        "#42b1cc",
        "#ff55ac"
      ];
      let coorData = this.huhebeihai;
      var legend = [
        "呼和北海",
        "西安合肥",
        "京九广",
        "济郑",
        "郑西",
        "徐郑西",
        "第二京汉广",
        "郑州徐州",
        "北京九江"
      ]; 
    
      var option = {
        backgroundColor: "#404a59",
        legend: {
          show: true,
          data: legend,
          top:'10%',
          x: "center",
          left: "3%",
          
          // bottom: "30%",
          orient: "vertical",
          textStyle: {
            color: "#fff",
            fontSize: 12
          },
          itemHeight: 8
        },
        geo: {
          map: "henan",
          show: true,
          aspectScale: 0.75, //长宽比
          zoom: 1,
          layoutCenter: ["44%", "50%"],
          layoutSize: "100%",
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "#fff"
              }
            },
            emphasis: {
              textStyle: {
                color: "rgb(183,185,14)"
              }
            }
          },
          itemStyle: {
            normal: {
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "#09132c" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#072460" // 100% 处的颜色
                  }
                ],
                globalCoord: true // 缺省为 false
              },
              shadowColor: "rgb(58,115,192)",
              shadowOffsetX: 1,
              shadowOffsetY: 1
            }
          },
          silent: true //鼠标经过地图不高亮
        },
        series: []
      };
      var series = [];
      var myChart = echarts.init(document.getElementById(id));
       echarts.registerMap("henan", henan);
      var mapindex = 0;
      let _this = this;
      if (this.maptimer) window.clearInterval(this.maptimer);
      this.maptimer = setInterval(function() {
        mapindex++;
        if (mapindex >= legend.length) {
          mapindex = 0;
          option.series = [];
        }
        _this.mapinit(mapindex, myChart, legend, color, option);
      }, 1000);
      setTimeout(function() {
        _this.mapinit(mapindex, myChart, legend, color, option);
      }, 0);
    },
    mapdataobj: function(mapobj) {
      var len = mapobj.coorData.length -1;
      var str = [
        {
          //首尾涟漪效果
          type: "effectScatter",
          coordinateSystem: "geo",
          showEffectOn: "render",
          zlevel: 1,
          rippleEffect: {
            period: 15,
            scale: 4,
            brushType: "fill"
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: "{b}",
              position: "right",
              offset: [15, 0],
              color: "#1DE9B6",
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: mapobj.color
            }
          },
          symbol: "circle",
          symbolSize: 8,
          data: [
            {
              value: mapobj.coorData[0]
            },
            {
              value: mapobj.coorData[len]
            }
          ]
        },
        {
          //地图线的动画效果
          type: "lines",
          name: mapobj.name,
          zlevel: 2,
          effect: {
            show: true,
            period: 8, //箭头指向速度，值越小速度越快
            trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol:
              "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
            symbolSize: 8 //图标大小
          },
          lineStyle: {
            normal: {
              color: mapobj.color,
              width: 2, //线条宽度
              opacity: 1, //尾迹线条透明度
              curveness: 0.3 //尾迹线条曲直度
            }
          },
          polyline: true,
          label: {},
          data: [
            {
              coords: mapobj.coorData
            }
          ]
        }
      ];
      return str;
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
