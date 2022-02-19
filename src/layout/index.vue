<template>
  <div class="app-main">
    <Header/>
    <router-view class="container" :style="{'min-height': fullHeight+'px'}"></router-view>
    <Footer/>
    <el-backtop />
  </div>
</template>

<script lang="ts" setup>
import Header from './header/index.vue'
import Footer from './footer/index.vue'
const fullHeight = document.documentElement.clientHeight - 160
</script>

<style lang="scss" scoped>
.app-main {
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>