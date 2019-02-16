<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>axiosvue test    file </h2>
    <button @click = "goback()">返回</button> <br>
    <button @click = "axiosvuePost()">axios post</button> <br>
    <button @click = "axiosvueGet()">axiosvue get </button>
  </div>
</template>

<script>
export default {
  name: 'axiosvue',
  data () {
    return {
      msg: 'this is  axiosvue  file '
    }
  },
  methods: {
    goback: function () {
      window.history.back()
    },
    axiosvueGet: function () {
      this.$http.get('https://easy-mock.com/mock/5c67cb3fadf6a5499fb8d31e/vuetest/query').then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },
    axiosvuePost: function () {
      // this.$router.push({name: '/order/page1', params: {id: '1'}})
      this.$http.post('https://easy-mock.com/mock/5c67cb3fadf6a5499fb8d31e/vuetest/upload', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
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
