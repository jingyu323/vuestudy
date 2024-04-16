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
      var chartDom = document.getElementById("container");

      console.log(chartDom);
      // var myChart = echarts.init(chartDom);

      var data = [
          {month: '2023-01', value: 121 },
          {month: '2023-02', value: 112},
           {month: '2023-03', value: 102},
            {month: '2023-04', value: 132},
             {month: '2023-05', value: 142},
              {month: '2023-06', value: 122},
               {month: '2023-07', value: 102},
                {month: '2023-08', value: 122},
                 {month: '2023-09', value: 112},
                  {month: '2023-10', value: 132},
                   {month: '2023-11', value: 142},
                    {month: '2023-12', value: 102},

      ];

      var myChart = echarts.init(chartDom, null, {
        renderer: "canvas",
        useDirtyRect: false
      });


       var option = {
          title: {
              text: '12个月数据展示'
          },
          tooltip: {},
          xAxis: {
              type: 'category', // 因为是时间序列数据，所以使用类别轴
              data: data.map(item => item.month) // 将月份数据放入x轴
          },
          yAxis: {
              type: 'value' // 根据你的数据类型选择y轴类型，例如数值类型则选择'value'
          },
          series: [{
              data: data.map(item => item.value), // 将你的数据放入series中
              type: 'bar' // 使用折线图展示数据变化趋势，也可以选择其他图表类型如柱状图等。根据你的需求选择合适的图表类型。
          }]
      };

      option && myChart.setOption(option);
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
