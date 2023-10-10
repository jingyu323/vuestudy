<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    sss
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-loading-spinner .circular{
  width: 142px;
  height: 142px;
  animation: loading-rotate 2s linear infinite;
  display: none;
}

</style>
