<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>


    <div id="wrapper"></div>

   </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/chimee@0.12.0/lib/index.browser.js"></script>
<script>
import chimee from 'chimee';
import flv from 'chimee-kernel-flv';
import hls from 'chimee-kernel-hls';
// import kernelMp4 from 'chimee-kernel-mp4'
import chimeePluginControlbar from 'chimee-plugin-controlbar';
import chimeePluginDanmu from 'chimee-plugin-danmu';
import ChimeeKernel from 'chimee-kernel'
chimee.install(chimeePluginControlbar);
chimee.install(chimeePluginDanmu);
export default {
  name: 'HelloWorld2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      player: null,
      defaultData: {
        text: "你真的很漂亮",
        mode: "flow",
        fontSize: "big",
        color: "#fff",
      },
    }
  },
  mounted () {
    // this.xc()
    this.xc()
    // this.exportData();
  },
  methods:{
    xc () {
      // eslint-disable-next-line new-cap
      this.player = new chimee({
        wrapper: document.getElementById("wrapper"),//video dom容器
        src: '/static/07_30_00.mp4',//直播地址(我这个src是假的)
        controls: true, //是否展示控制条
        box: "native", //直播形式flv、native和hls
        // isLive: true, // 播放类型 false（点播）和 true（直播）
        autoplay: true,//是否自动播放
        //kernels是播放器核心解码器。因为体积问题，chimee 默认仅支持原生播放器，如果需要支持其余解码方式请引入相应的解码器。
        kernels: {
          flv,
          hls
        }
      });
      this.player.load();
  
    },
    cheePlayer(){
      this.player = new chimee({
        wrapper: document.getElementById("wrapper"), // video dom容器
        // src:'http://cdn.toxicjohann.com/lostStar.mp4',
        isLive:true,//是否直播
        src: 'rtmp://localhost:1935/mystream',
        controls: true,
        // 使用插件
        plugin: [
          {
            name: chimeePluginControlbar.name, // 或者 'chimeeControl'
            majorColor: "#FFF", //该插件中，所有的 svg 图 播放进度条，进度颜色 声音控制条，音量颜色
            hoverColor: "#9d9d4c", //鼠标放在svg上时的颜色,
            children: {
              play: {
                // 配置播放暂停键 icon 及事件
                bitmap: false,
                icon: {
                  play: "",
                  pause: "",
                },
              },
              progressTime: {
                //时间展示组件
              },
              progressBar: {
                //进度条控制组件
              },
              volume: {
                //   bitmap: false,
                //   icon: {
                //     play: "",
                //     pause: "",
                //   },
                layout: "vertical",
              },
              playbackrate: {
                //切换播放倍速组件
                list: [
                  { name: "0.5倍速", value: 0.5 },
                  { name: "0.75倍速", value: 0.75 },

                  { name: "1倍速", value: 1, default: true },
                  { name: "1.25倍速", value: 1.25 },
                  { name: "1.5倍速", value: 1.5 },
                  { name: "2倍速", value: 2 },
                ],
              },
              clarity: {
                //切换清晰度组件
                list: [
                  {
                    name: "标清",
                    src: "http://211.823/268769823.mp4",
                  },
                  {
                    name: "高清",
                    src: "http://211.94.3/268769823.mp4",
                  },
                  {
                    name: "原画",
                    src: "http://211.94/268769823/268769823.mp4",
                  },
                ],
              },
              screen: {
                //配置全屏／非全屏 icon 及事件
                icon: {
                  full: "",
                  small: "",
                },
              },
            },
          },
          // 'Barrages'
          {
            name: chimeePluginDanmu.name,
            mode: "css",
            lineHeight: "60",
            fontSize: "24",
            updateByVideo: true,
            event: {
              receiveData(){
                console.log('000')
              },
            },
          },
        ],
      });

    },
  }
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
.container {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
video {
  width: 100%;
  height: 100%;
  display: block;
  background-color: #000;
}
video:focus,
video:active {
  outline: none;
}
.chimee-flex-component svg {
  /* background-image: url('../assets/btn_play_5g.png'); */
  background-color: brown;
}
vue-baberrage{
  height: 40px;
  widows: auto;
}
.barrages-drop {
.baberrage-lane{
.blue .normal{
  border-radius: 100px;
  background: #e6ff75;
  color: #fff;
}
.green .normal{
  border-radius: 100px;
  background: #75ffcd;
  color: #fff;
}
.red .normal{
  border-radius: 100px;
  background: #e68fba;
  color: #fff;
}
.yellow .normal{
  border-radius: 100px;
  background: #dfc795;
  color: #fff;
}
.baberrage-stage {
  position: absolute;
  width: 100%;
  height: 212px;
  overflow: hidden;
  top: 0;
  margin-top: 130px;
}
}
}

</style>
