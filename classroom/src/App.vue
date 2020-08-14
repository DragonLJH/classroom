<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/VuexTest">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/search">查询页</router-link>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <router-link to>用户管理页面</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/">登录/注册</router-link>
      </el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "4"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
