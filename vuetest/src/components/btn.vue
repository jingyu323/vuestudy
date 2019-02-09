<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>btn  file </h2>
    <button @click = "goback()">返回</button> <br>
    <button @click = "paramBack()">params 方式跳转</button> <br>
    <button @click = "queryBack()">query 方式跳转</button>
  </div>
</template>

<script>
export default {
  name: 'Btn1',
  data () {
    return {
      msg: 'this is the btn file '
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
