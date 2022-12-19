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
import { AREANAME } from "@/data/areaName.js";
export default {
  name: "echartdot",
  data() {
    return {
      msg: "this is  echartdot  file ",
      tableData:[],
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
    mapModal: function (start, end) {
      let _this = this;
      layui.use('layer', function () {
        // if(layerMap != null){
        // 	layer.close(layerMap);
        // };
        var layerMap = layer.open({
          title: start + '-' + end + '电铁配套工程',
          type: 1,
          offset: ['67%', '14.5%'],
          shade: 0,
          skin: 'demo-class',//设置标题背景色为白色
          content: `
				<div id="mapGrid" style="height:100%; width:100%; height:250px;background-color:#FFF; padding:5px; ">
          2222
					<DataGrid class="easyui-datagrid mapGrid" style="height:100%; width:100%" :data="tableData">
            <GridColumn field="itemname" title="Item ID"></GridColumn>  
            <GridColumn field="itemcode" title="itemcode"></GridColumn>
          </DataGrid>
          <table class="easyui-datagrid mapGrid" style="height:100%; width:100%" :data="tableData">
				</div>
			`,
          area: ['54%', '30%']
        })
        layer.ready(function () {
          //初始化表头
          _this.initMaptable("repId222");
        });
      });
    },
    initMaptable: function (repId) {
      console.log("repId="+repId);
      //获取表头  此处封装了ajax从数据库获取表头
      var finaltitle = { "leftcols": "leftcols11", "rightcols": "rightcols33" };
      var leftcols = finaltitle.leftcols;
      var rightcols = finaltitle.rightcols;
      var mapTipList = [{
        itemname: '京杭铁路',
        itemcode: '1111',
        compname: '10001',
        totalinvestment: '200',
        yearinvestplan: '2000',
        yearinvestcomplete: '333'
      }];
      //此处应ajax获取后端数据
      // document.getElementsByClassName(".mapGrid")[0].datagrid({
      //   frozenColumns: leftcols,
      //   columns: rightcols,
      //   fitColumns: true,
      //   singleSelect: true,
      //   data: [{ id: '-1', itemname: '请先查询数据!', bgcolor: '#fff000' }],
      // })

      $(".mapGrid").datagrid('loadData', mapTipList);
      this.tableData = mapTipList;
    },
    convertData: function (data) {
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
        itemname: '京杭铁路',
        itemcode: '1111',
        compname: '10001',
        totalinvestment: '200',
        yearinvestplan: '2000',
        yearinvestcomplete: '333'
      }];

      var BJData = [[{ 'name': '广东' }, { 'name': '贵州' }], [{ 'name': '山西' }, { 'name': '新疆' }], [{ 'name': '吉林' }, { 'name': '广西壮族自治区' }], [{ 'name': '内蒙古自治区' }, { 'name': '西藏' }], [{ 'name': '北京' }, { 'name': '香港特別行政区' }], [{ 'name': '福建' }, { 'name': '云南' }]];

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
        tooltip: {
          formatter: function (params, ticket, callback) {
            if (params.seriesIndex == 0) {//当鼠标放在城市圈上不显示提示信息
              return '';
            }
            //只有悬浮铁路才会出现提示框
            var start = params.data.fromName;
            var end = params.data.toName;
            //这里的四个数据 需要从后台获取 此处写ajax就好
            var gjxmsltip = 0;
            var ztjtip = 0;
            var bntzjhtip = 0;
            var tzwctip = 0;

            let res = "<div>" +
              "<p style='padding-left:10px;padding-right:20px;font-size:0.07rem;height:0.25rem;line-height:0.25rem;background:#4CA6A6;color:white;'>" + start + "-" + end + "电铁配电工程</p>"
              + "<div style='margin:10px;color:#000;'>"
              + "<p>挂接项目数量：" + gjxmsltip + "</p>"
              + "<p>总投资：" + ztjtip + "</p>"
              + "<p>本年投资计划：" + bntzjhtip + "万元</p>"
              + "<p>投资完成：" + tzwctip + "万元</p>"
              + "</div>"
              + "</div>";
            return res;
          },
          backgroundColor: 'white',
          padding: 0
        },
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
              { name: "新疆", value: [87.61773, 43.792816, 4332] },
              { name: "黑龙江", value: [128.03, 47.01, 1007] },
              { name: "山东", value: [117.00092, 36.675808, 5000] },
              { name: "山西", value: [112.54925, 37.857014, 4800] },
              { name: "北京", value: [116.40529, 39.904987, 4300] },
              { name: "内蒙古自治区", value: [111.6708, 40.81831, 4100] },
              { name: "吉林", value: [125.3245, 43.88684, 4000] },
              { name: "广西壮族自治区", value: [108.32001, 22.82402, 3300] },
              { name: "贵州", value: [106.71348, 26.578342, 3200] },
              { name: "广东", value: [113.28064, 23.125177, 3100] },
              { name: "香港", value: [114.173355, 22.320047, 2700] },
              { name: "澳门", value: [113.54909, 22.198952, 2900] },
              { name: "福建", value: [119.30624, 26.075302, 3900] },
              { name: "云南", value: [102.71225, 25.04061, 3700] },
              { name: "海南", value: [110.33119, 20.031971, 3400] },
              { name: "台湾", value: [121.50906, 25.044333, 3300] },
            ],
          },
          , {//白线
            name: '白线',
            type: 'lines',
            selectedMode: 'single',     //添加点击事件 此处必须设置
            zlevel: 2,//zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面。
            effect: {
              show: true,//是否显示特效
              period: 6,//特效动画时间
              trailLength: 0.7,//特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长。
              color: '#F3B329',
              symbolSize: 1//线两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定
            },
            symbol: ['none', 'diamond'],//无-->箭头使用arrow
            lineStyle: {
              normal: {
                color: '#fff',
                opacity: 0.3,
                width: 3,
                type: "dashed",//虚线
                //  curveness: 0.2  //线条弧度 默认为直线
              }
            },
            data: path
          },
          , {//黑线
            name: '黑线',
            type: 'lines',
            selectedMode: 'single',     //添加点击事件 此处必须设置
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: '#aaa',
              symbolSize: 1
            },
            symbol: ['none', 'diamond'],//arrow
            lineStyle: {
              normal: {
                color: '#000',
                opacity: 0.3,
                width: 3,
              }
            },
            data: path
          }
        ],

      }
      myChart.setOption(option, true);
      let _this = this;
      myChart.on('click', function (params) {
        console.log("param : === " + params);//此处写点击事件内容
        if (params.componentType == "series") {
          var start = params.data.fromName;
          var end = params.data.toName;
          _this.mapModal(start, end);
        }
      });

    }
  },
  mounted() {
    this.dotChart();
  },created(){
     
    
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
