<template>
    <div>
      <div>page1的值是:{{number}}</div>
      <!-- <img :src='logo' alt="logo"> -->
      <img src="../src/assets/logo.png" alt="logo">

    </div>
</template>

<script>
import {mixin} from './mixin/mixin'

export default {
  mixins:[mixin],
  //这里注意：属性名为mixins，值为数组类型
  data () {
    return {
      // logo: '../src/assets/logo.png'
      // logo: require('../src/assets/logo.png')
    }
  },
  mounted(){
      this.demo1();
  },
  methods:{
      demo1(){
      }
  }
}
</script>
<style scoped>

</style>
