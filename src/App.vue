<template>
  <div id="app">
    <button @click="method0">css动画</button>
    <!-- <button @click="method1">page1</button>
    <button @click="method2">page2</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    method0(){
      this.$router.push('/page0');
    },
    method1(){
      this.$router.push('/page1');
    },
    method2(){
      this.$router.push('/page2');
    }
  }
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
</style>
