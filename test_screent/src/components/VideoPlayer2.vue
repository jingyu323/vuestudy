<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="player">
      <video-player
        class="video-player vjs-custom-skin"
        ref="filePlayer"
        v-if="playerShow"
        :playsinline="true"
        :options="playerOptions"
        @error="handleError"
        @play="handlePlay($event)"
        @canplay="canplay($event)"
        @ended="handleEnded" 
      >
      </video-player>
    </div>

   </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/chimee@0.12.0/lib/index.browser.js"></script> 
<script>
 
import { videoPlayer } from "vue-video-player";
 
 
export default {
  name: 'HelloWorld2',
  components: {
    videoPlayer
  },
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
      playerShow: true,
      cur:0,
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            // src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", //你的视频地址（必填）
            src: "/static/07_36_47.mp4"
          }
        ],
        poster: "", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试" //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      }
    }
  },
  mounted () {
    // this.xc()
    // this.videoToggle()

    setTimeout(() => {
      this.videoToggle();  // 使用 setTimeout 是关键
    },1);
    // this.exportData();
  },
 
  methods:{
    canplay(player){
      this.player = player;
      // this.duration = ;
      console.log(player.duration());
    },
    videoToggle( ) {
      this.$refs.filePlayer.player.play();
    },
    handleError(e) {
    console.log('视频出错', e);
    console.log(e.currentTime());

    console.log("视频出错", e);
      console.log(e.currentTime());
      let cur = e.currentTime() + 2;
        if (cur > e.duration()) {
          cur = e.duration();
        }
      this.playerShow = false;
      this.$nextTick(() => {
        this.playerShow = true;
        console.log(cur,this.player)
        this.player.play();
        this.cur = cur;
      });
// 自动播放

    // setTimeout(() => {
    //     this.$refs.filePlayer.player.play();
    //   }, 0);
 
     
  },
  handlePlay(player) {
    this.player = player;
    if(this.cur){
      this.player.currentTime(this.cur);
    }
    
    console.log('视频...', player);
    // 执行其他操作
  },
  handleEnded(){
    this.cur = 0;
    },
    cheePlayer(){
      this.cur = 0;
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
