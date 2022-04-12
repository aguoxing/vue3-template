<template>
  <div class="app-main">
    <Header />
    <RouterView class="container" />
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.app-main {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
}
</style>
