<template>
 
 <div>
   

  <router-link to="/easydemo">Go toaxiosvue </router-link> <br> 
  <router-link to="/HelloWorld2">Go HelloWorld2 </router-link><br>
  <router-link to="/VideoPlayer">Go VideoPlayer </router-link><br>
  <router-link to="/VideoPlayer2">Go VideoPlayer2 </router-link><br>
 

</div>


 
</template>
<script >
import Vue from 'vue'
export default {
  data() {
    return {
      videoList: [
        //提供2个测试用直播的地址  
        { src: "http://1011.hlsplay.aodianyun.com/demo/game.flv", },
        { src: "http://img.ksbbs.com/asset/Mon_1704/15868902d399b87.flv", }
    ]
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
};
</script>

