<template>
  <div  >
    <h1>{{ msg }}</h1>
    <h2>btn  file </h2>
    <button @click = "goback()">返回</button> <br>
    <div class="main">
      <!-- 容器 -->
      <div id="container" class="container">
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Btn1',
    data () {
      return {
        msg: 'this is the btn file '
      }
    },mounted () {
      this.init()
    },
    methods: {
      goback: function () {
        window.history.back()
      },
      init(){
        var container = document.getElementById("container");
        var deg = 0;
        container.onclick = function(e){
          deg = deg + 40;
          container.style.transform = `rotateY(${deg}deg)`;
        }
      }

    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  >
  .main{
    width: 900px;
    min-height: 100px;
    margin:0 auto;
    padding: 100px 50px;
    background-color: #f0f0f0;
    box-shadow: inset 0 0 3px rgba(0,0,0,.35);

    position: relative;
    top: 0;

    display: flex;
    justify-content: center;
  }

  .container{
    width: 128px;
    height: 100px;

    position: relative;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: -webkit-transform 1s;
    -moz-transition: -moz-transform 1s;
    transition: transform 1s;

  }

  .inner{
    width: 128px;
    height: 100px;
    box-shadow: 0 1px 3px rgba(0,0,0,.5);

    position: absolute;
    bottom: 0;
  }

  .inner:nth-child(1) { transform: rotateY(   0deg ) translateZ(200px);background-color: #ccffff; }
  .inner:nth-child(2) { transform: rotateY(  40deg ) translateZ(200px);background-color: #ccccff; }
  .inner:nth-child(3) { transform: rotateY(  80deg ) translateZ(200px);background-color: #99ffff; }
  .inner:nth-child(4) { transform: rotateY( 120deg ) translateZ(200px);background-color: #99ffcc; }
  .inner:nth-child(5) { transform: rotateY( 160deg ) translateZ(200px);background-color: #ffccff; }
  .inner:nth-child(6) { transform: rotateY( 200deg ) translateZ(200px);background-color: #ffcccc; }
  .inner:nth-child(7) { transform: rotateY( 240deg ) translateZ(200px);background-color: #ffffcc; }
  .inner:nth-child(8) { transform: rotateY( 280deg ) translateZ(200px);background-color: #ccff00; }
  .inner:nth-child(9) { transform: rotateY( 320deg ) translateZ(200px);background-color: #99ff00; }

</style>
