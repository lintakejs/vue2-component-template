<template>
  <Test />
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Test from '../src/index'

@Component({
  components: {
    Test
  }
})
export default class Demo extends Vue {
}
</script>
