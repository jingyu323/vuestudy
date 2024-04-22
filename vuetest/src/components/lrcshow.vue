<template>
  <div class="content">
    <button @click = "goback()">返回</button> <br>
    <audio   controls="controls"    type="audio/mpeg" preload="meta" >
      <source src="../assets/song/nanniandejing.mp3" />
    </audio>
    <div class="container">
      <ul class="lrc-list">

      </ul>
    </div>
  </div>
</template>

<script>
  import {AREANAME} from '../assets/data/nanniandejing.js'

  export default {
    name: 'lrcshow',
    data () {
      return {
        lrcDara: `[ver:v1.0]
[ti:难念的经 (《天龙八部》TVB剧主题曲)]
[ar:周华健]
[al:中港台电视剧主题曲大比拼]
[by:]
[00:00.000]难念的经 - 周华健 (Emil Wakin Chau)
[00:10.730]词：林夕
[00:21.470]曲：周华健
[00:32.219]笑你我枉花光心计
[00:34.908]爱竞逐镜花那美丽
[00:37.538]怕幸运会转眼远逝
[00:40.108]为贪嗔喜恶怒着迷
[00:42.688]责你我太贪功恋势
[00:45.218]怪大地众生太美丽
[00:47.848]悔旧日太执信约誓
[00:50.418]为悲欢哀怨妒着迷
[00:53.198]啊舍不得璀璨俗世
[00:58.288]啊躲不开痴恋的欣慰
[01:03.518]啊找不到色相代替
[01:08.718]啊参一生参不透这条难题
[01:13.848]吞风吻雨葬落日未曾彷徨
[01:16.318]欺山赶海践雪径也未绝望
[01:18.978]拈花把酒偏折煞世人情狂
[01:21.558]凭这两眼与百臂或千手不能防
[01:24.448]天阔阔雪漫漫共谁同航
[01:26.767]这沙滚滚水皱皱笑着浪荡
[01:29.367]贪欢一刻偏教那女儿情长埋葬
[01:34.786]吞风吻雨葬落日未曾彷徨
[01:37.266]欺山赶海践雪径也未绝望
[01:39.805]拈花把酒偏折煞世人情狂
[01:42.405]凭这两眼与百臂或千手不能防
[01:45.335]天阔阔雪漫漫共谁同航
[01:47.564]这沙滚滚水皱皱笑着浪荡
[01:50.164]贪欢一刻偏教那女儿情长埋葬
[02:16.641]笑你我枉花光心计
[02:19.201]爱竞逐镜花那美丽
[02:21.791]怕幸运会转眼远逝
[02:24.421]为贪嗔喜恶怒着迷
[02:27.091]责你我太贪功恋势
[02:29.731]怪大地众生太美丽
[02:32.251]悔旧日太执信约誓
[02:34.851]为悲欢哀怨妒着迷
[02:37.589]啊舍不得璀璨俗世
[02:42.549]啊躲不开痴恋的欣慰
[02:47.999]啊找不到色相代替
[02:53.129]啊参一生参不透这条难题
[02:58.209]吞风吻雨葬落日未曾彷徨
[03:00.729]欺山赶海践雪径也未绝望
[03:03.279]拈花把酒偏折煞世人情狂
[03:05.939]凭这两眼与百臂或千手不能防
[03:08.799]天阔阔雪漫漫共谁同航
[03:11.119]这沙滚滚水皱皱笑着浪荡
[03:13.649]贪欢一刻偏教那女儿情长埋葬
[03:19.159]吞风吻雨葬落日未曾彷徨
[03:21.599]欺山赶海践雪径也未绝望
[03:24.179]拈花把酒偏折煞世人情狂
[03:26.849]凭这两眼与百臂或千手不能防
[03:29.679]天阔阔雪漫漫共谁同航
[03:32.019]这沙滚滚水皱皱笑着浪荡
[03:34.569]贪欢一刻偏教那女儿情长埋葬
[03:39.989]吞风吻雨葬落日未曾彷徨
[03:42.509]欺山赶海践雪径也未绝望
[03:45.079]拈花把酒偏折煞世人情狂
[03:47.759]凭这两眼与百臂或千手不能防
[03:50.639]天阔阔雪漫漫共谁同航
[03:52.999]这沙滚滚水皱皱笑着浪荡
[03:55.499]贪欢一刻偏教那女儿情长埋葬
[04:00.929]吞风吻雨葬落日未曾彷徨
[04:03.399]欺山赶海践雪径也未绝望
[04:05.919]拈花把酒偏折煞世人情狂
[04:08.648]凭这两眼与百臂或千手不能防
[04:11.548]天阔阔雪漫漫共谁同航
[04:13.828]这沙滚滚水皱皱笑着浪荡
[04:16.418]贪欢一刻偏教那女儿情长埋葬`,
        lrc2:`难念的经 Lyrics[00:20]
难念的经 - 周华健[00:27]
笑你我枉花光心计[00:30]
爱竞逐镜花那美丽[00:33]
怕幸运会转眼远逝[00:37]
为贪嗔喜恶怒着迷[00:40]
责你我太贪功恋势[00:44]
怪大地众生太美丽[00:47]
悔旧日太执信约誓[00:50]
为悲欢哀怨妒着迷[00:54]
啊 舍不得璀灿俗世[01:00]
啊 找不到痴恋的欣慰[01:07]
啊 找不到色相代替[01:14]
啊 参一生参不透这条难题[01:20]
吞风吻雨葬落日未曾彷徨[01:24]
欺山赶海践雪径也未绝望[01:27]
拈花把酒偏折煞世人情狂[01:31]
凭这两眼与百臂或千手不能防[01:34]
天阔阔雪漫漫共谁同航[01:37]
这沙滚滚水皱皱笑着浪荡[01:40]
贪欢一刻偏教那女儿情长埋葬[01:47]
吞风吻雨葬落日未曾彷徨[01:51]
欺山赶海践雪径也未绝望[01:54]
拈花把酒偏折煞世人情狂[01:57]
凭这两眼与百臂或千手不能防[02:01]
天阔阔雪漫漫共谁同航[02:04]
这沙滚滚水皱皱笑着浪荡[02:08]
贪欢一刻偏教那女儿情长埋葬[02:28]
笑你我枉花光心计[02:32]
爱竞逐镜花那美丽[02:34]
怕幸运会转眼远逝[02:38]
为贪嗔喜恶怒着迷[02:42]
责你我太贪功恋势[02:45]
怪大地众生太美丽[02:48]
悔旧日太执信约誓[02:52]
为悲欢哀怨妒着迷[02:55]
啊 舍不得璀灿俗世[03:02]
啊 躲不开痴恋的欣慰[03:09]
啊 找不到色相代替[03:16]
啊 参一生参不透这条难题[03:22]
吞风吻雨葬落日未曾彷徨[03:26]
欺山赶海践雪径也未绝望[03:29]
拈花把酒偏折煞世人情狂[03:32]
凭这两眼与百臂或千手不能防[03:36]
天阔阔雪漫漫共谁同航[03:39]
这沙滚滚水皱皱笑着浪荡[03:42]
贪欢一刻偏教那女儿情长埋葬[03:49]
吞风吻雨葬落日未曾彷徨[03:52]
欺山赶海践雪径也未绝望[03:56]
拈花把酒偏折煞世人情狂[03:59]
凭这两眼与百臂或千手不能防[04:03]
天阔阔雪漫漫共谁同航[04:06]
这沙滚滚水皱皱笑着浪荡[04:09]
贪欢一刻偏教那女儿情长埋葬[04:19]`


      }
    },
    mounted() {
    console.log(AREANAME)

     this.createLrcElement()

     this.setLrcStatus()
       // document.write(this.lrcDara1)
    },
    methods: {
      parseLrcNew(){
        let  result = [];
        let lines = this.lrc2.split("\n");
        let _this = this
        lines.forEach(line =>{
          let strs = line.split("[")
          let timepart = strs[1].substring(0,strs[1].length-1)
          // console.log(timepart)
          let lrcObj = {
            time: this.parseTime(timepart) ,
            words:strs[0]
          }


          result.push(lrcObj)
        })
        return result;
      },
      parseLrc(){
        let  result = [];
         let lines = this.lrcDara.split("\n");
         lines.forEach(line =>{
            let strs = line.split("]")
            let timepart = strs[0].substring(1)
            if(strs[1]==""){
              var tps = timepart.split(":")
              if(  parseInt(tps[0])  || parseInt(tps[1]) ){
                let lrcObj = {
                  time: this.parseTime(timepart)  ,
                  words:''
                }
                result.push(lrcObj)
              }else{
                let lrcObj = {
                  time: 0 ,
                  words:timepart
                }
                result.push(lrcObj)
              }


            }else{
             let lrcObj = {
               time: this.parseTime(timepart) ,
               words:strs[1]
             }
             result.push(lrcObj)
            }

         })
         return result;
      },
      /**
       * @param {Object} 时间字符串转为数字
       */
      parseTime(timeStr){
        let parts = timeStr.split(":");
        if(timeStr==""){
           return 0;
        }
        return +parts[0]*60 + +parts[1]

      },
      findIndex(time){
         // let time= document.querySelector('audio').currentTime
          let  lrcData = this.parseLrc();
          for(var i=0;i<lrcData.length;i++){
            if(time < lrcData[i].time){
              if(i-1 < 0){
                return  0
              }
              return i-1 ;
            }
          }

          return lrcData.length-1;
      },
      createLrcElement(){
         let ul= document.querySelector('ul')
         let  lrcData = this.parseLrc();
         let frag = document.createDocumentFragment();
         for(var i=0;i<lrcData.length;i++){
            let li = document.createElement('li')
            li.textContent = lrcData[i].words;
            frag.appendChild(li)
         }
         ul.appendChild(frag)
        let li = ul.children[0];
        if(li){
          li.classList.add("active")
        }

      },
      setOffset(lineHeight,containerHeight,maxoffset,time){
        let index = this.findIndex(time);
        console.log(index)
        var offset = lineHeight * index - 130;
        if(offset < 0){
          offset = 0;
        }
        if(offset > maxoffset){
           offset = maxoffset ;
        }
         var uls= document.querySelector('ul');
        uls.style.transform = "translateY(-" + offset + "px)";
        var li = document.querySelector('.active')
        if(li){
          li.classList.remove("active")
        }
        let li2 = uls.children[index];
        if(li2){
          li2.classList.add("active")
        }


      },
      setLrcStatus(){
         var ul= document.querySelector('ul')
        let lineHeight =ul.children[0].clientHeight;
        let container= document.querySelector('.container')
        let containerHeight =container.clientHeight;
        let maxoffset = ul.clientHeight;
        let _this= this;


        var audio =  document.querySelector('audio');
        audio.addEventListener('timeupdate', function() {
          var duration = audio.currentTime;
          _this.setOffset(lineHeight,containerHeight,maxoffset,duration)
        });
      },
        goback: function () {
          window.history.back()
        },



    }
  }
</script>

<style  >

*{
  margin: 0;
  padding: 0;
}
body{
   background-color: #000;
   color: #666;
}
audio{
  width: 450px;
  margin: 30px  0;
}
.container{
  height: 420px;
  overflow: hidden;
}
.container ul{
  transition: 0.2s;

}

.container li{
  height: 30px;
  line-height: 30px;
  transition: 0.2s;
}
.container li.active{
  color: #fff;
  transform: scale(2.2);

}


</style>
