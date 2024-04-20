<template>
  <div>

      <div class="container">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>

      </div>
    <button @click = "goback()">返回</button> <br>
  </div>

</template>

<script>
  export default {
    name: 'ninesquare',
    methods: {
      goback: function () {
        window.history.back()
      },
      paramBack: function () {
        this.$router.push({name: 'HelloWorld', params: {id: '1'}})
      },
      queryBack: function () {
        // this.$router.push({name: '/order/page1', params: {id: '1'}})
        this.$router.push({path: '/', query: {id: '2'}})
      }
    }
  }
</script>

<style scoped>
  .container{
    height: 868px;
    width: 836px;
  }
  .item{
    /*border: white 1px solid;*/
    width: 278px;
    display: inline-block;
    height: 286px;
    background-image:  url("../../assets/img/img6.jpg") ;
    transition: 0.3s;
    position: relative;
    margin: 0;
    padding: 0;
  }
  .container  .item:nth-child(3n+1){
    background-position-x: 0;
    /*left: -20px;*/
  }
  .container  .item:nth-child(3n+2){
    background-position-x: -286px;
  }
  .container  .item:nth-child(3n){
    background-position-x: -573px;
    /*left: 20px;*/
  }
  .container  .item:nth-child(-n+6){
    background-position-y: -280px;
    /*top: -20px;*/
  }
  .container  .item:nth-child(-n+3){
    background-position-y: 0px;
    /*top: -40px;*/
  }
  .item:nth-last-child(-n+3){
    background-position-y: -560px;
  }

  .container:hover  .item{
    left: 0;
    top: 0px;
    box-shadow: inset 0 0 0 0 #fff;
  }


</style>
