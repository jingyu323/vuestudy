

## 配置项的写法与位置

- **位置不同**：在了解Echart的配置项时，有的属性可以在option中**全局配置**，也可以**局部配置**。
- **写法不同**：另外配置项有时候是**对象**，有的时候是**数组**，也可以是**函数**。
- 出现的位置不同代表的含义不同，但是你会发现即使形式或者位置不同但是它使用起来是一样的，下面我就以`color`为例演示一下

1. 全局配置color且为数组类型。

JavaScript

```javascript
option = {
  /这就是颜色的全局配置，但是如果不配置颜色echart有默认颜色这里不详解就是理解概念/
  color: ['red', 'green']    // 配置颜色会把默认颜色覆盖
}
```

2.局部配置color

JavaScript

```javascript
option = {
  title: {
    textStyle: {
      color: 'red'    // 这里代表字体颜色是红色
    }
  }
}
```

3.对象格式color

JavaScript

```javascript
color: {    /这里是线性渐变颜色，这里理解即可不做详解/
  type: 'linear',
  x: 1,
  y: 0,
  x2: 0,
  y2: 0,
  colorStops: [{
    offset: 0,
    color: 'rgba(240,47,194,0.7)'// 0%处的颜色
  }, {
    offset: 1,
    color: 'rgba(149,111,212,0.7)' // 100%处的颜色
  }]
}
```

# 二、配置项option包含属性

JavaScript

```javascript
option = {
  title: {},    //标题，如有副标题可以写成数组
  color: [],    //颜色
  backgroundColor: '',  //背景色
  darkMode: '',  //是否是暗黑模式
  dataZoom: [],    // 
  dataset: [{}],     //数据集合
  toolbox: {},    // 
  tooltip: {},    //提示框
  grid: {},     //图表上下左右距离盒子的距离
  xAxis: {},    //x轴
  yAxis: {},    //y轴
  series: [{
    type: '' //graph关系图，line折线图，bar柱形图，boxplot箱体图等
  }],
  graphic: [],
  baseOption: {},
  legend: {},    //控制图例组件
  calculable: '',
  options: [],
  brush: {},
  animation: true,    //是否开启动画，布尔值
  animationThreshold: 2000,    //
  animationDuration: 1000,    //
  animationEasing: 'cubicOut',    //
  animationDelay: 0,  //初始动画的延迟，支持回调函数
  animationDurationUpdate: 300,  //数据更新动画的时长，支持回调函数
  animationEasingUpdate: 'cubicInOut',  //数据更新动画的缓动效果
  animationDelayUpdate: 0,  //数据更新动画的延迟，支持回调函数
  blendMode: '',  //图形的混合模式
  hoverLayerThreshold: 3000,  /**图形数量阈值**/
  useUTC: false,  //是否使用UTC时间
  options: '',
]}；
```

上述配置项具体作用请参考下面?三、各个配置项属性大全其余比较复杂的属性我会用单独的文章讲解

# 三、各个配置项属性大全



