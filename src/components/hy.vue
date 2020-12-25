<template>
  <div class="hy">
    <div class="left-nav">
      <router-link to="/hy/jd" tag="li">鲸蹲</router-link>
      <router-link to="/hy/sn" tag="li">酥柠</router-link>
      <router-link to="/hy/hp" tag="li">烩葡</router-link>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  .hy {
    display: flex;
    min-height: 60vh;
    justify-content: space-between;
  }
  .left-nav {
    flex: 1;
    max-width: 20%;
    border-radius: 4px;
    background: #f1fbfb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .left-nav li {
    padding: 10px 60px;
    border-radius: 4px;
    margin: 10px 0;
    cursor: pointer;
    border: 1px solid #000;
  }
  .right-content {
    flex: 0;
    min-height: 15vh;
    min-width: 80%;
    padding: 10px;
  }
</style>