<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>btn  file </h2>
    <button @click = "goback()">返回</button> <br>
    <button @click = "paramBack()">params 方式跳转</button> <br>
    <button @click = "queryBack()">query 方式跳转</button>
    <mycomponent></mycomponent>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'promisetest',
  data () {
    return {
      msg: 'this is the promisetest  file '
    }
  },
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

Vue.component('mycomponent', {
  template: `<div>{{ message }}这是一个自定义组件</div>`,
  data () {
    return {
      message: '自定义组件 msg   '
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
