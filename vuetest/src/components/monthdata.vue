/* eslint-disable */
<template>
  <div style="height:900px;">
    <h2>monthdata test file</h2>
    <button @click="goback()">返回</button>
    <div id="container" style="height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "monthdata",
  data() {
    return {
      msg: "this is  echartdot  file "
    };
  },
  methods: {
    goback: function() {
      window.history.back();
    },
    dotChart: function() {
      console.log("ssss");
      //  var echarts = require('echarts');
      const data = [
                        {
                            name: '供电量（单位：kWh）',
                            type: 'bar',
                            data: [1258470.00, 1258470.00, 1573486.00, 1258412.00,1258465.00, 1258621.00, 1258841.00, 1258001.00,1258105.00,1254095.00,1258801.00,1258201.00,]
                        },
                        {
                            name: '售电量（单位：kWh）',
                            type: 'bar',
                            data: [1228470.00, 1248570.00, 1116511.20, 1228450.00,1228640.00, 1225470.00, 1222570.00,1228630.00,1220200.00,1266670.00,1228900.00,1228942.00]
                        },
                        {
                            name: '耗损电量（单位：kWh）',
                            type: 'bar',
                            data: [30000.00, 2900.00, 82000.05, 40000.30,20000.34, 90000.37, 23000.34,50000.30,24000.39,71000.34,60000.31,20000.32]
                        }
                    ];

// 基于准备好的dom，初始化echarts实例
                let myChart1 = echarts.init(document.getElementById('container'))
                // 绘制图表
                myChart1.setOption({
                    title: {
                        text: '损耗电量统计分析图',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['供电量（单位：kWh）', '售电量（单位：kWh）', '耗损电量（单位：kWh）']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: data
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

</style>
