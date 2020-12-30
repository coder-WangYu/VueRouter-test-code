<template>
  <div class="login">
    <input placeholder="请输入用户名：" v-model="username"/>
    <input placeholder="请输入密码：" type="password" v-model="userpwd"/>
    <button type="button" @click="submitInfos">提交</button>
    <button type="button" @click="resetInfos">重置</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      userpwd: '',
    }
  },
  methods: {
    submitInfos() {
      document.cookie = this.username + '=' + this.userpwd
      window.confirm(`欢迎您${this.username}，是否回到刚才的页面？`) ? this.$router.go(-1) : this.$router.go(0)
    },
    resetInfos() {
      this.username = ''
      this.userpwd = ''
    }
  }
}
</script>

<style scoped>

</style>