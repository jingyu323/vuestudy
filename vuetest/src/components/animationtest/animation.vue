<template>
  <div >
    <div class="houselight">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
</div>

     <div class=""></div>

  </div>
</template>

<script>
</script>

<style  >
  .houselight{
    width: 100%;
    height: 800px;
    background-image: linear-gradient(76.8deg,rgb(121,45,129) 3.6%,rgb(36,31,98) 90.4%);
  }
  ul{
    list-style: none;
    width: 400px;
    height: 400px;
    margin: 0 auto;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-5deg);
    animation: spin 30s infinite linear;

  }
  @keyframes spin{
    to {
      transform: rotateX(-5deg) rotateY(360deg);
    }
  }
  ul:hover{
    animation-play-state: paused;
  }

  li{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  li:nth-child(1){
    transform: translateZ(600px);
    background: url(../../assets/liangzai2.jpg) no-repeat;
    background-size: 400px 400px;
  }
  li:nth-child(2){
    transform: translateZ(-600px) rotateY(180deg);
    background: url(../../assets/img/img1.jpg) no-repeat;
    background-size: 400px 400px;
  }
  li:nth-child(3){
    transform: rotateY(60deg)  translateZ(-600px);
    background: url(../../assets/img/img3.jpg) no-repeat;
    background-size: 400px 400px;
  }
  li:nth-child(4){
    transform: rotateY(60deg)  translateZ(600px);;
    background: url(../../assets/img/img6.jpg) no-repeat;
    background-size: 400px 400px;
  }
  li:nth-child(5){
    transform:rotateY(-60deg)  translateZ(-600px);;
    background: url(../../assets/img/img4.jpg) no-repeat;
    background-size: 400px 400px;
  }
  li:nth-child(6){
    transform: rotateY(-60deg) translateZ(600px);;
    background: url(../../assets/img/img11.jpg) no-repeat;
    background-size: 400px 400px;
  }

</style>
