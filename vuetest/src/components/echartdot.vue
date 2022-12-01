/* eslint-disable */ 
<template>
  <div class="hello">
    
    <h2>dot  test   file </h2>
    <button @click = "goback()">返回</button> 
  </div>
</template>

<script>
export default {
  name: 'echartdot',
  data () {
    return {
      msg: 'this is  echartdot  file '
    }
  },
  methods: {
    goback: function () {
      window.history.back()
    },
    axiosvueGet: function () {
      this.axiosIns.get('/query').then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },
    axiosvuePost: function () {
      // this.$router.push({name: '/order/page1', params: {id: '1'}})
      this.axiosIns.post('/upload', {
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
