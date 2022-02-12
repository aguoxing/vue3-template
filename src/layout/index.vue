<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Header from './header/index.vue'
import Footer from './footer/index.vue'
</script>

<style scoped>

</style>