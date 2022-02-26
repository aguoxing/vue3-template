<template>
  <div class="app-main">
    <Header />
    <router-view class="container"></router-view>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/layout/components/header/index.vue'
import Footer from '@/layout/components/footer/index.vue'
</script>

<style lang="scss" scoped>
.app-main {
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
