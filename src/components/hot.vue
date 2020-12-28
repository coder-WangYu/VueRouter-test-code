<template>
  <div class="hot">
    近期热门
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log(to)
    console.log(from)
    next()
  }
}
</script>