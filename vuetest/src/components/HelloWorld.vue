<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <p v-if="true">现在你看到我了</p>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template 嗡嗡嗡呃
        </a>
      </li>

      <li>
        <router-link to="/echartdot"> dot test </router-link>
        <router-link to="/echartdotMap"> echartdotMap   </router-link>
        <router-link to="/echartdotSingleAxiz"> echartdotSingleAxiz   </router-link>
        <router-link to="/echartdAiq"> echartdAiq   </router-link>
        <router-link to="/echartdotChinaMap"> echartdotChinaMap   </router-link>
        <router-link to="/echartChinaGEOMap"> echartChinaGEOMap   </router-link>
        <router-link to="/echartRailwayMap"> echartRailwayMap   </router-link>
        <router-link to="/echartRailwayLineMap"> echartRailwayLineMap   </router-link>
        <router-link to="/echartNetMap"> echartNetMap   </router-link>
          <router-link to="/edittable"> edittable   </router-link>
            <router-link to="/monthdata"> monthdata   </router-link>
             <router-link to="/edittable2"> edittable2   </router-link>


      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <router-link to="/axiosvue">Go toaxiosvue </router-link>
      </li>
      <li>
        <router-link to="/Btn">Go to Btn  router link </router-link>
      </li>
      <li>
        <a v-on:click="doSomething">点事件</a>
        <a v-on:click="doeat">doeat</a>
      </li>
      <li>
        <router-link to="/promisetest">promise test  </router-link>
      </li>
    </ul>

   prame  is  {{this.$route.params.id}} <br>

    query is  {{this.$route.query.id}}
    <br>
    <mycomponent></mycomponent>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    doSomething: function () {
      alert('doSomething')
    },
    cook: function () {
      console.log('开始做饭。')
      var p = new Promise(function (resolve, reject) { // 做一些异步操作
        setTimeout(function () {
          console.log('做饭完毕！')
          resolve('鸡蛋炒饭')
        }, 1000)
      })
      return p
    },
    eat: function () {
      console.log('开始吃饭。')
      var p = new Promise(function (resolve, reject) { // 做一些异步操作
        setTimeout(function () {
          console.log('吃饭完毕!')
          resolve('一块碗和一双筷子')
        }, 2000)
      })
      return p
    },
    doeat: function () {
      let _this = this
      _this.$options.methods.cook()
        .then(function (data) {
          // throw new Error('米饭被打翻了！')
          _this.$options.methods.eat(data)
        })
        .catch(function (data) {
          console.log(data)
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
  margin: 5px;
  color: #42b983;
}
</style>
