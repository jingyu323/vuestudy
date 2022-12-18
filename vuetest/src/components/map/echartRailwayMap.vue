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
import {AREANAME} from "@/data/areaName.js";
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
    convertData :function(data) {
    var res = [];
    var geoCoordMap = AREANAME;//AREANAME为获取的js中数据
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [toCoord, fromCoord]
            });
        }
    }
    console.log(res);
    return res;
},  

    dotChart: function () {
      console.log(AREANAME);
      var mapTipList = [{
   	  itemname:'京杭铁路',
   	  itemcode:'1111',
   	  compname:'10001',
   	  totalinvestment:'200',
   	  yearinvestplan:'2000',
   	  yearinvestcomplete:'333'
    }];

    var BJData = [[{'name': '广东'}, {'name': '贵州'}],[{'name': '山西'}, {'name': '新疆'}],[{'name': '吉林'}, {'name': '广西壮族自治区'}],[{'name': '内蒙古自治区'}, {'name': '西藏'}],[{'name': '北京'}, {'name': '香港特別行政区'}],[{'name': '福建'}, {'name': '云南'}]];

    var path = this.convertData(BJData);
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
                  { name: "山西", value: [112.54925, 37.857014,4800] },
                  { name: "北京", value: [116.40529, 39.904987,4300] },
                  { name: "内蒙古自治区", value: [111.6708, 40.81831,4100] },
                ],
          },
          ,{//白线
			        name: '白线',
			        type: 'lines',
			        selectedMode: 'single',     //添加点击事件 此处必须设置
			        zlevel: 2,//zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面。
			        effect: {
			            show: true,//是否显示特效
			            period: 6,//特效动画时间
			            trailLength: 0.8,//特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长。
			            color: '#F3B329',
			            symbolSize: 1//线两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定
			        },
			        symbol: ['none','diamond'],//无-->箭头使用arrow
			        lineStyle: {
			            normal: {
			                color: '#fff',
			                opacity: 0.3,
			                width: 3,
			                type:"dashed",//虚线
			               // curveness: 0.2  //线条弧度 默认为直线
			            }
			        },
			        data: path
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
