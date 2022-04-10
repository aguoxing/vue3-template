<template>
  <div class="app-main">
    <BlogMenu />
    <RouterView class="container" />
    <Footer />
    <ElBacktop :bottom="bottomHeight" />
  </div>
</template>

<script lang="ts" setup>
const bottomHeight = 85
</script>

<style lang="scss" scoped>
.app-main {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
}
</style>
