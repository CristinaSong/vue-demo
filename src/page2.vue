<template>
    <div>page2的值是:{{number}}</div>
</template>

<script>
import {mixin} from './mixin/mixin'

export default {
  mixins:[mixin],
  //这里注意：属性名为mixins，值为数组类型
  data () {
    return {

    }
  },
}
</script>

<style scoped>

</style>
