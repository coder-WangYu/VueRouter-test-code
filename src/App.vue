<template>
  <div id="app">
    <button @click="show = !show">click</button>
    <AsyncCmp v-if="show" />
    <AsyncCmp1 v-if="show" />
  </div>
</template>

<script>
// import AsyncCmp from './components/async-cmp'

export default {
  components: {
    // AsyncCmp,
    AsyncCmp: () => import(/* webpackChunkName: "asyncCmp" */ './components/async-cmp'),
    AsyncCmp1: () => import(/* webpackChunkName: "asyncCmp" */ './components/async-cmp1'),
  },
  data () {
    return {
      show: false,
    }
  }
}
</script>