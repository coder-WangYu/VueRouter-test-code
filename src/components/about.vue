<template>
  <div class="about">
    关于
  </div>
</template>

<script>
export default {
  beforeRouteLeave : (to, from, next) => {
    from.meta.leaveFlag ? window.confirm("确定残忍离开？") ? next() : next(false) : next()
  }
}
</script>