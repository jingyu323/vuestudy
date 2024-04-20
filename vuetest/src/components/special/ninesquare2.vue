<template>
  <div>
    <button @click = "goback()">返回</button> <br>
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

  </div>

</template>

<script>
  export default {
    name: 'ninesquare2',
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
    height: 836px;
    width: 860px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin: 0 auto;
  }
  .item{
    /*border: white 1px solid;*/
    background-size: 836px 860px  ;
    background-image:  url("../../assets/img/img6.jpg") ;
    box-shadow: inset 0 0 0 0 #fff;
    transition: 0.3s;
    position: relative;
  }
  .container  .item:nth-child(3n+1){
    background-position-x: 0;
    left: -20px;
  }
  .container  .item:nth-child(3n+2){
    background-position-x: -286px;
  }
  .container  .item:nth-child(3n){
    background-position-x: -573px;
    left: 20px;
  }
  .container  .item:nth-child(-n+6){
    background-position-y: -278px;
    top: -20px;
  }
  .container  .item:nth-child(-n+3){
    background-position-y: 0px;
    top: -40px;
  }
  .item:nth-last-child(-n+3){
    background-position-y: -556px;
  }

  .container:hover  .item{
     left: 0;
    top: 0px;
    box-shadow: inset 0 0 0 0 #fff;
  }




</style>
