/* eslint-disable */ 
<template>
  <div  style="height:900px;">
    <h2>dot  single aix   file </h2>
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
      var chartDom = document.getElementById('container');

      console.log(chartDom);
      // var myChart = echarts.init(chartDom);

      var myChart = echarts.init(chartDom, null, {
        renderer: "canvas",
        useDirtyRect: false,
      });
      var option;

      var dom = document.getElementById('container');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    // prettier-ignore
const hours = [
    '12a', '1a', '2a', '3a', '44', '55', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p', '12a', '12a', '13a', '144', '155', '16a',
    '17a', '18a', '19a', '110a', '111a',
    '112p', '21p', '22p', '23p', '24p', '25p',
    '26p', '27p', '28p', '29p', '210p', '211p', '12a', '1a', '2a', '3a', '44', '55', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p', '12a', '12a', '13a', '144', '155', '16a',
    '17a', '18a', '19a', '110a', '111a',
    '312p', '321p', '322p', '323p', '324p', '325p',
    '326p', '327p', '328p', '329p', '3210p', '3211p',
    '412p', '521p', '622p', '523p', '424p', '425p',
    '426p', '427p', '428p', '429p', '4210p', '4211p'
];
// prettier-ignore
const days = [
    'Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'
];
// prettier-ignore
const data = [[0, 0, 11], [0, 1, 11], [0, 2, 11], [0, 3, 15], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], 
[6, 23, 6]];
const title = [];
const singleAxis = [];
const series = [];
const singleAxisIndexArr = [];


