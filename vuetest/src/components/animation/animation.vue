<template>
  <div>
    <h2>dot test file</h2>
    <button @click="goback()">返回</button>
    <main>
      <label for="">
        <input type="checkbox"  v-model="visible" @change="changestatus()">
        visible {{visible}}
      </label>
      <transition>
      <p    v-if="visible">Fade In And Out 看看淡入淡出效果</p>
      </transition>


      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="show"  v-show="visible">
          明月几时有?把酒问青天
        </div>
      </transition>



    </main>

    <div>
      <transition name="fade">
        <p v-if="visible">hello</p>
      </transition>
    </div>

    <div class="box">
      <button @click="isShow = !isShow">切换</button>
      <!-- 用 transition 包裹一下,取个名字run，类名的前缀就是run-->
      <transition name="run">
        <!-- 内部元素或组件的显示和隐藏，会触发transition效果 -->
        <div v-if="isShow">
          <span>123123123123</span>
        </div>
      </transition>
    </div>



  </div>

</template>

<script>
  export default {
    name: 'animation',
    data() {
      return {
        msg: "this is  echartdot  file ",
        visible:true,
        isShow:true
      };
    },
    methods:{
      goback: function() {
        window.history.back();
      },
      changestatus(){

        console.log(this.visible)

      },
      beforeEnter: function (el) {
        console.log("beforeEnter");
        // 当入场之前会执行 v-enter
        el.style = "padding-left:100px";
      },
      enter: function (el, done) {
        // 当进行的过程中每执行 v-enter-active
        console.log("enter");
        // 为了能让代码正常进行，在设置了结束状态后必须调用一下这个元素的
        // offsetHeight / offsetWeight  只是为了让动画执行
        el.offsetHeight;
        // 结束的状态最后写在enter中
        el.style = "padding-left:0px";
        // 执行done继续向下执行
        done();
      },
      afterEnter: function (el) {
        // 当执行完毕以后会执行
        console.log("afterEnter");
        //this.isshow = false;
      }

    }
  }
</script>


<style scoped>

        .show {
    transition: all 0.5s;
  }
        .fade-enter-active, .fade-leave-active {
          transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to{
          opacity: 0;
        }

        /*// 元素开始进入的状态 | 元素离开结束的状态*/
           .run-enter-from,
           .run-leave-to {
             opacity: 0;
           }
        /*// 元素进入结束的状态 ｜ 元素开始离开的状态。     这里不写也可以！！！！！！*/
           .run-enter-to,
           .run-leave-from {
             opacity: 1;
           }
        /*// 元素进入 ｜ 结束时，过渡的效果*/
           .run-enter-active,
           .run-leave-active {
           // 过渡动画的使用
           transition: opacity 2s linear 0s;
           }

        .run-enter-active {
          animation: run-scale 1s linear 0s;
        }
        /*// 离开的时候设置成相反哒*/
           .run-leave-active {
             animation: run-scale 1s linear 0s reverse;
           }
        @keyframes run-scale {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }



           .run-enter-from,
           .run-leave-to {
             opacity: 0;
           }

           .run-enter-to,
           .run-leave-from {
             opacity: 1;
           }
        /*// 元素进入 ｜ 结束时，过渡的效果*/
           .run-enter-active,
           .run-leave-active {

           transition: opacity 2s linear 0s;
           }
        .run-enter-active {
          animation: run-scale 2s linear 0s;
        }
        /*// 离开的时候设置成相反哒*/
           .run-leave-active {
             animation: run-scale 2s linear 0s reverse;
           }
        @keyframes run-scale {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }
</style>
