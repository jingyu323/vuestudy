<template>
  <div class="content">
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
        lrcDara: `[歌名:难念的经]
[作词:林夕]
[演唱:周华健]
[by:leiyang]
[00:00.87]难念的经
[00:06.21]
[00:11.53]演唱：林夕
[00:16.76]就爱歌词组www.90lrc.cn
[00:35.69]吞风吻雨葬落日未曾彷徨
[00:38.50]欺山赶海践雪径也未绝望
[00:40.93]拈花把酒偏折煞世人情狂
[00:43.51]凭这两眼与百臂或千手不能防
[00:46.07]天阔阔雪漫漫共谁同航
[00:48.64]这沙滚滚水皱皱笑着浪荡
[00:51.14]贪欢一刻偏教那女儿情长埋葬
[00:57.03]
[01:05.79]笑你我枉花光心计 爱竞逐镜花那美丽
[01:11.60]怕幸运会转眼远逝 为贪嗔喜恶怒着迷
[01:16.62]责你我太贪功恋势 怪大地众生太美丽
[01:21.61]悔旧日太执信约誓 为悲欢哀怨妒着迷
[01:26.80]啊 舍不得璀灿俗世 啊 躲不开痴恋的欣慰
[01:37.29]啊 找不到色相代替 啊
[01:44.69]参一生参不透这条难题
[01:47.10]吞风吻雨葬落日未曾彷徨
[01:49.73]欺山赶海践雪径也未绝望
[01:52.15]拈花把酒偏折煞世人情狂
[01:54.66]凭这两眼与百臂或千手不能防
[01:57.41]天阔阔雪漫漫共谁同航
[01:59.84]这沙滚滚水皱皱笑着浪荡
[02:02.42]贪欢一刻偏教那女儿情长埋葬
[02:07.50]
[02:07.83]吞风吻雨葬落日未曾彷徨
[02:10.04]欺山赶海践雪径也未绝望
[02:12.55]拈花把酒偏折煞世人情狂
[02:15.16]凭这两眼与百臂或千手不能防
[02:17.96]天阔阔雪漫漫共谁同航
[02:20.16]这沙滚滚水皱皱笑着浪荡
[02:22.68]贪欢一刻偏教那女儿情长埋葬
[02:27.57]
[02:49.70]笑你我枉花光心计 爱竞逐镜花那美丽
[02:55.88]怕幸运会转眼远逝 为贪嗔喜恶怒着迷
[03:00.96]责你我太贪功恋势 怪大地众生太美丽
[03:05.87]悔旧日太执信约誓 为悲欢哀怨妒着迷
[03:11.09]啊 舍不得璀灿俗世 啊 躲不开痴恋的欣慰
[03:21.33]啊 找不到色相代替 啊 参一生参不透这条难题
[03:31.44]吞风吻雨葬落日未曾彷徨
[03:34.03]欺山赶海践雪径也未绝望
[03:36.42]拈花把酒偏折煞世人情狂
[03:39.11]凭这两眼与百臂或千手不能防
[03:41.68]天阔阔雪漫漫共谁同航
[03:44.31]这沙滚滚水皱皱笑着浪荡
[03:46.70]贪欢一刻偏教那女儿情长埋葬
[03:50.94]吞风吻雨葬落日未曾彷徨
[03:54.43]欺山赶海践雪径也未绝望
[03:56.94]拈花把酒偏折煞世人情狂
[03:59.40]凭这两眼与百臂或千手不能防
[04:01.70]天阔阔雪漫漫共谁同航
[04:04.46]这沙滚滚水皱皱笑着浪荡
[04:07.08]贪欢一刻偏教那女儿情长埋葬
[04:12.69]`,
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
          let  lrcData = this.parseLrcNew();
          for(var i=0;i<lrcData.length;i++){
            if(time < lrcData[i].time){
              // if(i-1 < 0){
              //   return  0
              // }
              return i ;
            }
          }

          return lrcData.length-1;
      },
      createLrcElement(){
         let ul= document.querySelector('ul')
         let  lrcData = this.parseLrcNew();
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
      }



    }
  }
</script>

<style   >

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