| 配置项                  | 作用                         | 说明                                                         |
| ----------------------- | ---------------------------- | ------------------------------------------------------------ |
| title                   | 标题组件，包含主标题和副标题 | **?详情参考文章：[Echart图表 之 title配置项大全](https://blog.csdn.net/weixin_55181759/article/details/124838942)** |
| color                   | 调色盘颜色列表               | 可以全局配置，也可以局部配置，**?详情参考文章：[Echart图表 之 颜色color配置项大全](https://blog.csdn.net/weixin_55181759/article/details/124877277)** |
| legend                  | 图例组件                     | 效果如图![在这里插入图片描述](https://img-blog.csdnimg.cn/38947bbb42424c23a2f969f3b057b2d8.png#pic_center)**?详情参考文章：[Echart图表 之 legend图例组件配置项大全](https://blog.csdn.net/weixin_55181759/article/details/124889128)** |
| xAxis/xAxis             | X/Y轴组件                    | **?详情参考文章：[Echart图表 之 X轴（xAxis）与 Y轴（yAxis）配置项大全](https://blog.csdn.net/weixin_55181759/article/details/124835864)** |
| backgroundColor         | 背景色                       | 默认无背景支持使用`rgb(255,255,255)，rgba(255,255,255,1)，#fff`等方式设置 |
| darkMode                | 是否是暗黑模式               | 默认会根据backgroundColor亮度自动设置。如果设置了容器背景色而无法判断到，就可以使用该配置手动指定，echarts会根据是否是暗黑模式调整文本等的颜色。该配置常用于主题中 |
| animation               | 是否开启动画                 | 布尔值                                                       |
| animationThreshold      | 是否开启动画的阈值           | 当单个系列显示的图形数量大于这个阈值时会关闭动画             |
| animationDuration       | 初始动画时长                 | 可以通过每个数据返回不同的时长实现更戏剧初始动画效果，支持回调函数`animationDuration: function (idx) {return idx * 100}` |
| animationEasing         | 初始动画缓动效果             | 属性值`cubicOut`                                             |
| animationDelay          | 初始动画延迟                 | 可以通过每个数据返回不同的delay时间实现更戏剧的初始动画效果，毫秒，支持回调函数 |
| animationDurationUpdate | 数据更新动画的时长           | 毫秒，支持回调函数                                           |
| animationEasingUpdate   | 数据更新动画的缓动效果       | 属性值`cubicInOut`                                           |
| animationDelayUpdate    | 数据更新动画的延迟           | 毫秒，支持回调函数                                           |
| blendMode               | 图形的混合模式               | 默认为`source-over`。支持每个系列单独设置。`lighter`也是比较常见的一种混合模式，该模式下图形数量集中的区域会颜色叠加成高亮度的颜色（白色）。常常能起到突出该区域的效果 |
| hoverLayerThreshold     | 图形数量阈值                 | 这个我没看懂，后续更新~~~~                                   |
| useUTC                  | 是否使用UTC时间              | `true`表示axis.type为time时，依据UTC时间确定tick位置，并且 axisLabel和tooltip默认展示的是UTC时间，`false`则依据的是本地时间 |
| options                 |                              | 用于timeline的option数组，数组每一项是一个echarts option     |
| tooltip                 | 提示框组件                   | **?详情参考文章：[Echart图表 之 tooltip提示框组件配置项大全](https://blog.csdn.net/weixin_55181759/article/details/124924555)** |
| toolbox                 | 工具栏组件                   | 效果如图：![工具栏组件](https://img-blog.csdnimg.cn/6ae2347d4f76485a955765cd55761ecd.png#pic_center)**?详情参考文章：[Echart图表 之 toolbox工具栏组件配置项大全](https://blog.csdn.net/weixin_55181759/article/details/124962847)** |

# 二、Echart图表 之 title配置项大全



title就是图表标题，可以控制它的属性，如颜色、位置等，**当有副标题的时候title有两种写法**，可以写为数组或对象，下面我就以对象形式整理title的配置项，以数组形式写例子。

JavaScript

```javascript
title: {
  show: true,    // 是否显示标题组件,（true/false）
  text: '',   // 主标题文本，支持使用\n换行
  textAlign:'auto',    //整体水平对齐（包括text和subtext）
  textVerticalAlign:'auto',//整体的垂直对齐（包括text和subtext）
  padding:0,    // 标题内边距 写法如[5,10]||[ 5,6, 7, 8] ,
  left:'auto',    // title组件离容器左侧距离，写法如'5'||'5%'
  right:'auto',    //'title组件离容器右侧距离
  top:'auto',    // title组件离容器上侧距离
  bottom:'auto',    // title组件离容器下侧距离
  borderColor: '',     // 标题边框颜色
  borderWidth: 1,    // 边框宽度（默认单位px）
  textStyle: {    // 标题样式
    color: '',    //字体颜色
    fontStyle: '',    //字体风格
    fontSize: 14,    //字体大小
    fontWeight: 400,    //字体粗细
    fontFamily: '',    //文字字体
    lineHeight: ''    //字体行高
    align:'center',//文字水平对齐方式（left/right）
    verticalAlign:'middle',//文字垂直对齐方式（top/bottom）
  },
  subtext: '',    // 副标题
  subtextStyle: {    // 副标题样式
    color: '#ccc', 
    fontStyle:'normal',
    fontWeight:'normal',
    fontFamily:'sans-serif',
    fontSize:18,
    lineHeight:18,
    }
}
```



```javascript
  title: [
    { // 标题
      text: 'Michelson-Morley Experiment',
      left: 'center'
    },
    { // 副标题
      text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',     // '/n'代表换行
      borderColor: '#999', 
      borderWidth: 1, // 边框宽度（默认单位px）
      textStyle: { // 标题样式
        fontSize: 14
      },
      left: '10%', // 位置
      top: '90%' // 位置
    }
  ],
```

# 三、Echart图表 之 X轴（xAxis）与 Y轴（yAxis）配置项大全

xAxis与yAxis中有很多配置项，下面我以xAxis进行详解，yAxis参考xAxis即可

- **axisLine**：坐标轴轴线相关设置。
- **axisTick**：坐标轴刻度相关设置。
- **axisLabel**：坐标轴刻度标签的相关设置。
- **splitLine**： 坐标轴在 grid 区域中的分隔线设置。
- **splitArea** ：坐标轴在 grid 区域中的分隔区域，默认不显示。

上述xAxis与yAxis中的配置项，其中也会含有很多属性，具体使用请参考一下内容。

JavaScript

```javascript
xAxis: {
    show: true,    // 是否显示x轴
    position: 'top',    // x轴的位置（top/bottom） 
    type: 'category',    // 坐标轴类型，值category/value，与y轴呼应，若x轴配置category则y轴配置value
    nameRotate: 10,    // 坐标轴名字旋转，角度值
    inverse: false,    // 是否是反向坐标轴
    boundaryGap: ['20%', '20%'],    // 坐标轴两边留白策略，也可以使用布尔值，true居中
    splitNumber: 5,    // 坐标轴的分割段数（预估值）
    axisLine: {
        show: true,    // 是否显示坐标轴轴线
        symbol: ['none', 'arrow'],     // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
        symbolSize: [10, 15],     // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
        lineStyle: {
            color: '#333',    // 坐标轴线线的颜色
            width: '5',    // 坐标轴线线宽
            type: 'solid',    // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
        },
    },
    axisTick: {
        show: true,    // 是否显示坐标轴刻度
        inside: true,     // 坐标轴刻度是否朝内，默认朝外
        length: 5,    // 坐标轴刻度的长度
        lineStyle: {
            color: '#FFF',     // 刻度线的颜色
            width: 10,    // 坐标轴刻度线宽
            type: 'solid',    // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
        },
    },
    axisLabel: {
        show: true,     // 是否显示刻度标签
        interval: '0',    // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
        inside: true,   // 刻度标签是否朝内，默认朝外
        rotate: 90,   // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠；旋转的角度从-90度到90度
        margin: 10,    // 刻度标签与轴线之间的距离
        // formatter 刻度标签的内容格式器，支持字符串模板和回调函数两种形式
        color: '#FFF',     // 刻度标签文字的颜色
        fontStyle: 'normal',    // 字体的风格（normal无样式；italic斜体；oblique倾斜字体） 
        // 字体的粗细（normal无样式；bold加粗；bolder加粗再加粗；lighter变细；数字定义粗细也可以取值范围100至700）
        fontWeight: 'normal',    
        fontSize: '20',    // 文字字体大小
        align: 'left',     // 文字水平对齐方式，默认自动（left/center/right）
        verticalAlign: 'left',    // 文字垂直对齐方式，默认自动（top/middle/bottom)
        lineHeight: '50',    // 行高
        backgroundColor: 'red', // 文字块背景色，例：#123234, red, rgba(0,23,11,0.3)
    },
    splitLine: {
        show: true,    // 是否显示分隔线。默认数值轴显示，类目轴不显示
        interval: '0',    // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
        // color分隔线颜色，可设置单个颜色，也可设置颜色数组，分隔线会按数组中颜色顺序依次循环设置颜色
        color: ['#ccc'],    
        width: 3, // 分隔线线宽
        type: 'solid', // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
    },
    splitArea: {
        show: true, // 是否显示分隔区域
        interval: '0', // 坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
        areaStyle: {
            // color分隔区域颜色。分隔区会按数组中颜色顺序依次循环设置颜色。默认是一个深浅的间隔色
            color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'], 
            opacity: 1, // 图形透明度。支持从0到1的数字，为0时不绘制该图形
        },
    },
    data: {
        textStyle: {
            color: '#FFF', // 文字的颜色
            fontStyle: 'normal', // 文字字体的风格（normal无样式；italic斜体；oblique倾斜字体）
            // 字体的粗细（normal无样式；bold加粗；bolder加粗再加粗；lighter变细；数字定义粗细也可以取值范围100至700） 
            fontWeight: 'normal', 
            fontSize: '20', // 文字字体大小
            align: 'left', // 文字水平对齐方式，默认自动（left/center/right）
            verticalAlign: 'left', // 文字垂直对齐方式，默认自动（top/middle/bottom）
            lineHeight: '50',  // 行高
            backgroundColor: 'red', // 文字块背景色，例：#123234, red, rgba(0,23,11,0.3)
        },
    },
}
```

**Echarts常用折线和频谱以及三维散点图**

https://blog.51cto.com/u_13349380/5078293