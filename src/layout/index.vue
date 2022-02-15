<template>
  <div class="app-main">
    <Header/>
    <router-view class="content-container" :style="{'min-height': fullHeight+'px'}"></router-view>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
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
.content-container {
  width: 80%;
  margin: auto;
}
</style>