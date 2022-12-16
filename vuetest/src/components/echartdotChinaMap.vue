/* eslint-disable */ 
<template>
  <div  style="height:900px;">
    <h2>China Map </h2>
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
        console.log("geoJson="+geoJson);
	  	  echarts.registerMap('xicheng',geoJson.data,{});
		   var option = {
		    tooltip: {
		        trigger: 'item',
            	formatter: '{b}<br/>{c} (p / km2)'
		    },
			backgroundColor: "#404a59",
		    visualMap: {
	            min: 500,
	            max: 50000,
	            text:['High','Low'],
	            left: 'right',
	            realtime: false,
	            calculable: true,
	            inRange: {
	                color: ['#313695','#4575b4', '#74add1','#abd9e9','#e0f3f8']
	            }
	        },
		    series: [
		        {
		        	name: '西城',
		            type: 'map',
		            mapType: 'xicheng',
		            aspectScale: 0.85,  //地图长度比
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        color: '#fff'
		                    }
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        color: '#333'
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
                        areaColor: "#040c3c", // 高亮时候地图显示的颜色
                        borderWidth: 0, // 高亮时的边框宽度
                    },
                },
		            data: [
		            	{name: '德胜门', value: 17000},
	                    {name: '什刹海', value: 1000},
	                    {name: '新街口', value: 5000},
	                    {name: '展览路', value: 20000},
	                    {name: '月坛', value: 25000},
	                    {name: '金融街', value: 30000},
	                    {name: '西长安街', value: 18000},
	                    {name: '广安门外', value: 2300},
	                    {name: '广安门内', value: 20000},
	                    {name: '大栅栏', value: 16000},
	                    {name: '陶然亭', value: 28000}
		            ]
		        }                              
		    ]
		};
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
