<template>
  <div class="content">
    <div class="avatar"></div>
    <div class="container">
      <img src="../assets/img/img1.jpg"/>
      <img src="../assets/img/img2.jpg"/>
      <img src="../assets/img/img3.jpg"/>
      <img src="../assets/img/img4.jpg"/>
      <img src="../assets/img/img5.jpg"/>
      <img src="../assets/img/img6.jpg"/>
      <img src="../assets/img/img7.jpg"/>
      <img src="../assets/img/img8.jpg"/>
      <img src="../assets/img/img9.jpg"/>
      <img src="../assets/img/img10.jpg"/>
      <img src="../assets/img/img11.jpg"/>
     <img src="../assets/img/img12.jpg"/>
    </div>

  </div>

</template>

<script>
export default {
  name: 'avatartest',
  data () {
    return {

    }
  }
}
</script>

<style scoped >
  .content{
     text-align: center;

  }
  .content .avatar{
    background: url("../assets/liangzai2.jpg" )  center/cover  ;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    position: relative;
  }
  .avatar::before,.avatar::after{
    content: '';
    position: absolute;
    border-radius: 50%;
    inset: 0;
  }
  .avatar::before{
    background: rgba(0,0,0,0.7);
  }
  .avatar::after{
    background: inherit;
    clip-path: circle(0% at 50%  50% );
    transition: 0.8s;
  }
  .avatar:hover::after{
    background: inherit;
    clip-path: circle(50% at 50%  50% );
  }
  .container{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
    grid-template-rows: masonry;
    img{
      width: 400px;
      /* height: 50%; */
      display: block;
    }

  }


</style>
