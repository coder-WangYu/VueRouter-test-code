<template>
  <div id="app">
    <div class="header">
      <div class="nav">
        <div class="left-title">个人博客</div>
        <div class="right-nav">
          <router-link to="/">首页</router-link>
          <router-link to="/article">文章</router-link>
          <router-link to="/hot">近期热门</router-link>
          <router-link to="/hy">行业相关</router-link>
          <router-link :to="{ name: 'new' }">最新发布</router-link>
          <router-link to="/about">关于</router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
  @import url("./assets/css/reset.css");
  .header {
    width: 100%;
    height: 50px;
    background: lightblue;
  }
  .nav {
    width: 80%;
    height: 100%;
    line-height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .nav .left-title {
    font-size: 22px;
  }
  .nav .right-nav {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
  .container {
    width: 80%;
    padding: 20px;
    margin: 0 auto;
  }
</style>