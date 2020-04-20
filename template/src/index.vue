<template>
  <p class="test1 test">这是一个测试组件</p>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
}
</script>

<style lang="stylus" scoped>
.test {
  color: #666
}
.test1 {
  color: red
}
</style>
<style lang="less" scoped>
.test2 {
  color: black
}
</style>
<style lang="scss" scoped>
.test3 {
  color: blue
}
</style>
<style scoped>
.test4 {
  color: white
}
</style>
