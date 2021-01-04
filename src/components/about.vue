<template>
  <div class="about">
    <p>关于</p>
    <router-link tag="button" to="/" class="link">去首页</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteLeave : (to, from, next) => {
    from.meta.leaveFlag ? window.confirm("确定残忍离开？") ? next() : next(false) : next()
  }
}
</script>

<style scoped>
  .link {
    border: 1px solid #000;
    cursor: pointer;
    margin: 500px 0;
  }
</style>