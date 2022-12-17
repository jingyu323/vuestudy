/* eslint-disable */
<template>
  <div style="height:900px;">
    <h2>China GEO Map</h2>
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

      var mydata = [
        { name: '北京', value: '100' }, { name: '天津', value: this.randomData() },
      ];
      console.log("ssss" + beijing);
      //  var echarts = require('echarts');
      var myChart = echarts.init(document.getElementById("container"));
      this.axiosIns
        .get("/static/china.json?time=" + new Date().getTime())
        .then(function (geoJson) {
          const option = {
            // 背景颜色
            backgroundColor: "#404a59",
            grid: {
              top: 50,  // 设置图表位置
              left: '45%',
              width: '35%' // 设置图表宽度
            },
            // 提示浮窗样式
            tooltip: {
              show: true,
              trigger: "item",
              alwaysShowContent: false,
              backgroundColor: "#0C121C",
              borderColor: "rgba(0,0,0,0.16);",
              hideDelay: 100,
              triggerOn: "mousemove",
              enterable: true,
              textStyle: {
                color: "#DADADA",
                fontSize: "12",
                width: 20,
                height: 30,
                overflow: "break"
              },
              showDelay: 100
            },
            graphic: {
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
                    height: 50
                  },
                  style: {
                    fill: "rgba(0,0,0,0.3)"
                  }
                },
                {
                  type: "text",
                  left: "center",
                  top: "center",
                  z: 100,
                  style: {
                    fill: "#ddd",
                    text: "Create By Rain",
                    font: 'bolder 1.5rem "Microsoft YaHei",sans-serif'
                  }
                }
              ]
            },
            visualMap: {
              // 是否展示左下角，即是是false，也仅是不显示，不影响数据的映射
              // 是否展示左下角，即是是false，也仅是不显示，不影响数据的映射
              show: true,
              // 上下端文字
              text: ["高", "低"],
              // 最小值和最大值，必须指定
              min: 0,
              max: 6000,
              // 位置
              left: "10%",
              bottom: "10%",
              // 是否展示滑块
              calculable: true,
              // 指定映射的数据，对应的是option.series，这里根据自己的实际需要进行配置
              seriesIndex: [1], // 指定虚拟地图的用的data 根据虚拟地图指定的数据显示不同的样式
              // 从下到上的颜色
              inRange: {
                color: [
                  "#313695",
                  "#4575b4",
                  "#74add1",
                  "#abd9e9",
                  "#e0f3f8",
                  "#ffffbf",
                  "#fee090",
                  "#fdae61",
                  "#f46d43",
                  "#d73027",
                  "#a50026"
                ]
              },
              //字体颜色
              textStyle: {
                // color: "#fff",
                // map: "china"
              }
            },
            series: [
              {
                type: "scatter", //类型：散点
                coordinateSystem: "geo",  //使用地理坐标系
                symbol: "pin",
                legendHoverLink: true,
                symbolSize: [60, 60],
                // 这里渲染标志里的内容以及样式
                label: {
                  show: true,
                  formatter(value) {
                    return value.data.value[2];
                  },
                  //   color: "#fff"
                },
                // 标志的样式
                itemStyle: {
                  normal: {
                    color: "rgba(255,0,0,.7)",
                    shadowBlur: 2,
                    shadowColor: "D8BC37"
                  }
                },
                // 数据格式，其中name,value是必要的，value的前两个值是数据点的经纬度，其他的数据格式可以自定义
                // 至于如何展示，完全是靠上面的formatter来自己定义的
                data: [
                  { name: "西藏", value: [91.23, 29.5, 2333] },
                  { name: "黑龙江", value: [128.03, 47.01, 1007] }
                ],
                showEffectOn: "render",
                rippleEffect: {
                  brushType: "stroke"
                },
                hoverAnimation: true,
                zlevel: 1
              },
              {
                name: '中国',
                type: 'map',
                mapType: 'china',
                geoIndex: 0, // 解决添加visumap 重合问题
                aspectScale: 0.85,  //地图长度比
                label: {
                  // 通常状态下的样式
                  normal: {
                    show: true,
                    textStyle: {
                      color: "#fff"
                    }
                  },
                  // 鼠标放上去的样式
                  emphasis: {
                    textStyle: {
                      color: "#fff"
                    }
                  }
                },
                // 地图区域的样式设置
                itemStyle: {
                  normal: {
                    borderColor: "rgba(147,235,248,1)",
                    borderWidth: 1,
                    areaColor: {
                      type: "radial",
                      x: 0.5,
                      y: 0.5,
                      r: 0.8,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(147,235,248,0)" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "rgba(147,235,248,.2)" // 100% 处的颜色
                        }
                      ],
                      globalCoord: false // 缺省为 false
                    },
                    shadowColor: "rgba(128,217,248,1)",
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                  },
                  // 鼠标放上去高亮的样式
                  emphasis: {
                    areaColor: "#389BB7",
                    borderWidth: 0
                  }
                }, data: [
                  { name: '北京市', value: 6000 },
                  { name: '天津市', value: 1000 },
                  { name: '陕西省', value: 5000 },
                  { name: '山西省', value: 3000 },
                  { name: '湖南省', value: 2000 },
                  { name: '新疆维吾尔自治区', value: 5700 },
                  { name: '青海省', value: 5100 },
                  { name: '西藏自治区', value: 4200 },
                ]
              }
            ],
            // 地图配置
            geo: {
              map: "china",
              label: {
                // 通常状态下的样式
                normal: {
                  show: true,
                  textStyle: {
                    color: "#fff"
                  }
                },
                // 鼠标放上去的样式
                emphasis: {
                  textStyle: {
                    color: "#fff"
                  }
                }
              },
              // 地图区域的样式设置
              itemStyle: {
                normal: {
                  borderColor: "rgba(147,235,248,1)",
                  borderWidth: 1,
                  areaColor: {
                    type: "radial",
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [
                      {
                        offset: 0,
                        color: "rgba(147,235,248,0)" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "rgba(147,235,248,.2)" // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  },
                  shadowColor: "rgba(128,217,248,1)",
                  shadowOffsetX: -2,
                  shadowOffsetY: 2,
                  shadowBlur: 10
                },
                // 鼠标放上去高亮的样式
                emphasis: {
                  areaColor: "#389BB7",
                  borderWidth: 0
                }
              }
            }
          };
          // 地图注册，第一个参数的名字必须和option.geo.map一致
          echarts.registerMap("china", geoJson.data);

          myChart.on("click", ({ name }) => {
            console.log("ssddsdsd...." + JSON.stringify(name));
            if (name === "北京市") {
              // 修改option的配置，可以继续自定义
              option.geo.zoom = 0.8;
              // 就像上面提到的，这里必须要和注册地图时的名字一致
              option.geo.map = "beijing";
              // 注册地图
              echarts.registerMap("beijing", beijing);
              // 重新渲染
              myChart.setOption(option, true);
            }
            if (name === "陕西省") {
              // 修改option的配置，可以继续自定义
              option.geo.zoom = 0.8;
              // 就像上面提到的，这里必须要和注册地图时的名字一致
              option.geo.map = "shanxi";
              // 注册地图
              echarts.registerMap("shanxi", shanxi);
              // 重新渲染
              myChart.setOption(option, true);
            }
            if (name === "西安市") {
              // 修改option的配置，可以继续自定义
              option.geo.zoom = 0.8;
              // 就像上面提到的，这里必须要和注册地图时的名字一致
              option.geo.map = "xian";
              // 注册地图
              echarts.registerMap("xian", xian);
              // 重新渲染
              myChart.setOption(option, true);
            }
            if (name === "咸阳市") {
              // 修改option的配置，可以继续自定义
              option.geo.zoom = 0.8;
              // 就像上面提到的，这里必须要和注册地图时的名字一致
              option.geo.map = "xianyang";
              // 注册地图
              echarts.registerMap("xianyang", xianyang);
              // 重新渲染
              myChart.setOption(option, true);
            }
          });

          myChart.setOption(option);
        });
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