days.forEach(function (day, idx) {
  title.push({
    textBaseline: 'middle',
    top: ((idx + 0.5) * 100) / 7 + '%',
    text: day
  });
  singleAxis.push({
    left: 150,
    type: 'category',
    boundaryGap: false,
    data: hours,
    top: (idx * 100) / 7 + 5 + '%',
    height: 100 / 7 - 10 + '%',
    axisLabel: {
      interval: 0
    }
  });
  singleAxisIndexArr.push(idx);
  series.push({
    singleAxisIndex: idx,
    coordinateSystem: 'singleAxis',
    type: 'scatter',
    data: [],
    symbolSize: function (dataItem) {
      return dataItem[1] * 4;
    },
	 
	 label: {
                emphasis: {
                    show: false,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
	
  });
});
data.forEach(function (dataItem) {
  series[dataItem[0]].data.push(["55", dataItem[2]]);
});
option = {
 
  tooltip: {
    show: false,  //是否显示提示框组件
    trigger: 'item',  //触发类型，属性值：item数据项触发/axis坐标轴触发/none不触发
    axisPointer: {
        type: 'line',  //指示器类型，属性值：line直线/shadow阴影/none/cross十字准星
        axis: 'auto',  //指示器坐标轴，属性值：x/y/radius/angle
        snap: true,  //坐标轴指示器是否自动吸附到点上。默认自动判断，布尔值
        z: 0,  //坐标轴指示器z值，控制图形的前后顺序，属性值：number
        label: {
            show: false,  //是否显示文本标签
            precision: 'auto',  //文本标签中数值小数点精度。默认根据当前轴的值自动判断
            formatter: {},  //文本标签文字格式化器
            margin: 3,  //label距离轴的距离
            color: '#fff',  //颜色，文章链接如下  Echart图表之颜色color配置项大全/
            fontStyle: '',  
            fontWeight: '',  
            fontFamily: '',  
            fontSize: 12,  
            lineHeigh: 20,  
            width: 20,  
            height: 100,  
            textBorderColor: '',  //文字本身描边颜色
            textBorderWidth: '',  //文字本身描边宽度
            textBorderType: 'solid',  //文字本身描边类型，属性值：solid/dashed/dotted/number/array
            textBorderDashOffset: 0,  //虚线偏移量，搭配textBorderType指定dashed/array实现虚线效果
            textShadowColor: 'transparent',  //文字本身阴影颜色
            textShadowBlur: 0,  //文字本身的阴影长度
            textShadowOffsetX: 0,  //文字本身的阴影 X 偏移
            textShadowOffsetY: 0,  //文字本身的阴影 Y 偏移
            overflow: 'none',  //文字超出宽度是否截断或换行,配置width时有效,truncate/break/breakAll
            ellipsis: '',  //在overflow配置为'truncate'的时候，可以通过该属性配置末尾显示的文本
            padding: 0,  
            backgroundColor: 'auto',  //背景颜色，默认是和axis.axisLine.lineStyle.color 相同
            borderColor: '',  //文本标签的边框颜色
            borderWidth: 0,  //文本标签的边框宽度
            shadowBlur: 3,  //图形阴影模糊大小，配合shadowColor,shadowOffsetX,shadowOffsetY设置阴影效果
            shadowColor: '#aaa',  //阴影颜色，支持的格式同color
            shadowOffsetX: 0,  //阴影水平方向上的偏移距离
            shadowOffsetY: 0  //阴影垂直方向上的偏移距离
        },
        lineStyle: {
            color: '#555',  //颜色，文章链接如下  Echart图表之颜色color配置项大全/
            width: 1,  //线宽
            type: 'solid',  //线的类型，属性值：solid/dashed/dotted/number/array
            dashOffset: 0,  //虚线偏移量，搭配type指定dashed/array实现虚线效果
            cap: 'butt',  //线段末端的绘制，butt方形/round圆形/square也是方形效果与butt不同
            join: 'bevel',  //设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性，bevel默认/round/miter
            miterLimit: 10,  //设置斜接面限制比例，只有当join为miter才有效，属性值：10默认值/number
            shadowBlur: 10,  //阴影模糊大小，该属性配合shadowColor/shadowOffsetX/shadowOffsetY一起设置图形的阴影效果
            shadowColor: '',  //阴影颜色，支持的格式同color
            shadowOffsetX: 0,  //阴影水平方向上的偏移距离
            shadowOffsetY: 0,  //阴影垂直方向上的偏移距离
            opacity: 1  //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
        },  
        shadowStyle: {
            color: '#fff',  //颜色，文章链接如下  Echart图表之颜色color配置项大全/
            shadowBlur: 10,  
            shadowColor: '',  
            shadowOffsetX: 0,  
            shadowOffsetY: 0,  
            opacity: 1
        },  
        crossStyle: {
            color: '#fff',  //颜色，文章链接如下  Echart图表之颜色color配置项大全/
            shadowBlur: 10,  
            shadowColor: '',  
            shadowOffsetX: 0,  
            shadowOffsetY: 0,  
            opacity: 1
        },  
        animation: 'line',  //是否开启动画
        animationThreshold: 2000,  //是否开启动画的阈值
        animationDuration: 1000,  //初始动画的时长，支持回调函数
        animationEasing: 'cubicOut',  //初始动画的缓动效果
        animationDelay: 0,  //初始动画的延迟，支持回调函数
        animationDurationUpdate: 200,  //数据更新动画的时长，支持回调函数
        animationEasingUpdate: 'exponentialOut',  //数据更新动画的缓动效果
    },
    showContent: true,  //是否显示提示框浮层，默认显示
    alwaysShowContent: false,  //是否永远显示提示框内容
    triggerOn: 'mousemove|click',  //提示框触发条件，mousemove/click/mousemove|click/none。none时可通过action.tooltip.showTip和action.tooltip.hideTip来手动触发和隐藏。也可通过axisPointer.handle来触发或隐藏
    showDelay: 0,  //浮层显示的延迟，默认0ms
    hideDelay: 100,  //浮层隐藏的延迟
    enterable: false,  //鼠标是否可进入提示框浮层中，默认为false
    renderMode: 'html',  //浮层的渲染模式，html默认/richText富文本形式
    confine: false,  //是否将 tooltip 框限制在图表的区域内
    appendToBody: false,  //是否将组件DOM节点添加为HTML的<body>子节点。只有当renderMode为html有意义
    className: 'echarts-tooltip echarts-tooltip-dark',  //指定tooltip的DOM节点CSS类，只在html模式下生效
    transitionDuration: 0.4,  //提示框浮层的移动动画过渡时间，单位是s
    position: [],  //提示框浮层的位置
   // formatter: ()=>{},  //提示框浮层内容格式器，用这个可以修改提示框默认内容/
    //valueFormatter: (value: number | string) => string,  //数值显示部分的格式化回调函数
    backgroundColor: '',  //背景颜色，格式同color
    borderColor: '',  //提示框浮层边框颜色，格式同color
    borderWidth: 0,  //提示框浮层的边框宽
    padding: 5,  
    textStyle: {
        color: '#fff',  //颜色，文章链接如下  Echart图表之颜色color配置项大全/
        fontStyle: '',
        fontWeight: '',
        fontFamily: '',
        fontSize: 14,
        lineHeight : 20,
        width: 220,
        height: 20,
        textBorderColor: '',  //文字本身的描边颜色
        textBorderWidth: '',  //文字本身的描边宽度
        textBorderType: 'solid',  //文字本身描边类型，属性值：solid/dashed/dotted/number/array
        textBorderDashOffset: 0,  //虚线偏移量，可搭配textBorderType指定dashed/array实现灵活的虚线效果
        textShadowColor: 'transparent',  //文字本身阴影颜色
        textShadowBlur: 0,  //文字本身阴影长度
        textShadowOffsetX: 0,  //文字本身阴影 X 偏移
        textShadowOffsetY: 0,  //文字本身阴影 Y 偏移
        overflow: 'none',  //文字超出宽度是否截断或者换行，配置width时有效，属性值：truncate/break/breakAll
        ellipsis: '',  //在overflow配置为'truncate'的时，该属性配置末尾显示文本
        rich: {},  //自定义富文本样式
    },  
    extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',  //额外附加到浮层的 css 样式
    order: 'seriesAsc'  //多系列提示框浮层排列顺序，seriesAsc默认/seriesDesc/valueAsc/valueDesc
},
  dataZoom: [ {   // 这个dataZoom组件，默认控制x轴。
                               type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
							   singleAxisIndex: singleAxisIndexArr,
                               start: 10,      // 左边在 10% 的位置。
                               end: 70         // 右边在 60% 的位置。
                           }


                       ],
  title: title,
  singleAxis: singleAxis,
  series: series,
   
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);

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
