<template>
  <div class="home">
    <p>首页</p>
    <router-link to="/about" tag="button" class="link">去关于</router-link>
  </div>
</template>

<script>
export default {
  mounted () {
    // console.log(this.$route)
  },
}
</script>

<style scoped>
  .link {
    border: 1px solid #000;
    cursor: pointer;
    margin: 500px 0;
  }
</style>